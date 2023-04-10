---
map:
  path: /changelog
realPath: src/package/changelog/index.zh-CN.md
---

# 变更记录

### [0.0.100](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.98...0.0.100) (2023-04-08)


### Bug Fixes

* 修改 ScModal showCancelBtn showOkBtn 属性无效; title 为 null 时穿透 属性 ([6381ac7](http://gitlab.voneyun.com/frontend/sc-ui/commit/6381ac7a784319bea60eec546438a5ef835a238a))


### Features

* 1. ScButton 组件新增color 属性,在 type="shadow" 时生效; 2. 新增Scbadge 组件, 支持color 属性 3. 新增 ScModal.confirm方法 初版 ([38c1da4](http://gitlab.voneyun.com/frontend/sc-ui/commit/38c1da4c562bd3109e30f261bf1588dc824f70e4))



## [0.0.98](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.97...0.0.98) (2023-04-06)


### Features

* 1. 更新 ScTable 组件 文档 ([75aa19b](http://gitlab.voneyun.com/frontend/sc-ui/commit/75aa19b4f41bdf525286509d78ab8a04d97367cd))
* 1. 调整 ScTable Filter 支持 原始 ant-design-vue Table 入参 2. 调整 ScTabs 组件 默认宽度 3. 完善ScTags 组件功能 ([46c16d5](http://gitlab.voneyun.com/frontend/sc-ui/commit/46c16d53c7d4f6d4297b45efd50e221f0d9cc095))
* 1. 调整 ScTable rowKey 参数,支持 Function 参数 ([aef0d03](http://gitlab.voneyun.com/frontend/sc-ui/commit/aef0d03742e000a232ba70aa4e4889077d4cf846))



## [0.0.97](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.96...0.0.97) (2023-04-01)


### Features

* 1. 完善 ScTag 组件 文档 ([2a33584](http://gitlab.voneyun.com/frontend/sc-ui/commit/2a33584cb1a8182b9178dd15959c3ca8f78fdbd6))
* 1. 完善 tag 组件及文档 2. 完善link组件 文档 ([84caefb](http://gitlab.voneyun.com/frontend/sc-ui/commit/84caefb385d05d02d307e6fb3bdcd6a3078ae611))
* 1. 调整 ScLink 组件 2. 调整 ScTable 组件的 useColumn hooks ([899087e](http://gitlab.voneyun.com/frontend/sc-ui/commit/899087e10bb4eff08702e40d9d0b4cd43cc267db))



## [0.0.96](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.95...0.0.96) (2023-03-28)


### Features

* 1. 新增ScTag 组件 2. 调整 ScSelect class 样式穿透 3. 调整 ScTable 内部组件Actions 组件 样式 ([c998ccb](http://gitlab.voneyun.com/frontend/sc-ui/commit/c998ccb617804709bc16edd01f5d0d7c9bf45529))
* 优化 ScTable 内置组件引入方式 ([df9cf48](http://gitlab.voneyun.com/frontend/sc-ui/commit/df9cf48ad9c1f18eebb263f65a113f6c8c0722d5))



## [0.0.95](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.94...0.0.95) (2023-03-27)


### Features

* 1. 修改ScCascader 组件 class 穿透 2. 修复 basic 项目 分包问题 ([c33de7b](http://gitlab.voneyun.com/frontend/sc-ui/commit/c33de7bd7c4df389d3940825b3541cd3a661ff22))



## [0.0.94](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.93...0.0.94) (2023-03-23)


### Features

* 1. ScTable 调用search 组件库 重置为第一页 2. 修改 descripation style ([fdc6ffd](http://gitlab.voneyun.com/frontend/sc-ui/commit/fdc6ffdbd69befa8abae26992bbe041f867d0bf1))
* scIcon 组件 新增 全局配置 加载地址; 地址配置到window.iconfontUrl ([4e90807](http://gitlab.voneyun.com/frontend/sc-ui/commit/4e90807c09049477e5697e63b412304b4791d570))
* 调整 ScModal 内包含 ScTable 样式 ([e16ff06](http://gitlab.voneyun.com/frontend/sc-ui/commit/e16ff06350b576a4b6cc1644facb53eda5bb0518))



## [0.0.91](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.90...0.0.91) (2023-03-22)


### Features

* 1. ScDescription 支持 传入默认组件 2. ScSelect组件 prefix 初始化计算宽度 ([855334a](http://gitlab.voneyun.com/frontend/sc-ui/commit/855334a412eb6970dded4bacea0abacc104b2a25))



## [0.0.90](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.89...0.0.90) (2023-03-21)


### Features

* 1. 新增 ScLink 组件; 2. ScTable 组件中filter 组件 修改, columnDialog 组件 如果没有key 取 dataIndex ([5b922b5](http://gitlab.voneyun.com/frontend/sc-ui/commit/5b922b5e20a75e811461c0ee2662a8fbd657fefc))



## [0.0.89](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.88...0.0.89) (2023-03-20)


### Features

* 新增 setProps 触发 setMultipleAction 重新赋值 ([c50aad1](http://gitlab.voneyun.com/frontend/sc-ui/commit/c50aad1df376dc1dcf222acfdf280e516d65a260))



## [0.0.88](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.87...0.0.88) (2023-03-20)


### Bug Fixes

* 根据 最新 设计, 更新 样式细节 ([926ea17](http://gitlab.voneyun.com/frontend/sc-ui/commit/926ea17b73989b801892d07bfa27cd8ad532fd9d))



## [0.0.87](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.86...0.0.87) (2023-03-17)


### Bug Fixes

* 去除ScTable 中无用代码 ([e76cc2f](http://gitlab.voneyun.com/frontend/sc-ui/commit/e76cc2fc1adfa0911cc25d4897a84527623f6d95))


### Features

* table 中filter组件 select切换, input值 不清空 ([b89bdd8](http://gitlab.voneyun.com/frontend/sc-ui/commit/b89bdd84ab547988f6588032b33e4605ed173fdf))



## [0.0.86](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.85...0.0.86) (2023-03-17)


### Bug Fixes

* 1. ScTable filter组件 只存在tableActive 不显示问题 2. 调整 slider circle大小 ([972aa53](http://gitlab.voneyun.com/frontend/sc-ui/commit/972aa53191d34a2b7e0906c6f4ea185771d5e4c1))


### Features

* 1. radioButtonGroup 新增 triggerMultiple 属性;可以多次触发 change事件; 2. slider 新增dotCircle 属性 ([ddb0947](http://gitlab.voneyun.com/frontend/sc-ui/commit/ddb09475c95b9971c8993d563b6c68739891d538))
* 更新 scModal \ alert 组件 type 为 error 的 icon ([af3c2cc](http://gitlab.voneyun.com/frontend/sc-ui/commit/af3c2ccd8de33398279629249bad6c97162711b6))



## [0.0.85](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.84...0.0.85) (2023-03-17)


### Bug Fixes

* 1. 根据ui更新 各个组件 2. 封装自定义指令 stopEvent ([5b5c81f](http://gitlab.voneyun.com/frontend/sc-ui/commit/5b5c81f0038077b305bd00bc198e3738ed863ed9))
* 调整 table action 循环 ([91bb329](http://gitlab.voneyun.com/frontend/sc-ui/commit/91bb329c645507a11ab0428c469ea5d8ebaa996c))
* 调整 table 选中颜色 ([8523bf1](http://gitlab.voneyun.com/frontend/sc-ui/commit/8523bf10c771824f415f039413c7c543c10f589a))


### Features

* 更新 iconfont ([efadbe0](http://gitlab.voneyun.com/frontend/sc-ui/commit/efadbe0aa0290edea8a3800b9c447d0feb444f67))



## [0.0.84](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.83...0.0.84) (2023-03-14)


### Features

* 新增 Icon ([e5e0cfd](http://gitlab.voneyun.com/frontend/sc-ui/commit/e5e0cfdedf85f94ff6e9f7e9f09611ea52b32106))



## [0.0.83](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.82...0.0.83) (2023-03-14)


### Bug Fixes

* table filter 输入框点击 后 自动清空 输入值;因为默认值监听的影响 ([3a23e58](http://gitlab.voneyun.com/frontend/sc-ui/commit/3a23e58fb7fb375f14373042270960ece834ebd6))


### Features

* 新增 语言适配 ([f6d6bdb](http://gitlab.voneyun.com/frontend/sc-ui/commit/f6d6bdbd7f19ab39cb05d97f0722457f65f6cc86))
* 调整table filter textValue 只能赋值一次 ([49a0ec7](http://gitlab.voneyun.com/frontend/sc-ui/commit/49a0ec73e2196026289f5df18748b73f51feb869))



## [0.0.82](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.81...0.0.82) (2023-03-08)


### Features

* 新增 copy默认 提示信息 ([fd860db](http://gitlab.voneyun.com/frontend/sc-ui/commit/fd860dbd8aef247575635f8eca303a6ff7cdfaa8))



## [0.0.81](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.80...0.0.81) (2023-03-08)


### Features

* 兼容 业务代码中的slider ([810a8c5](http://gitlab.voneyun.com/frontend/sc-ui/commit/810a8c5c24125fb80b23141860fcd95bea4de2eb))



## [0.0.80](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.79...0.0.80) (2023-03-07)


### Bug Fixes

* vite 打包 优化,不兼容webpack, 需要再调整,暂时方案回退 ([6e75239](http://gitlab.voneyun.com/frontend/sc-ui/commit/6e75239aa2c73a98caa8ade6f04a08357a0d26ce))


### Features

* 更新 package.json 版本号 ([bd955be](http://gitlab.voneyun.com/frontend/sc-ui/commit/bd955be0e53d02cb15a842d193a34819e14fb7a8))



## [0.0.79](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.78...0.0.79) (2023-03-07)


### Bug Fixes

* dataRangPicker 选中 change事件触发 3 次修改 ([4171467](http://gitlab.voneyun.com/frontend/sc-ui/commit/41714676f5fb67fa12e77d5f5d51037e7a26e941))


### Features

* 完善 新scCascader 组件 功能 ([0c9cb4e](http://gitlab.voneyun.com/frontend/sc-ui/commit/0c9cb4e50eb0a4f1a7f6bf4198bc29ae082547e2))



## [0.0.77](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.76...0.0.77) (2023-03-03)


### Bug Fixes

* 0.0.76 打包问题处理 ([a1cb0af](http://gitlab.voneyun.com/frontend/sc-ui/commit/a1cb0affc79aa1f8e9997227da5b2420b2a8adb9))



## [0.0.76](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.75...0.0.76) (2023-03-03)


### Features

* scTable 组件 头部 filter 新增 默认值传入 功能 ([61cef01](http://gitlab.voneyun.com/frontend/sc-ui/commit/61cef01d7c557cb490472898121b25fe013bdc22))
* 调整 dataPicker 国际化 配置 ([75f0fbc](http://gitlab.voneyun.com/frontend/sc-ui/commit/75f0fbc47f1e4549ae6dcd01ad5821a1b57d62cf))



## [0.0.75](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.74...0.0.75) (2023-02-28)


### Bug Fixes

* 修改 modal.confirm close 样式问题 ([97bae65](http://gitlab.voneyun.com/frontend/sc-ui/commit/97bae65717b3c05a4cd34637a7ca8f4eac9cfec3))



## [0.0.74](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.73...0.0.74) (2023-02-28)


### Features

* 更新 在线示例 代码为 codesandbox ([c9c4137](http://gitlab.voneyun.com/frontend/sc-ui/commit/c9c4137e2054aae857a0f05dc029b1c057e7c560))



## [0.0.73](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.72...0.0.73) (2023-02-27)


### Bug Fixes

* scTable 过滤 传入监听 rowSelected 值 ([198f5bf](http://gitlab.voneyun.com/frontend/sc-ui/commit/198f5bf43aa1c748408ef00998543061290a3bfc))
* 修复 文档 copy 目录大小写问题 ([ca1bd33](http://gitlab.voneyun.com/frontend/sc-ui/commit/ca1bd337d0593e05743334f971cb19c957976135))


### Features

* scCascaderPanel 组件初始版本完成 ([fac21d5](http://gitlab.voneyun.com/frontend/sc-ui/commit/fac21d5d4b434184d375a4515161011033f3e0fc))
* scCascaderPanel 组件功能完善 ([7f9ba1c](http://gitlab.voneyun.com/frontend/sc-ui/commit/7f9ba1cfa8429f8729816fa645c6144722a7be27))
* 更新0.0.73 版本 ([900155a](http://gitlab.voneyun.com/frontend/sc-ui/commit/900155a36d4635a26a1e875f3356e310430e0e10))



## [0.0.72](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.71...0.0.72) (2023-02-23)


### Features

* 提取 Copy 组件 ([88a763f](http://gitlab.voneyun.com/frontend/sc-ui/commit/88a763f079e52fe4246fb1e779b73bd7162b086b))



## [0.0.71](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.70...0.0.71) (2023-02-21)


### Bug Fixes

* scSlider 更新disabled 状态 ScInputNumber不同步问题 ([8726822](http://gitlab.voneyun.com/frontend/sc-ui/commit/87268220f3d085a71c99dfeda09ce5f7691ca741))


### Features

* slider disabled 状态样式更新 ([7dcd380](http://gitlab.voneyun.com/frontend/sc-ui/commit/7dcd380bde56d1a9bba40bc3ac89c4bb89afecf0))



## [0.0.70](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.69...0.0.70) (2023-02-17)


### Bug Fixes

* 修改 全局 close icon ([9940784](http://gitlab.voneyun.com/frontend/sc-ui/commit/9940784fea143f5563cc2aeb1b680c197eb05738))



## [0.0.69](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.68...0.0.69) (2023-02-16)


### Bug Fixes

* 修改 ScSlider :value 绑定值; 拖拽 InputNumber 组件不实时更新问题 ([670c9f3](http://gitlab.voneyun.com/frontend/sc-ui/commit/670c9f3be363c5d5353ecf1b0e6e6a73eee7bdde))


### Features

* - table 创建按钮新增loading状态; table actionProps 中的 tooltipDes 支持 方法，并且 data更新 触发 tooltipDes 方法执行; InputNumber、ScSlider 中的 InputNumber 组件 过滤非Number 触发change; ScSteps 组件新增 changeIndex 事件 ([126cad7](http://gitlab.voneyun.com/frontend/sc-ui/commit/126cad7b92364193048f3b3d218416b3fe09e1fe))
* 0.0.69版本 ([f8a8c25](http://gitlab.voneyun.com/frontend/sc-ui/commit/f8a8c25fc88d4e0dcdc2843d46c20288566d77d0))



## [0.0.68](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.67...0.0.68) (2023-02-14)


### Features

* tableColumn 新增 取消选中key 集合返回 ([70bce4a](http://gitlab.voneyun.com/frontend/sc-ui/commit/70bce4a3445ba62dbb0171759d9f058920f7cb8f))
* 更新 tableColumn 样式 ([a4243f1](http://gitlab.voneyun.com/frontend/sc-ui/commit/a4243f1944e22346378ea0c2e3cf2c0047532b62))



## [0.0.67](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.66...0.0.67) (2023-02-14)


### Bug Fixes

* tableColumn 组件 初始化数据 在okModal 事件中透传 ([b4bd1e7](http://gitlab.voneyun.com/frontend/sc-ui/commit/b4bd1e71a6bd30f32fb7196982702b1f0130e9f3))



## [0.0.66](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.65...0.0.66) (2023-02-14)


### Bug Fixes

* scSlider 默认刻度 转换 ([70e0560](http://gitlab.voneyun.com/frontend/sc-ui/commit/70e056048e216e0b9d535c1307b2baaf1a257770))



## [0.0.65](http://gitlab.voneyun.com/frontend/sc-ui/compare/v0.0.56...0.0.65) (2023-02-13)


### Bug Fixes

* slider 组件 样式修改 ([7ce1545](http://gitlab.voneyun.com/frontend/sc-ui/commit/7ce1545a88e8f2b02eb708ab60c77360ea9a5480))
* 修改 ScSlider change 事件 多次触发问题 ([89d7bdf](http://gitlab.voneyun.com/frontend/sc-ui/commit/89d7bdfde49a1adfce096470c23d7f9fdf81fc7e))


### Features

* tableColumn 组件提取 \ Empty 组件提取 ([d520bd0](http://gitlab.voneyun.com/frontend/sc-ui/commit/d520bd0e0f135ebbe311a459024a9498b85e94e6))
* 修改 form 样式 ([c3d79b1](http://gitlab.voneyun.com/frontend/sc-ui/commit/c3d79b10d71c8cc54042bd459229e65212bee9f0))
* 修改 各个组件 demo 文件 ([3ec0525](http://gitlab.voneyun.com/frontend/sc-ui/commit/3ec05253173f2d0d8eddc2adff474769e94cb98f))
* 更新 scSlider 样式 ([a5a66a0](http://gitlab.voneyun.com/frontend/sc-ui/commit/a5a66a044e57b4968208e31f09bf32b1b0de16fc))
* 更新所有demo 中代码 style 引入方式 ([22bec1b](http://gitlab.voneyun.com/frontend/sc-ui/commit/22bec1b0b0a582a211f4aab5c41e4111cda80521))



## [0.0.56](http://gitlab.voneyun.com/frontend/sc-ui/compare/v0.0.55...v0.0.56) (2023-02-07)


### Bug Fixes

* jenkins打包报错; 注释报错代码 ([a0fd5fa](http://gitlab.voneyun.com/frontend/sc-ui/commit/a0fd5fafb3fecb46ae8c3f28e44793d20e776a91))
* modal cancel 事件回调 ([a4b33cd](http://gitlab.voneyun.com/frontend/sc-ui/commit/a4b33cdd74b0b314451ad297155e1aca29c7c43f))
* modal 样式丢失问题 ([401950a](http://gitlab.voneyun.com/frontend/sc-ui/commit/401950a28d640ef3fd4bc327aa2a5fd9185b71df))
* scCascader 默认值 不显示; value 值警告问题 ([ed5e71c](http://gitlab.voneyun.com/frontend/sc-ui/commit/ed5e71c444f764c76146de457d694192d175075b))
* table 排序问题 ([683d8e4](http://gitlab.voneyun.com/frontend/sc-ui/commit/683d8e4437809db588f0122b37452861cd9804b0))
* 修改 table bug \ 修改modal 样式 ([5a437d2](http://gitlab.voneyun.com/frontend/sc-ui/commit/5a437d219c1c47ffb25640964f6aaa199132b7de))
* 修改 table bug \ 修改modal 样式 ([00f059d](http://gitlab.voneyun.com/frontend/sc-ui/commit/00f059d25ff6dd1240a60ece4f2e60a905997223))
* 修改 table input 校验切换 置空校验\ modal 修改样式 ([d2a7473](http://gitlab.voneyun.com/frontend/sc-ui/commit/d2a7473735134de8f25b19ef2f79e21d2e4ca06a))
* 修改 样式 ([80029ba](http://gitlab.voneyun.com/frontend/sc-ui/commit/80029ba80bbc4a588afb763e4091e4bdf1956dc7))
* 修改 样式问题 ([60aa47b](http://gitlab.voneyun.com/frontend/sc-ui/commit/60aa47bc9a751015458d225f076036485af47497))
* 修改table action bug ([86d25bb](http://gitlab.voneyun.com/frontend/sc-ui/commit/86d25bb7795027a40e9c6727fb6a4b7fa708044c))
* 修改table th 内置组件多次使用问题 ([8bb5cf1](http://gitlab.voneyun.com/frontend/sc-ui/commit/8bb5cf194096e78646db8393a970aafa3befb773))
* 更新 tabs 文档 ([1fed0aa](http://gitlab.voneyun.com/frontend/sc-ui/commit/1fed0aae0386ed90a17d14f54058c3e7a5abfe81))
* 调整 table  modal 样式 问题 ([ba7a1ed](http://gitlab.voneyun.com/frontend/sc-ui/commit/ba7a1edfcea7ef98eb12b07664e30b09f9584c12))


### Features

* add #renderEmpty solts  expose function ([35fa61f](http://gitlab.voneyun.com/frontend/sc-ui/commit/35fa61f75bd0c42a4538bafe1a8dbdc36882e778))
* add alert component ([4902113](http://gitlab.voneyun.com/frontend/sc-ui/commit/490211397073fdd0a0b1fb5d624495f931d23e96))
* add modal ([d5b8a8d](http://gitlab.voneyun.com/frontend/sc-ui/commit/d5b8a8d090e88338154cdd4ad8787dd97df99bba))
* add tabs component ([8a7ba5f](http://gitlab.voneyun.com/frontend/sc-ui/commit/8a7ba5f815a61e5794bbb894dbb53514d41cb7eb))
* add useColumn ([3a3dbec](http://gitlab.voneyun.com/frontend/sc-ui/commit/3a3dbec562a5fac55faf2248206f96f1e1f2796d))
* description 组件 title 可通过 vnode\string\solt 传入 ([a66f418](http://gitlab.voneyun.com/frontend/sc-ui/commit/a66f418a38cf7ad3fd39feb59d50132d4a55548f))
* form 组件完善 ([6ad6ec7](http://gitlab.voneyun.com/frontend/sc-ui/commit/6ad6ec739816b84dd47ac2bd3242d96ee28e5307))
* form 组件更新 ([da87c15](http://gitlab.voneyun.com/frontend/sc-ui/commit/da87c15f540c3c66a21e8bd84f802fb18772d6fb))
* init project ([03887f8](http://gitlab.voneyun.com/frontend/sc-ui/commit/03887f80b369b2a6065d5449baa9c2999ff45793))
* pop 新增 before 方法 ([9d62e23](http://gitlab.voneyun.com/frontend/sc-ui/commit/9d62e239d1ccaa8ca0232a71a433bfbb4e5e1c8c))
* sctabs 组件 新增shadow 模式 ([f33ab46](http://gitlab.voneyun.com/frontend/sc-ui/commit/f33ab469275816e83a88ca8148c3c39d3a55c0cf))
* select 组件新增 prefix slot ([d976c64](http://gitlab.voneyun.com/frontend/sc-ui/commit/d976c64cd1cca1cdbc3c028c57a1b09cfe9079b0))
* silder 组件打包报错;暂时注释 ([5f6ccc6](http://gitlab.voneyun.com/frontend/sc-ui/commit/5f6ccc688f5d0295d6deb2318866a026c74112d4))
* table column 筛选 新增单位字段显示 ([5cb9b07](http://gitlab.voneyun.com/frontend/sc-ui/commit/5cb9b07f9682798f03c7899eef3cfd65180c4a71))
* table filter模块, 新增input 输入框 值 校验功能 ([19b44d6](http://gitlab.voneyun.com/frontend/sc-ui/commit/19b44d6b53bd2592b9dc1e6039070f108b00c80d))
* ui 二次验收 样式 修改 ([a3775ee](http://gitlab.voneyun.com/frontend/sc-ui/commit/a3775ee2a827c9c0cf2164f9359d3839a86d30be))
* update ([a4cc5cc](http://gitlab.voneyun.com/frontend/sc-ui/commit/a4cc5ccf436d334c1b493351d06dd8447349f320))
* update column ([91faa58](http://gitlab.voneyun.com/frontend/sc-ui/commit/91faa5851e2368f45bdc1cfc47240b6bdb218a11))
* update dialog ([cfa16bb](http://gitlab.voneyun.com/frontend/sc-ui/commit/cfa16bb55f2d7f3f99b414bdf8dfc9ab2752c50b))
* update dialog column ([aef633d](http://gitlab.voneyun.com/frontend/sc-ui/commit/aef633ddaf48b5f96490100ad4a054cc3db6ca31))
* update docs ([3e3074f](http://gitlab.voneyun.com/frontend/sc-ui/commit/3e3074fa9b4ebf1fe9c0a46f8ce9896bb1bc5fc1))
* update docs ([03dc4f4](http://gitlab.voneyun.com/frontend/sc-ui/commit/03dc4f4e83f507ad6de53a03b94be6c6e447d039))
* update docs ([aa4f2c6](http://gitlab.voneyun.com/frontend/sc-ui/commit/aa4f2c6ede9745c26842ebd95734d5c885c63aca))
* update docs ([a35f17d](http://gitlab.voneyun.com/frontend/sc-ui/commit/a35f17dc29dc239ade10dd377be19573f707c26c))
* update docs ([c7294cd](http://gitlab.voneyun.com/frontend/sc-ui/commit/c7294cdda73d3e89829e9217440dd766635a5ae1))
* update filterDropdown  tags radio || checked ([106baed](http://gitlab.voneyun.com/frontend/sc-ui/commit/106baed6db3e93d1974c62715a9514fcf62c8599))
* update filterTag ([e8e046e](http://gitlab.voneyun.com/frontend/sc-ui/commit/e8e046ecaeae536926fc42ee90e345d2124b2366))
* update filterTagVue ([c230f27](http://gitlab.voneyun.com/frontend/sc-ui/commit/c230f27e1f484d23095cbd30d008a53b12626f48))
* update iconfont ([ea46cbf](http://gitlab.voneyun.com/frontend/sc-ui/commit/ea46cbfe5eb4d39c3321a33e20123afed15f2610))
* update iconfont ([09cade5](http://gitlab.voneyun.com/frontend/sc-ui/commit/09cade555c788c15a7cf7dceed934365c2592a77))
* update modal  style ([cb1e74b](http://gitlab.voneyun.com/frontend/sc-ui/commit/cb1e74bf33adf87a5cb4e7e2101258cb62311613))
* update modal && add table ([397e9a3](http://gitlab.voneyun.com/frontend/sc-ui/commit/397e9a35fe4121eab364ab84a76b77619018a123))
* update package ([5b99539](http://gitlab.voneyun.com/frontend/sc-ui/commit/5b9953989f78f22b1aaa2b67f442ae9cf53bddd2))
* update serach click change ([755460d](http://gitlab.voneyun.com/frontend/sc-ui/commit/755460dba581e012866a4df174b9c9ae4a506c56))
* update site:build package.json ([235624f](http://gitlab.voneyun.com/frontend/sc-ui/commit/235624f5250041a352a8868b7334ad9e9a1ad743))
* update status handle tdcomponent ([3390ae1](http://gitlab.voneyun.com/frontend/sc-ui/commit/3390ae1a2754b3eb72b40216be0b868d72ab145b))
* update tab ([d5bf05e](http://gitlab.voneyun.com/frontend/sc-ui/commit/d5bf05ef2f9eb36efb45409e3c63da19baed81ea))
* update table ([d48d4cf](http://gitlab.voneyun.com/frontend/sc-ui/commit/d48d4cfcf1a7424e7142ba3fad120eb471bab8f6))
* update table ([2ed84ea](http://gitlab.voneyun.com/frontend/sc-ui/commit/2ed84ea741cbc2169c7ac7f44f4f636aa23fe29f))
* update table ([25d932c](http://gitlab.voneyun.com/frontend/sc-ui/commit/25d932cd164daee6d68b3bcdbe56788162fb1985))
* update table ([16b08b6](http://gitlab.voneyun.com/frontend/sc-ui/commit/16b08b6fb51155c7ce614604e35dbae93e106208))
* update table ([b135c56](http://gitlab.voneyun.com/frontend/sc-ui/commit/b135c56e2a5c26a824e54d33768153c0a7c1ad0c))
* update table component ([e0ebf1f](http://gitlab.voneyun.com/frontend/sc-ui/commit/e0ebf1f094c6946110dda614f6ff9f1515317e38))
* update tableAction ([69e65cb](http://gitlab.voneyun.com/frontend/sc-ui/commit/69e65cb00cb0185168c9dc67d93f8da2df8f66e5))
* 修改 alert close-icon 全局样式 ([56b0996](http://gitlab.voneyun.com/frontend/sc-ui/commit/56b0996f23cbfaa6371fb98cbb6bf84b911d7ca7))
* 修改 cascader 组件 样式\ 新增 prefixIcon slot ([a989bfd](http://gitlab.voneyun.com/frontend/sc-ui/commit/a989bfd0c7c6630a2fca6ad7ae330ed0d3fdb7d5))
* 修改 checkbox 样式 ([d87b241](http://gitlab.voneyun.com/frontend/sc-ui/commit/d87b24123dc1ad69147ab07696bb2179f4b82d06))
* 修改 datePicker 样式 ([222fdf2](http://gitlab.voneyun.com/frontend/sc-ui/commit/222fdf22fa9999f0a15ff4e2097a19c6067acb95))
* 修改 loading 动画 切换\ 修改 modal 样式 \ 修改 级联选择器 样式 ([3b3a2c1](http://gitlab.voneyun.com/frontend/sc-ui/commit/3b3a2c14082cf377298e89d2d79be939d6f96027))
* 修改 readme.md ([d3757dc](http://gitlab.voneyun.com/frontend/sc-ui/commit/d3757dc97fe77f7efd1833f278101fd656f21594))
* 修改 select cascader button dropdown tabs 样式 ([bd16c1d](http://gitlab.voneyun.com/frontend/sc-ui/commit/bd16c1d55b06207973fd39408785dadb8c5e429f))
* 修改 select 高度问题/ slider 功能完善 ([16761cc](http://gitlab.voneyun.com/frontend/sc-ui/commit/16761cce5018ea83c2d38daee5ced9af2632b823))
* 修改 table columns / 新增 Input 组件 ([dce921d](http://gitlab.voneyun.com/frontend/sc-ui/commit/dce921d7840a65b83926c2081f66eb08575bc818))
* 修改 table tabs 样式 功能 ([6d6b6aa](http://gitlab.voneyun.com/frontend/sc-ui/commit/6d6b6aae606691fc337829ef265037adad46433a))
* 修改 table 样式 ([876d7ce](http://gitlab.voneyun.com/frontend/sc-ui/commit/876d7ceb25ba55b7b400b56472f476029d15b3a2))
* 修改 table; 修改 文档; 新增 ScInputNumber 组件 ([b3dea7e](http://gitlab.voneyun.com/frontend/sc-ui/commit/b3dea7e338d1ccdcaa5bf6e80498b13a15bd3e07))
* 修改 样式 tabs steps modal ([ce9dba3](http://gitlab.voneyun.com/frontend/sc-ui/commit/ce9dba3269af4f91771cb59dc5e32a97738fe8e5))
* 修改iconfont 引入方式 \ 新增scrollbar 组件 ([617f180](http://gitlab.voneyun.com/frontend/sc-ui/commit/617f1808b0915ef668a7e5647dca1acd85a4a80a))
* 修改transfer 组件\select组件 ([cbed7c2](http://gitlab.voneyun.com/frontend/sc-ui/commit/cbed7c2f0e155244ae5360961faae4aed7412185))
* 创建 form 组件 ([54e8197](http://gitlab.voneyun.com/frontend/sc-ui/commit/54e81978f8c9d4c3500a6b726511528cae334d27))
* 去除 scDescribe 对 原始组件的样式修改 ([04ce039](http://gitlab.voneyun.com/frontend/sc-ui/commit/04ce03977c0e15d8ed126d5a62c31a2106bb4338))
* 各个组件 样式引入调整;全局样式调整 ([d296e8c](http://gitlab.voneyun.com/frontend/sc-ui/commit/d296e8c1d09ff2cb4807ff250ed3362eaea432c6))
* 完善 description 组件 ([2081fc4](http://gitlab.voneyun.com/frontend/sc-ui/commit/2081fc4a3eb891d4c8d325db7b94f5a44dea40e9))
* 完善 form 功能, 修改 transfer 组件 ([f672183](http://gitlab.voneyun.com/frontend/sc-ui/commit/f672183a8408023d5e8952966ec35694b5f36cd6))
* 完善 form 组件 内容; 修改 select 组件 checkbox 模式 value 值刷新不及时问题 ([c7ad287](http://gitlab.voneyun.com/frontend/sc-ui/commit/c7ad2875e54565daa02f669e31d621b1bf44b718))
* 完善 timerPicker 组件 功能 ([56c1064](http://gitlab.voneyun.com/frontend/sc-ui/commit/56c106432bb0e08c206fdaadf546d2979e52371a))
* 新增 breadcrumb ([9030ec6](http://gitlab.voneyun.com/frontend/sc-ui/commit/9030ec6d9b8c4bd9dfe620cddf1a647f7f416a83))
* 新增 button 组件 ([a34f081](http://gitlab.voneyun.com/frontend/sc-ui/commit/a34f081e1e8130e3d6f005fe64c742c80322f3ef))
* 新增 createCloseMessage hooks ([0808885](http://gitlab.voneyun.com/frontend/sc-ui/commit/08088851f70018d7c73beeeb779e74c965e4b86f))
* 新增 description 组件 ([c16a455](http://gitlab.voneyun.com/frontend/sc-ui/commit/c16a4550e25188f099b4fb555345a5ce052c92b4))
* 新增 loading 组件 ([0a7ad32](http://gitlab.voneyun.com/frontend/sc-ui/commit/0a7ad329bd261aed4e327eae60867547dbe1fb64))
* 新增 pagination dropdown docs ([40699d8](http://gitlab.voneyun.com/frontend/sc-ui/commit/40699d8dc7935e910cf922351fcd11cbfe30db83))
* 新增 popconfirm 组件 ([7fe18f0](http://gitlab.voneyun.com/frontend/sc-ui/commit/7fe18f041deca8eb0dc17478b4d1520d58cf92af))
* 新增 shadow button, 新增 model 关闭前回调 ([f87ab46](http://gitlab.voneyun.com/frontend/sc-ui/commit/f87ab469ce5413fe8f9e77a0f00f35b27b1bab9e))
* 新增 slider 组件 ([f48dbbc](http://gitlab.voneyun.com/frontend/sc-ui/commit/f48dbbc33aa8e92bbe78c82670a85e6724cf9b41))
* 新增 switch 组件 更新 文档配置文件 ([20ed418](http://gitlab.voneyun.com/frontend/sc-ui/commit/20ed418df59d02323a4192ae13deafa76e093645))
* 新增 table header 内置 组件 describe unit 组件 ([300373d](http://gitlab.voneyun.com/frontend/sc-ui/commit/300373df6ad6af8d69339e5f2f3083286b7994f0))
* 新增 table 排序 提示 ([f200aa2](http://gitlab.voneyun.com/frontend/sc-ui/commit/f200aa207548334dfe9c119a60a0b74dd708b620))
* 新增 transfer 组件样式\示例 ([a2b50c2](http://gitlab.voneyun.com/frontend/sc-ui/commit/a2b50c2e625598b7f12f0558c9ec0a05d744d727))
* 新增 useModal hooks / 修改 iconfont 命名 ([f7b562f](http://gitlab.voneyun.com/frontend/sc-ui/commit/f7b562f60f41531d5c1c020f0582eb89547d0a37))
* 新增select prefixIcon slot ([01f4087](http://gitlab.voneyun.com/frontend/sc-ui/commit/01f4087061a5230f6a431fe360388aafa00eb7f2))
* 新增时间选择器 组件/ 修改 scModal ScTable 样式穿透问题 ([445f8ab](http://gitlab.voneyun.com/frontend/sc-ui/commit/445f8ab280a958ab38cec68fedd6bfcad6f5016d))
* 更新 description 组件文档 ([56a9712](http://gitlab.voneyun.com/frontend/sc-ui/commit/56a971266d748890167aac7237bd7bdef2cca741))
* 更新 dropdown样式\ 替换全局icon ([98da9ae](http://gitlab.voneyun.com/frontend/sc-ui/commit/98da9ae6326752b5bc0f0f3954ccb2abd47a9e92))
* 更新 iconfont class 类名 ([9c07dca](http://gitlab.voneyun.com/frontend/sc-ui/commit/9c07dca65ce661088299147b43fc65c8c461dbf0))
* 更新 loading ([5722cfe](http://gitlab.voneyun.com/frontend/sc-ui/commit/5722cfe0351a36488a2cd717ec39412fb4d90d1f))
* 更新 loading 组件 ([ff2c2c0](http://gitlab.voneyun.com/frontend/sc-ui/commit/ff2c2c070a109c24dce450facdfda0dcc837c79f))
* 更新 modal 方法 ([4a7c9aa](http://gitlab.voneyun.com/frontend/sc-ui/commit/4a7c9aa75d2fba8cf01ffc044b3a73242a26b80d))
* 更新 model status 状态 样式 ([0731fa1](http://gitlab.voneyun.com/frontend/sc-ui/commit/0731fa10058a2b0eff8aa7bbe84069c1b513df66))
* 更新 readme.md ([7fc1a38](http://gitlab.voneyun.com/frontend/sc-ui/commit/7fc1a386342965b58424618c3fea3578912407ff))
* 更新 scDatePicker 组件 ([b05a815](http://gitlab.voneyun.com/frontend/sc-ui/commit/b05a815c68ba2b35381865371b752d2872684734))
* 更新 select ([fe5f370](http://gitlab.voneyun.com/frontend/sc-ui/commit/fe5f3709a997efe033957cd4840f21bca55e1873))
* 更新 select checkbox 模式 ([68895f9](http://gitlab.voneyun.com/frontend/sc-ui/commit/68895f95136c9701ff05cede48431364bc250d7c))
* 更新 slider 组件 ([647b1ad](http://gitlab.voneyun.com/frontend/sc-ui/commit/647b1ad09108791cdc93f37851d1dd06de8d9504))
* 更新 steps 组件 ([932e254](http://gitlab.voneyun.com/frontend/sc-ui/commit/932e254fa3761728b388f62bf7066198ad99a0f6))
* 更新 table 内置组件名称 ([13ecbfc](http://gitlab.voneyun.com/frontend/sc-ui/commit/13ecbfcf092d995705bf9b82b0a3f39e88e9000a))
* 更新 table 自定义列样式问题 ([4f0b608](http://gitlab.voneyun.com/frontend/sc-ui/commit/4f0b608992b934e53656f7030ac80865c22e77b3))
* 更新 table文档 ([7c5d2d6](http://gitlab.voneyun.com/frontend/sc-ui/commit/7c5d2d60dd90bf0ec5fa3bfe24f1cdc2344ec7b9))
* 更新 table文档 ([7ca5ca6](http://gitlab.voneyun.com/frontend/sc-ui/commit/7ca5ca69d2efc5ef7131f062b8da2473485ad56f))
* 更新 timepicker 组件 文档 ([c6ff88b](http://gitlab.voneyun.com/frontend/sc-ui/commit/c6ff88ba21d464782b42a09f4d551133b96df2df))
* 更新 tooltip radio 文档 ([398c056](http://gitlab.voneyun.com/frontend/sc-ui/commit/398c0562996cf9d1019289a5d6408c59c1678af7))
* 更新 文档 ([48005e9](http://gitlab.voneyun.com/frontend/sc-ui/commit/48005e9fe1eccd814ac6aa7b2929967b332896b7))
* 更新 文档描述 readme.md ([97e4b3e](http://gitlab.voneyun.com/frontend/sc-ui/commit/97e4b3e7b1930c325232ef5240803ba1ec5f6d8f))
* 解决 vue-slider-component 打包问题 ([386272f](http://gitlab.voneyun.com/frontend/sc-ui/commit/386272fc8d654791dd136ae746f4fe798306d666))


