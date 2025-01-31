---
map:
  path: /theme
realPath: src/package/theme/index.zh-CN.md
---

# less 公用样式

## 去除table Scroll 站位问题

```less
.not-table-scroll-empty {
  .ant-table-fixed-header {
    .ant-table-scroll .ant-table-header {
      overflow: auto !important;
    }
  }
  .ant-table-fixed-header > .ant-table-content > .ant-table-scroll > .ant-table-body {
    overflow: auto !important;
  }
}
```

## scrollbar 宽度

```less

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.scrollbar4::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

/*定义滚动条轨道 内阴影+圆角*/
.scrollbar4::-webkit-scrollbar-track {
  border-radius: 10px;
}

/*定义滑块 内阴影+圆角*/
.scrollbar4::-webkit-scrollbar-thumb {
  width: 4px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all .2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.scrollbar6::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/*定义滚动条轨道 内阴影+圆角*/
.scrollbar6::-webkit-scrollbar-track {
  border-radius: 10px;
}

/*定义滑块 内阴影+圆角*/
.scrollbar6::-webkit-scrollbar-thumb {
  width: 6px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all .2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
}

.scrollbar8::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/*定义滚动条轨道 内阴影+圆角*/
.scrollbar8::-webkit-scrollbar-track {
  border-radius: 10px;
}

/*定义滑块 内阴影+圆角*/
.scrollbar8::-webkit-scrollbar-thumb {
  width: 8px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all .2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
}

```

## 主题变量

