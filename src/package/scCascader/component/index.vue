<template>
  <!-- :overlayStyle="{'display': isDefaultValue ? 'static' : 'none'}" -->
  <Tooltip
    ref="tooltipRef"
    :visible="popperVisible"
    :teleported="teleported"
    :overlayClassName="`${[nsCascader + '-dropdown', popperClass, popupClassName, uuid].join(' ')}`"
    :overlayStyle="popupStyle"
    :popper-options="popperOptions"
    :fallback-placements="[
      'bottomLeft',
      'bottom',
      'topLeft',
      'top',
      'right',
      'left',
    ]"
    :stop-popper-mouse-event="false"
    :gpu-acceleration="false"
    :placement="popupPlacement || 'bottomLeft'"
    :transition="`${nsCascader}-zoom-in-top`"
    effect="light"
    pure
    persistent
    @visible-change="hideSuggestionPanel"
    trigger="click"
    :get-popup-container="getPopupContainer"
  >
    <template #default>
      <div
        v-clickoutside:[popperPaneRef]="() => togglePopperVisible(false)"
        :class="[
          nsCascader,
          nsCascader + '-' + realSize,
          isDisabled ? 'isDisabled' : '',
          // nsCascader.is('disabled', isDisabled),
          multiple ? 'isMultiple' : ''
        ]"
        ref="cascaderRef"
        :style="$attrs.style"
        @click="() => togglePopperVisible(readonly ? undefined : true)"
        @keydown="handleKeyDown"
        @mouseenter="inputHover = true"
        @mouseleave="inputHover = false"
      >
      <!-- nsCascader.is('focus', popperVisible) -->
        <ScInput
          ref="input"
          v-model:value="inputValue"
          :placeholder="multiple ? currentPlaceholder : inputPlaceholder"
          :readonly="readonly"
          :disabled="isDisabled"
          :validate-event="false"
          :size="realSize"
          :class="popperVisible ? 'isFocus' : ''"
          @compositionstart="handleComposition"
          @compositionupdate="handleComposition"
          @compositionend="handleComposition"
          @focus="(e) => $emit('focus', e)"
          @blur="(e) => $emit('blur', e)"
          @input="handleInput"
        >
          <template #prefix v-if="isPrefixIcon">
            <slot name="prefixIcon"></slot>
          </template>
          <template #suffix>
            <i
              v-if="clearBtnVisible"
              key="clear"
              class="sc-ui sc-error-fill"
              @click.stop="handleClear"
            ></i>
            <i
              v-else
              :class="[
                'sc-ui', 
                'sc-xiangxia',
                popperVisible ? 'isReverse' : ''
              ]"
              key="arrow-down"
              @click.stop="togglePopperVisible()"
            >
            </i>
            <template v-if="isInfoTooltip">
              <Tooltip
              >
                <template #title>
                  {{ infoTooltip }}
                </template>
                <i class="sc-ui sc-question-circle"></i>
              </Tooltip>
            </template>
          </template>
        </ScInput>
        <div v-if="multiple" ref="tagWrapper" :class="[nsCascader + '-tags', collapseTags ? 'isCollapseTags' : '', multiple && isPrefixIcon ? 'isMultiple-prefixIcon-tags' : '']">
          <div v-if="multiple && isPrefixIcon" class="isMultiple-prefixIcon">
            <slot name="prefixIcon"></slot>
          </div>
          <div v-if="isPrefixIcon" class="isMultiple-prefixIcon-tags__container">
            <ScTag
              v-for="tag in presentTags"
              :key="tag.key"
              :type="tagType"
              :size="tagSize"
              :hit="tag.hitState"
              :closable="tag.closable"
              :class="[tag.isCollapseTag ? 'isTooltipTag' : '']"
              disable-transitions
              @close="(event) => { event.stopPropagation(); deleteTag(tag); }"
            >
              <template v-if="tag.isCollapseTag === false">
                <span >{{ tag.text }}</span>
              </template>
              <template v-else>
                <template v-if="collapseTagsTooltip === false">
                    <span>{{ tag.text }}</span>
                </template>
                <template v-else>
                  <Tooltip
                    :disabled="popperVisible || !collapseTagsTooltip"
                    :fallback-placements="['bottom', 'top', 'right', 'left']"
                    placement="bottom"
                    overlay-class-name="isTooltipTag-pd0"
                    effect="light"
                  >
                    <template #default>
                      <span>{{ tag.text }}</span>
                    </template>
                    <template #title>
                      <ScScrollbar
                        :max-height="searchHeight"
                        :view-class="nsCascader + '-collapse-tags'"
                      >
                        <div
                          v-for="(tag2, idx) in allPresentTags.slice(1)"
                          :key="idx"
                          :class="nsCascader + '-collapse-tag'"
                        >
                          <ScTag
                            :key="tag2.key"
                            :class="['in-tooltip']"
                            :type="tagType"
                            :size="tagSize"
                            :hit="tag2.hitState"
                            :closable="tag2.closable"
                            disable-transitions
                            @close="(event) => {  event.stopPropagation(); deleteTag(tag2); }"
                            @click.stop="togglePopperVisible()"
                          >
                            <span>{{ tag2.text }}</span>
                          </ScTag>
                        </div>
                      </ScScrollbar>
                    </template>
                  </Tooltip>
                </template>
              </template>
            </ScTag>
            <input
              v-if="filterable && !isDisabled"
              v-model="searchInputValue"
              type="text"
              :class="nsCascader + '-search-input'"
              :placeholder="presentText || presentTags.length ? '' : inputPlaceholder"
              @input="(e) => handleInput(searchInputValue, e)"
              @click.stop="togglePopperVisible(true)"
              @keydown.delete="handleDelete"
              @focus="(e) => $emit('focus', e)"
              @blur="(e) => $emit('blur', e)"
              @compositionstart="handleComposition"
              @compositionupdate="handleComposition"
              @compositionend="handleComposition"
            />
          </div>
          <template v-else>
            <ScTag
              v-for="tag in presentTags"
              :key="tag.key"
              :type="tagType"
              :size="tagSize"
              :hit="tag.hitState"
              :closable="tag.closable"
              :class="[tag.isCollapseTag ? 'isTooltipTag' : '']"
              disable-transitions
              @close="(event) => { event.stopPropagation(); deleteTag(tag); }"
            >
              <template v-if="tag.isCollapseTag === false">
                <span >{{ tag.text }}</span>
              </template>
              <template v-else>
                <template v-if="collapseTagsTooltip === false">
                    <span>{{ tag.text }}</span>
                </template>
                <template v-else>
                  <Tooltip
                    :disabled="popperVisible || !collapseTagsTooltip"
                    :fallback-placements="['bottom', 'top', 'right', 'left']"
                    placement="bottom"
                    overlay-class-name="isTooltipTag-pd0"
                    effect="light"
                  >
                    <template #default>
                      <span>{{ tag.text }}</span>
                    </template>
                    <template #title>
                      <ScScrollbar
                        :max-height="searchHeight"
                        :view-class="nsCascader + '-collapse-tags'"
                      >
                        <div
                          v-for="(tag2, idx) in allPresentTags.slice(1)"
                          :key="idx"
                          :class="nsCascader + '-collapse-tag'"
                        >
                          <ScTag
                            :key="tag2.key"
                            :class="['in-tooltip']"
                            :type="tagType"
                            :size="tagSize"
                            :hit="tag2.hitState"
                            :closable="tag2.closable"
                            disable-transitions
                            @close="(event) => {  event.stopPropagation(); deleteTag(tag2); }"
                            @click.stop="togglePopperVisible()"
                          >
                            <span>{{ tag2.text }}</span>
                          </ScTag>
                        </div>
                      </ScScrollbar>
                    </template>
                  </Tooltip>
                </template>
              </template>
            </ScTag>
            <input
              v-if="filterable && !isDisabled"
              v-model="searchInputValue"
              type="text"
              :class="nsCascader + '-search-input'"
              :placeholder="presentText || presentTags.length ? '' : inputPlaceholder"
              @input="(e) => handleInput(searchInputValue, e)"
              @click.stop="togglePopperVisible(true)"
              @keydown.delete="handleDelete"
              @focus="(e) => $emit('focus', e)"
              @blur="(e) => $emit('blur', e)"
              @compositionstart="handleComposition"
              @compositionupdate="handleComposition"
              @compositionend="handleComposition"
            />
          </template>
        </div>

        <div v-if="!isDefaultValue" style="height: 0; opacity: 0; width: 0; overflow: hidden; position: relative;">
          <ScCascaderPanel
            ref="panel1"
            v-model="checkedValue"
            :options="options"
            :props="props"
            :border="false"
            :render-label="$slots.default"
            @expand-change="handleExpandChange"
            @close="$nextTick(() => togglePopperVisible(false))"
          />
        </div>
      </div>
    </template>

    <template #title>
      <ScCascaderPanel
        v-show="!filtering"
        ref="panel"
        v-model="checkedValue"
        :options="options"
        :props="props"
        :border="false"
        @expand-change="handleExpandChange"
        @close="$nextTick(() => togglePopperVisible(false))"
      >
        <template #empty v-if="$slots.empty">
          <slot name="empty"></slot>
        </template>
        <template #default="{ node, data }" v-if="$slots.default">
          <slot name="default" v-bind="{ node, data}"></slot>
        </template>
      </ScCascaderPanel>
      <ScScrollbar
        v-if="filterable"
        v-show="filtering"
        ref="suggestionPanel"
        tag="ul"
        :max-height="searchHeight"
        :class="nsCascader + '-suggestion-panel'"
        :view-class="nsCascader + '-suggestion-list'"
        @keydown="handleSuggestionKeyDown"
      >
        <template v-if="suggestions.length">
          <li
            v-for="item in suggestions"
            :key="item.uid"
            :class="[
              nsCascader + '-suggestion-item',
              item.checked ? 'isChecked' : ''
              // nsCascader.is('checked', item.checked),
            ]"
            :tabindex="-1"
            @click=" handleSuggestionClick(item)"
          >
            <Checkbox
              v-model:checked="item.checked"
            >
              <span>{{ item.text }}</span>
            </Checkbox>
          </li>
        </template>
        <slot v-else name="empty">
          <li :class="nsCascader + '-empty-text'" v-if="!$slots.empty">
            <!-- {{ t('el.cascader.noMatch') }} -->
            暂无数据
          </li>
          <slot name="empty"></slot>
        </slot>
      </ScScrollbar>
    </template>
  </Tooltip>