```less

@import '~ant-design-vue/dist/antd.less';
@prefixCls: 'sc';
@bg-color: #fff;

@border-r-3: 3px;
@border-r-6: 6px;

@space: 4px;
@space-2: 8px;
@space-3: 12px;
@space-4: 16px;
@space-5: 20px;
@space-6: 24px;
@space-7: 28px;
@space-8: 32px;

@font-media: 14px;
@font-mini: 12px;
@font-big: 16px;
@font-large: 18px;

@color-000: #000;

@primary-color: #008CD3; // 全局主色
@link-color: #007DBD; // 链接色
@link-color1: #45ABDF; // 特殊链接色
@disabled-link-color: #BEDAFF; // link禁用色
@success-color: #00A870; // 成功色
@warning-color: #FF7D00; // 警告色
@error-color: #E34D59; // 错误色
@font-size-base: 14px; // 主字号
@heading-color: rgba(0, 0, 0, 0.9); // 标题色
@text-color: rgba(0, 0, 0, 0.6); // 主文本色
@text-color-secondary: rgba(0, 0, 0, 0.4); // 次文本色
@disabled-color: rgba(0, 0, 0, 0.26); // 失效色
@border-radius-base: 3px; // 组件/浮层圆角
@border-color-base: #dcdcdc; // 边框色
@border-pagination-color: #dcdcdc;
@box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
@select-dropdown-height: 22px; // select option 高度
@select-dropdown-line-height: 22px;// select option line-height 高度

@disabled-bg: @background-color-base;
@disabled-active-bg: tint(@black, 90%);
@disabled-color-dark: fade(#fff, 35%);

@btn-active-color: #a6a6a6;
@border-color: #e7e7e7;
@tabs-shadow-bgColor: @disabled-bg;
@btn-light-color: #23A6F3;
@white-color: #fff;
@hover-shadow: fade(@link-color, 20);

@disabled-bg-color: #EEEEEE; // 禁选颜色

@shadow-outset-filter-color: 0px 0px 6px 0px #F0F3F7, 0px 4px 4px 0px rgb(35 166 243 / 18%);
@shadow-outset-color: 0px 0px 0px 3px #F0F3F7, 0px 4px 4px 0px rgb(35 166 243 / 13%);
@shadow-outset-tabs-active-color: 0px 0px 6px 0px #e2ecfa, 0px 4px 4px 0px rgb(35 166 243 / 20%);
@shadow-outset-tabs-color: 0px 4px 4px rgba(35, 166, 243, 0.08), 0px 0px 6px #F0F3F7;
@shadow-outset-disabled: 0px 4px 4px rgba(166, 166, 166, 0.08), 0px 0px 6px #F0F3F7;


@item-hover-bg: #f5f5f5;


// TimePicker
// @border-color-split: hsv(0, 0, 94%);
@calendar-bg: @bg-color;
@picker-panel-cell-width: 36px;
@picker-border-color: @border-color;
@picker-time-panel-column-width: 56px;
@picker-time-panel-column-height: 224px;
@picker-time-panel-cell-height: 30px;
@picker-panel-cell-height: 24px;
@picker-basic-cell-disabled-bg: rgba(0, 0, 0, 0.04);
@picker-text-height: 40px;
@picker-panel-without-time-cell-height: 66px;
@picker-basic-cell-hover-color: @item-hover-bg;
@picker-basic-cell-active-with-range-color: @primary-1;
@picker-date-hover-range-border-color: ~'var(--@{ant-prefix}-primary-color-deprecated-l-20)';
@picker-basic-cell-hover-with-range-color: ~'var(--@{ant-prefix}-primary-color-deprecated-l-35)';
@picker-date-hover-range-color: @picker-basic-cell-hover-with-range-color;


// Calendar
// ---
@calendar-bg: @component-background;
@calendar-input-bg: @input-bg;
@calendar-border-color: @border-color-inverse;
@calendar-item-active-bg: @item-active-bg;
@calendar-column-active-bg: ~'var(--@{ant-prefix}-primary-color-active-deprecated-f-30)';
@calendar-full-bg: @calendar-bg;
@calendar-full-panel-bg: @calendar-full-bg;

// @tabs-shadow-outset-color: 0px 0px 6px 0px #e2ecfa, 0px 4px 4px 0px rgb(35 166 243 / 20%);

@primary-shadow: 0px 2px 5px 0px fade(#23A6F3, 60%); // 祖逖渐变色

// @primary-shadow: 0px 2px 5px 0px rgba(35, 166, 243, 0.7);

@error-shadow: 0px 2px 5px 0px rgba(245, 63, 63, 0.5); // 祖逖渐变色

@input-xs-width: 104px;
@input-x-width: 216px;
@input-md-width: 328px;
@input-l-width: 440px;
@input-xl-width: 552px;

//************************** steps
// steps-wait-color
@steps-wait-color: @tabs-shadow-bgColor;
// steps-process-color
@steps-process-color: #000000;
// steps-process-color
@steps-success-color: #24a6f3;
// steps-error-color
@steps-error-color: #f53f3f;

@steps-finish-color: @success-color;

@steps-line-color: #a8abb2;

@steps-wait-txt-color: #abacab;


//*************************** tabs

@tabs-btn-textColor: rgba(0, 0, 0, 0.4);

@tabs-btn-activeColor: @primary-color;

@tabs-btn-bg: #F0F3F7;

//************************** radio
@radio-button-bg: #fafbfc;
@radio-button-border: #ebeef2;

//************************** alert

@alert-info: #F0F8FD;
@alert-success: #F0FAF7;
@alert-warning: #FEF6EF;
@alert-error: #FEF3F4;


//************************ modal

@cancel-btn-color: #E7E7E7;
@icon-hover-bgColor: #EEEEEE;
@icon-active-bgColor: @border-pagination-color;

@info-bg-color: fade(@primary-color, 10%);
@success-bg-color: fade(@success-color, 6%);
@error-bg-color: fade(@error-color, 6%);
@warning-bg-color: fade(@warning-color, 6%);



//************************* table

@table-header-bg: #E8F3FF;
@table-td-hover: #F8FAFF;
@table-border-color: @border-color;
@table-Menu-bg: #E5F3FB;
@colBtn-btn-bg: @icon-hover-bgColor;
//************************* select

@select-hover-bg: #f3f3f3;
@selected-hover-bg: @table-Menu-bg;
@active-bg: @cancel-btn-color;

//************************* dropdown

@menu-bg-color: @steps-wait-color;
@menu-hover-bg: #ECF2FE;

//************************* button

@btn-hover-color: #45ABDF;
@btn-column-color: #f5fbfd;
@btn-primary-disabled: #BEDAFF;
@btn-info-bg: #e7e7e7;
@shadow-bg-color: @btn-light-color;

// @btn-primary-disabled: #BEDAFF;

//************************ input

@disabled-bg-color: @icon-hover-bgColor;

//************************ switch

@switch-bg-color: #c5c5c5;

//************************ slider
@slider-bg-color: #EEEEEE;
@slider-dot-bg: #0097E3;
@slider-marker-color: #BFBFBF;

//************************ cascader
@cascader-Menu-bg: @table-Menu-bg;


//************************ datePicker

@today-bg-color: @table-Menu-bg;
@input-hover-bg: #f3f3f3;
@input-focus-color: #e7e7e7;


// ********************** link

@link-success-color: #2BA471;
@link-hover-success-color: #56C08D;
@link-active-success-color: #008858;
@link-disabled-success-color: #92DAB2;

@link-warning-color: #E37318;
@link-hover-warning-color: #FA9550;
@link-active-warning-color: #BE5A00;
@link-disabled-warning-color: #FFB98C;

@link-danger-color: #D54941;
@link-hover-danger-color: #F6685D;
@link-active-danger-color: #AD352F;
@link-disabled-danger-color: #FFB9B0;

// *********************** tag

@tag-select-color: @primary-color; 
@tag-select-bgColor: #E5F3FB;

@tag-process-color: #0FC6C2; 
@tag-process-bgColor: rgba(15, 198, 194, 0.01);

@tag-success-color: #00A870; 
@tag-success-bgColor: #E8F8F2;

@tag-warning-color: @warning-color; 
@tag-warning-bgColor: #FFF7E8;

@tag-error-color: @error-color; 
@tag-error-bgColor: #FDECEE;

@tag-freeze-color: @text-color; 
@tag-freeze-bgColor: #F3F3F3;

```