</template>

<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { isPromise } from '@vue/shared'
import lodash from 'lodash'

import { isClient, useCssVar, useResizeObserver } from '@vueuse/core'
import {
  ScCascaderPanel,
  CommonProps,
} from '../../cascaderPanel'
import { ScInput } from '../../input'

import { ScScrollbar } from '../../scrollbar'
import { ScTag } from '../../tag'
import { Tooltip, Checkbox } from 'ant-design-vue'
import ClickOutside from '../../../directives/clickOutside'

import {
  focusNode,
  getSibling,
  isKorean
} from './utils'

import {
  CHANGE_EVENT,
  EVENT_CODE,
  UPDATE_MODEL_EVENT,
} from '../../cascaderPanel/utils'

// import { ArrowDown, Check, CircleClose } from '@element-plus/icons-vue'

import type { Options } from './type'
import { tagProps } from './type'

import { pxToRem, isArray } from '../../../utils'

import { buildUUID } from '../../../utils/uuid'

import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  CascaderNode,
  CascaderValue,
  Tag as TagType,
} from '../../cascaderPanel'

import type { ComponentSize } from './type'

const { cloneDeep, debounce, isEqual } = lodash

type cascaderPanelType = InstanceType<typeof ElCascaderPanel>
type tooltipType = InstanceType<typeof ElTooltip>
type inputType = InstanceType<typeof ElInput>
type suggestionPanelType = InstanceType<typeof ElScrollbar>

const popperOptions: Partial<Options> = {
  modifiers: [
    {
      name: 'arrowPosition',
      enabled: true,
      phase: 'main',
      fn: ({ state }) => {
        const { modifiersData, placement } = state as any
        if (['right', 'left', 'bottom', 'top'].includes(placement)) return
        modifiersData.arrow.x = 35
      },
      requires: ['arrow'],
    },
  ],
}
const COMPONENT_NAME = 'ScCascaderNew'
export default defineComponent({
  name: COMPONENT_NAME,

  components: {
    ScCascaderPanel,
    ScInput,
    Tooltip,
    ScScrollbar,
    ScTag,
    Checkbox
  },

  directives: {
    Clickoutside: ClickOutside,
  },

  props: {
    ...CommonProps,
    size: {
      type: String as PropType<ComponentSize>,
      validator: (type) => { return ['', 'default', 'small', 'large'].includes(type) },
    },
    placeholder: {
      type: String,
    },
    disabled: Boolean,
    allowClear: Boolean,
    popupClassName: String,
    popupStyle: Object,
    filterable: Boolean,
    popupPlacement: String,
    getPopupContainer: Function as PropType<(triggerNode: HTMLElement) => void>,
    filterMethod: {
      type: Function as PropType<
        (node: CascaderNode, keyword: string) => boolean
      >,
      default: (node: CascaderNode, keyword: string) =>
        node.text.includes(keyword),
    },
    separator: {
      type: String,
      default: ' / ',
    },
    showAllLevels: {
      type: Boolean,
      default: true,
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false,
    },
    debounce: {
      type: Number,
      default: 300,
    },
    beforeFilter: {
      type: Function as PropType<(value: string) => boolean | Promise<any>>,
      default: () => true,
    },
    popperClass: {
      type: String,
      default: '',
    },
    teleported: Object,
    tagType: { ...tagProps.type, default: 'dark' },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    infoTooltip: String
  },

  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'focus',
    'blur',
    'visible-change',
    'expand-change',
    'remove-tag',
  ],

  setup(props, { emit, slots }) {
    let inputInitialHeight = 0
    let pressDeleteCount = 0

    const nsCascader = 'scCascaderNew'
    const nsInput = 'ScInputCascaderNew'

    const uuid = 'scCascader' + buildUUID()

    // const { t } = useLocale()
    // const { form, formItem } = useFormItem()

    const tooltipRef: Ref<tooltipType | null> = ref(null)
    const input: Ref<inputType | null> = ref(null)
    const cascaderRef = ref(null)
    const tagWrapper = ref(null)
    const panel: Ref<cascaderPanelType | null> = ref(null)
    const panel1: Ref<cascaderPanelType | null> = ref(null)
    const suggestionPanel: Ref<suggestionPanelType | null> = ref(null)
    const popperVisible = ref(false)
    const inputHover = ref(false)
    const filtering = ref(false)
    const inputValue = ref('')
    const searchInputValue = ref('')
    const presentTags: Ref<TagType[]> = ref([])
    const allPresentTags: Ref<TagType[]> = ref([])
    const suggestions: Ref<CascaderNode[]> = ref([])
    const isOnComposition = ref(false)
    const isDefaultValue = ref(false)

    const searchHeight = pxToRem(260)


    // const defaultValue = ref()calculateCheckedValue

    // const isDisabled = computed(() => props.disabled || form?.disabled)

    const isPrefixIcon = computed(() => {
      return Object.keys(slots).includes('prefixIcon')
    })
    const isDisabled = computed(() => props.disabled)
    const inputPlaceholder = computed(
      () => props.placeholder || '请选择'
    )
    const currentPlaceholder = computed(() =>
      searchInputValue.value || presentTags.value.length > 0
        ? ''
        : inputPlaceholder.value
    )
    const realSize = computed(() => {
      return 'default'
    })
    const tagSize = computed(() =>
      ['small'].includes(realSize.value) ? 'small' : 'default'
    )
    const multiple = computed(() => !!props.props.multiple)
    const collapseTags = computed(() => !!props.collapseTags)
    const readonly = computed(() => !props.filterable || multiple.value)
    const searchKeyword = computed(() =>
      multiple.value ? searchInputValue.value : inputValue.value
    )
    const isInfoTooltip = computed(() => !!props.infoTooltip)
    const infoTooltip = computed(() => props.infoTooltip)
    const checkedNodes: ComputedRef<CascaderNode[]> = computed(
      () => {
        return panel.value?.checkedNodes || panel1.value?.checkedNodes || []
      }
    )
    const clearBtnVisible = computed(() => {
      if (
        !props.allowClear ||
        isDisabled.value ||
        filtering.value ||
        !inputHover.value
      )
        return false

      return !!checkedNodes.value.length
    })
    const presentText = computed(() => {
      const { showAllLevels, separator } = props
      const nodes = checkedNodes.value
      return nodes.length
        ? multiple.value
          ? ''
          : nodes[0].calcText(showAllLevels, separator)
        : ''
    })

    const checkedValue = computed<CascaderValue>({
      get() {
        return cloneDeep(props.modelValue) as CascaderValue
      },
      set(val) {
        emit(UPDATE_MODEL_EVENT, val)
        const newCheckedNodes = checkedNodes.value?.map(item => {
          return {...item, ...item.data}
        })
        emit(CHANGE_EVENT, val, newCheckedNodes)
        if (props.validateEvent) {
          // formItem?.validate('change').catch((err) => debugWarn(err))
        }
      },
    })

    watch(() => popperVisible.value, (val) => {
      if (val && !isDefaultValue.value) {
        const timer = setTimeout(() => {
          isDefaultValue.value = true
          clearTimeout(timer)
        })
      }
      if (val) {
        const inputDom = cascaderRef?.value?.querySelector('.scInput input');
        inputDom.addEventListener('mousedown', (e: MouseEvent) => {
          e.preventDefault()
        })
      }
    })

    // const popperPaneRef = computed(() => {
    //   console.log('tooltipRef: ', tooltipRef.value);
    //   return tooltipRef.value?.popperRef?.contentRef
    // })
    const popperPaneRef = ref()
    const multipleOptionRef = ref()

    const togglePopperVisible = (visible?: boolean) => {
      if (isDisabled.value) return

      visible = visible ?? !popperVisible.value

      if (visible !== popperVisible.value) {
        popperVisible.value = visible
        input.value?.input?.input?.setAttribute('aria-expanded', `${visible}`)

        if (visible) {
          updatePopperPosition()
          nextTick(panel.value?.scrollToExpandingNode)
        } else if (props.filterable) {
          syncPresentTextValue()
        }

        emit('visible-change', visible)
      }

      nextTick(() => {
        // const timer = setTimeout(() => {
          //   clearTimeout(timer)
          // }, 100)
          const timer = window.requestAnimationFrame(() => {
            const cascaderPanelPop = document && document.querySelector('.'+uuid)
            popperPaneRef.value = cascaderPanelPop
            multipleOptionRef.value = suggestionPanel.value?.wrapRef
        })
      })
    }

    const updatePopperPosition = () => {
      nextTick(() => {
        tooltipRef.value?.updatePopper?.()
      })
    }

    const hideSuggestionPanel = () => {
      filtering.value = false
    }

    const genTag = (node: CascaderNode): TagType => {
      const { showAllLevels, separator } = props
      return {
        node,
        key: node.uid,
        text: node.calcText(showAllLevels, separator),
        hitState: false,
        closable: !isDisabled.value && !node.isDisabled,
        isCollapseTag: false,
      }
    }

    const deleteTag = (tag: TagType) => {
      const node = tag.node as CascaderNode
      if (panel.value && panel.value.calculateCheckedValue) {
        node.doCheck(false)
        panel.value?.calculateCheckedValue()
        emit('remove-tag', node.valueByOption)
      } else {
        const { emitPath } = props.props
        const currentValue = emitPath === false ? node.value : node.pathValues
        const newData = (props.modelValue || []).filter((val:any) => {
          if (!emitPath) {
            if (isArray(val) || isArray(currentValue)) {
              return !isEqual(val, currentValue)
            } 
            return currentValue !== val
          }
          return !isEqual(val, currentValue)
        })
        emit(UPDATE_MODEL_EVENT, newData)
        emit(CHANGE_EVENT, newData)
      }
    }

    const calculatePresentTags = () => {
      if (!multiple.value) return

      const nodes = checkedNodes.value
      const tags: TagType[] = []

      const allTags: TagType[] = []
      nodes.forEach((node) => allTags.push(genTag(node)))
      allPresentTags.value = allTags

      if (nodes.length) {
        const [first, ...rest] = nodes
        const restCount = rest.length

        tags.push(genTag(first))

        if (restCount) {
          if (props.collapseTags) {
            tags.push({
              key: -1,
              text: `+ ${restCount}`,
              closable: false,
              isCollapseTag: true,
            })
          } else {
            rest.forEach((node) => tags.push(genTag(node)))
          }
        }
      }

      presentTags.value = tags
    }

    const calculateSuggestions = () => {
      const { filterMethod, showAllLevels, separator } = props
      const res = panel.value
        ?.getFlattedNodes(!props.props.checkStrictly)
        ?.filter((node) => {
          if (node.isDisabled) return false
          node.calcText(showAllLevels, separator)
          return filterMethod(node, searchKeyword.value)
        })

      if (multiple.value) {
        presentTags.value.forEach((tag) => {
          tag.hitState = false
        })
        allPresentTags.value.forEach((tag) => {
          tag.hitState = false
        })
      }

      filtering.value = true
      suggestions.value = res!
      updatePopperPosition()
    }

    const focusFirstNode = () => {
      let firstNode!: HTMLElement

      if (filtering.value && suggestionPanel.value) {
        firstNode = suggestionPanel.value.$el.querySelector(
          `.${nsCascader + '-suggestion-item'}`
        )
      } else {
        firstNode = panel.value?.$el.querySelector(
          `.${nsCascader + 'node'}[tabindex="-1"]`
        )
      }

      if (firstNode) {
        firstNode.focus()
        !filtering.value && firstNode.click()
      }
    }

    const updateStyle = () => {
      const inputInner = input.value?.input?.input
      const tagWrapperEl = tagWrapper.value
      const suggestionPanelEl = suggestionPanel.value?.$el

      if (!isClient || !inputInner) return

      if (suggestionPanelEl) {
        const suggestionList = suggestionPanelEl.querySelector(
          `.${nsCascader + 'suggestion-list'}`
        )
        if (suggestionList) {
          suggestionList.style.minWidth = `${inputInner.offsetWidth}px`
        }
      }

      if (tagWrapperEl) {
        const { offsetHeight } = tagWrapperEl
        const height =
          presentTags.value.length > 0
            ? `${Math.max(offsetHeight + 6, inputInitialHeight)}px`
            : `${inputInitialHeight}px`
        inputInner.style.height = height
        updatePopperPosition()
      }
    }

    const getCheckedNodes = (leafOnly: boolean) => {
      return panel?.value?.getCheckedNodes(leafOnly)
    }

    const getCheckedNodeKeys = (leafOnly: boolean) => {
      return panel?.value?.getCheckedNodeKeys(leafOnly)
    }

    const handleExpandChange = (value: CascaderValue) => {
      updatePopperPosition()
      emit('expand-change', value)
    }

    const handleComposition = (event: CompositionEvent) => {
      const text = (event.target as HTMLInputElement)?.value
      if (event.type === 'compositionend') {
        isOnComposition.value = false
        nextTick(() => handleInput(text))
      } else {
        const lastCharacter = text[text.length - 1] || ''
        isOnComposition.value = !isKorean(lastCharacter)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOnComposition.value) return

      switch (e.code) {
        case EVENT_CODE.enter:
          togglePopperVisible()
          break
        case EVENT_CODE.down:
          togglePopperVisible(true)
          nextTick(focusFirstNode)
          e.preventDefault()
          break
        case EVENT_CODE.esc:
          if (popperVisible.value === true) {
            e.preventDefault()
            e.stopPropagation()
            togglePopperVisible(false)
          }
          break
        case EVENT_CODE.tab:
          togglePopperVisible(false)
          break
      }
    }

    const handleClear = () => {
      if (panel.value && panel.value.clearCheckedNodes) {
        panel.value?.clearCheckedNodes()
      } else {
        window?.requestAnimationFrame(() => {
          togglePopperVisible(true)
          window?.requestAnimationFrame(() => {
            panel.value?.clearCheckedNodes()
            togglePopperVisible(false)
          })
        })
        
      }
      if (!popperVisible.value && props.filterable) {
        syncPresentTextValue()
      }
      togglePopperVisible(false)
    }

    const syncPresentTextValue = () => {
      const { value } = presentText
      inputValue.value = value
      searchInputValue.value = value
    }

    const handleSuggestionClick = (node: CascaderNode) => {
      const { checked } = node
      if (multiple.value) {
        panel.value?.handleCheckChange(node, !checked, false)
      } else {
        !checked && panel.value?.handleCheckChange(node, true, false)
        togglePopperVisible(false)
      }
    }

    const handleSuggestionKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      const { code } = e

      switch (code) {
        case EVENT_CODE.up:
        case EVENT_CODE.down: {
          const distance = code === EVENT_CODE.up ? -1 : 1
          focusNode(
            getSibling(
              target,
              distance,
              `.${nsCascader + 'suggestion-item'}[tabindex="-1"]`
            )
          )
          break
        }
        case EVENT_CODE.enter:
          target.click()
          break
      }
    }

    const handleDelete = () => {
      const tags = presentTags.value
      const lastTag = tags[tags.length - 1]
      pressDeleteCount = searchInputValue.value ? 0 : pressDeleteCount + 1

      if (
        !lastTag ||
        !pressDeleteCount ||
        (props.collapseTags && tags.length > 1)
      )
        return

      if (lastTag.hitState) {
        deleteTag(lastTag)
      } else {
        lastTag.hitState = true
      }
    }

    const handleFilter = debounce(() => {
      const { value } = searchKeyword

      if (!value) return

      const passed = props.beforeFilter(value)

      if (isPromise(passed)) {
        passed.then(calculateSuggestions).catch(() => {
          /* prevent log error */
        })
      } else if (passed !== false) {
        calculateSuggestions()
      } else {
        hideSuggestionPanel()
      }
    }, props.debounce)

    const handleInput = (val: string, e?: KeyboardEvent) => {
      !popperVisible.value && togglePopperVisible(true)

      if (e?.isComposing) return

      val ? handleFilter() : hideSuggestionPanel()
    }

    watch(filtering, updatePopperPosition)

    watch([checkedNodes, isDisabled], calculatePresentTags)

    watch(presentTags, () => {
      nextTick(() => updateStyle())
    })

    watch(presentText, syncPresentTextValue, { immediate: true })

    onMounted(() => {
      const inputInner = input.value?.input?.input

      const inputInnerHeight =
        Number.parseFloat(
          useCssVar(`${'--' + nsInput + '-input-height'}`, inputInner).value
        ) - 2

      inputInitialHeight = inputInner.offsetHeight || inputInnerHeight
      useResizeObserver(inputInner, updateStyle)
    })

    // const overlayClassName = [nsCascader + '-dropdown', popperClass, uuid].

    return {
      isInfoTooltip,
      infoTooltip,
      popperOptions,
      tooltipRef,
      popperPaneRef,
      input,
      tagWrapper,
      panel,
      panel1,
      suggestionPanel,
      popperVisible,
      inputHover,
      inputPlaceholder,
      currentPlaceholder,
      filtering,
      presentText,
      checkedValue,
      inputValue,
      searchInputValue,
      presentTags,
      allPresentTags,
      suggestions,
      isDisabled,
      isOnComposition,
      realSize,
      tagSize,
      multiple,
      readonly,
      clearBtnVisible,

      nsCascader,
      nsInput,
      uuid,
      isDefaultValue,
      multipleOptionRef,
      isPrefixIcon,
      searchHeight,
      collapseTags,
      cascaderPanelRef: panel,
      cascaderRef,

      // t,
      togglePopperVisible,
      hideSuggestionPanel,
      deleteTag,
      focusFirstNode,
      getCheckedNodes,
      getCheckedNodeKeys,
      handleExpandChange,
      handleKeyDown,
      handleComposition,
      handleClear,
      handleSuggestionClick,
      handleSuggestionKeyDown,
      handleDelete,
      handleInput,
    }
  },
})
</script>
