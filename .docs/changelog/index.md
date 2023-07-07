---
map:
  path: /changelog
realPath: src/package/changelog/index.zh-CN.md
---

# 变更记录

## [0.0.138](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.137...0.0.138) (2023-07-07)

### Bug Fixes

* 修复 ScIp 粘贴 值问题 ([5bc958d](http://gitlab.voneyun.com/frontend/sc-ui/commit/5bc958df86622a44319b946e795cfe4f543ebb1c))

## [0.0.137](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.136...0.0.137) (2023-07-06)

### Bug Fixes

* 修复 样式问题 ([db4c2e6](http://gitlab.voneyun.com/frontend/sc-ui/commit/db4c2e678b9255cafd4b95c9217e837ed6a205c6))

## [0.0.136](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.135...0.0.136) (2023-07-03)

### Bug Fixes

* 修复 ScRangeDate pickerDate 为 month 选中报错 ([70bedc1](http://gitlab.voneyun.com/frontend/sc-ui/commit/70bedc1e760365e62ce7a62c8c2591f08593a7cd))
* scInputNumber 组件 修复 传入值非 number 类型 ([9edfe0c](http://gitlab.voneyun.com/frontend/sc-ui/commit/9edfe0cd0964bce7dc1133e58b175639d69ee3fd))

## [0.0.135](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.134...0.0.135) (2023-06-25)

### Bug Fixes

* 修复 ScInputNumber 第一次输入未触发change事件 ([75f8fe9](http://gitlab.voneyun.com/frontend/sc-ui/commit/75f8fe94f2fb6208a565bc688ddabe51b9238933))
* 修复ScInputNumber 组件输入不触发 change 事件\ 修复ScSlider 组件 默认最小值 ([b8586a0](http://gitlab.voneyun.com/frontend/sc-ui/commit/b8586a00ba71139007ac586a3d8f869ca4899984))

## [0.0.134](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.133...0.0.134) (2023-06-21)

### Bug Fixes

* scInputNumber 调整 第一次点击 按钮 未触发change事件 ([dc74511](http://gitlab.voneyun.com/frontend/sc-ui/commit/dc7451186f8a6a8db9a52bea2916ac57b81e1644))

## [0.0.133](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.132...0.0.133) (2023-06-19)

### Bug Fixes

* 调整ScSelect 样式; 修复ScInputNumber 默认值 多次赋值 触发 change 事件 ([7736677](http://gitlab.voneyun.com/frontend/sc-ui/commit/77366778bb7c14a5ef45ce576b6730d323ab3bd9))
* scSelect 组件 prefixSlot 异步 传入,计算宽度问题 修复 ([29012a6](http://gitlab.voneyun.com/frontend/sc-ui/commit/29012a6f495ec4f422249095b04edb9f570528c0))

## [0.0.132](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.131...0.0.132) (2023-06-16)

### Bug Fixes

* 解决 ScSelect 异步 传入prefixIcon slot 宽度计算不正确问题 ([f13d82a](http://gitlab.voneyun.com/frontend/sc-ui/commit/f13d82a298fd70d2e42ff304818c1270c09f151a))
* scTable 消除 滚动条兼容样式 ([5896cb8](http://gitlab.voneyun.com/frontend/sc-ui/commit/5896cb81a80f06e3b594d90d75151e412aaa0994))

## [0.0.131](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.130...0.0.131) (2023-06-15)

### Bug Fixes

* scDrawer 新增 minusDefaultMaxHeight 参数 ([c7e7760](http://gitlab.voneyun.com/frontend/sc-ui/commit/c7e77604edf8ad5ec8b1974b642bbf867fb5787c))

## [0.0.130](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.129...0.0.130) (2023-06-14)

### Features

* 调整 ScTable Tooltip 组件,支持 h 函数 ([185c2a3](http://gitlab.voneyun.com/frontend/sc-ui/commit/185c2a3e084b5bffd1a998c9a4927aea937030f4))
* scTable 新增loading属性 ([6ede0c4](http://gitlab.voneyun.com/frontend/sc-ui/commit/6ede0c4ed0aedf50e528d17ccb64a124487a6c68))

## [0.0.129](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.128...0.0.129) (2023-06-13)

### Bug Fixes

* 调整 pxToRem 方法 实现 ([8793a20](http://gitlab.voneyun.com/frontend/sc-ui/commit/8793a2086a0a93e5c120d237d3ccaf113f6672a6))
* 修复 ScCascaderNew 组件 mutilple 默认下 placeholder 无效问题 ([521c588](http://gitlab.voneyun.com/frontend/sc-ui/commit/521c5888749ad4f1e7d0b97288c01d21e8a26131))
* 修改 ScDrawer alert 判断问题 ([339a42c](http://gitlab.voneyun.com/frontend/sc-ui/commit/339a42c8621518b2d6d3283298ccdf403069e4a5))

## [0.0.128](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.127...0.0.128) (2023-06-12)

### Style

* 调整样式问题

## [0.0.127](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.126...0.0.127) (2023-06-08)

### Bug Fixes

* scInputNumber 组件 步进器模式, 输入值/ step 四舍五入 ([922847d](http://gitlab.voneyun.com/frontend/sc-ui/commit/922847d1b6d191faa64cf248601955cd49a840c5))

## [0.0.126](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.125...0.0.126) (2023-06-08)

### Bug Fixes

* scDarwer 新增v-if 情况下, 计算高度不准确 ([0ed7ec6](http://gitlab.voneyun.com/frontend/sc-ui/commit/0ed7ec6df57b05e667facdb0250fb62d852ce62b))

## [0.0.125](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.124...0.0.125) (2023-06-06)

### Features

* 调整Scrollbar 样式 ([09a4243](http://gitlab.voneyun.com/frontend/sc-ui/commit/09a4243ba3596f907f21729f114d17b4966ed6cc))
* 根据 最新 ui 调整 css; 调整 ScTable 头部 ThDescribe \ 新增 TdTooltip 组件; ScTag 新增 tooltipDes 属性 ([1ddbc13](http://gitlab.voneyun.com/frontend/sc-ui/commit/1ddbc134bbf704386e17039fe00638a7bb8f514a))
* 更新 Select 样式 ([044abcb](http://gitlab.voneyun.com/frontend/sc-ui/commit/044abcb3f411db15835d8399e9f21a9fb78d6258))
* 完善 lottieIcon 文档 ([3faf18d](http://gitlab.voneyun.com/frontend/sc-ui/commit/3faf18d9b41e0977aec16c9c0c603e791a16e0d3))

## [0.0.124](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.123...0.0.124) (2023-06-01)

### Bug Fixes

* scSlider 最小值 校验 修改 ([45d68a9](http://gitlab.voneyun.com/frontend/sc-ui/commit/45d68a900ff7bee47fc1148261782bc2fb9d86e4))

## [0.0.123](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.122...0.0.123) (2023-06-01)

### Bug Fixes

* scSlider 组件 内部 ScInputNumber 组件调整 ([eb5044c](http://gitlab.voneyun.com/frontend/sc-ui/commit/eb5044cbab1612af6e9839a4986d56b61daa7b5a))

## [0.0.122](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.121...0.0.122) (2023-05-31)

### Bug Fixes

* scInputNumber 组件 修改聚焦事件 ([1f3784d](http://gitlab.voneyun.com/frontend/sc-ui/commit/1f3784d41f0492b2c6bb60ad4d897075256fef6d))

## [0.0.121](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.120...0.0.121) (2023-05-31)

### Bug Fixes

* 更新 ScSlider 步进器问题 ([0c4c95f](http://gitlab.voneyun.com/frontend/sc-ui/commit/0c4c95f3ebf4d0e24cc0fcb906415da4d8665e17))
* scSlider 步进器问题 ([61707ae](http://gitlab.voneyun.com/frontend/sc-ui/commit/61707ae37050c31a16f526466ea3c29ec7f67d2b))

## [0.0.120](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.119...0.0.120) (2023-05-31)

### Features

* scSlider 组件 stepStrictly: true 失焦后校验步进器的值 ([cb9aaf2](http://gitlab.voneyun.com/frontend/sc-ui/commit/cb9aaf2843fca68e5cbdf62f6dc93b282279ca69))

## [0.0.119](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.118...0.0.119) (2023-05-31)

### Features

* 调整 滚动条 样式  调整ScSlider ([31a2686](http://gitlab.voneyun.com/frontend/sc-ui/commit/31a2686f1cc639ae2bcac79792cd033b060fe419))
* 调整 ScInputNumber 自动 失焦事件 监听 ([3f8053a](http://gitlab.voneyun.com/frontend/sc-ui/commit/3f8053a134d0bb33544d59ee2722c43565147503))
* 根据最新 设计规范 修改 组件样式 ([b63a001](http://gitlab.voneyun.com/frontend/sc-ui/commit/b63a001d627776754bfb94366e7fb7161255537d))
* scInputNumber 组件 新增 stepStrictly 属性, 输入 900ms 之后校验 是否为 step 的正整数倍数 ([8108417](http://gitlab.voneyun.com/frontend/sc-ui/commit/81084179cdc0c5566179c1c1059e58221ef6fd64))

## [0.0.118](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.117...0.0.118) (2023-05-26)

### Features

* 调整modal btns默认为居中 ([2c2bc79](http://gitlab.voneyun.com/frontend/sc-ui/commit/2c2bc79d50ec5309e0d5f07e1acf22e7c68f2071))

## [0.0.117](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.116...0.0.117) (2023-05-26)

### Bug Fixes

* datePickerRange 第一次选中 为当前时间 ([a254f8a](http://gitlab.voneyun.com/frontend/sc-ui/commit/a254f8a4ae4b84aaa565d39195faa106674cf00a))

## [0.0.116](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.115...0.0.116) (2023-05-26)

### Bug Fixes

* 调整 样式 ([5e16752](http://gitlab.voneyun.com/frontend/sc-ui/commit/5e16752cab3bab5a488b579c9775048eed554d56))

## [0.0.115](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.114...0.0.115) (2023-05-26)

### Features

* 调整 ui 样式 ([a041eee](http://gitlab.voneyun.com/frontend/sc-ui/commit/a041eee1b07d683dd353d01e63f04a22953f58b3))

## [0.0.114](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.113...0.0.114) (2023-05-18)

### Bug Fixes

* scModal ScDrawer 组件中的 updateMaxHeight 默认执行一遍 ([3af8f0b](http://gitlab.voneyun.com/frontend/sc-ui/commit/3af8f0b3dcf88fe8fc83f5028286d6da8b050e47))

### Features

* 更新 ScScroll 样式 ([06dbe2b](http://gitlab.voneyun.com/frontend/sc-ui/commit/06dbe2b8eee849f8390f92914cfc760d8fb39d6e))
* 更新样式 ([ba5ffb3](http://gitlab.voneyun.com/frontend/sc-ui/commit/ba5ffb38bb7462200127814b42d807abca4d1e2f))
* scTable TdEllipsis 组件 新增copy 属性, 是否显示copy 按钮 ([271f055](http://gitlab.voneyun.com/frontend/sc-ui/commit/271f055061cca65bddac074c578bb3c88dda7284))

## [0.0.113](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.112...0.0.113) (2023-05-12)

### Bug Fixes

* 调整ScModal 滚动条样式 \ 去除ScSlider 错误警告 ([75c1225](http://gitlab.voneyun.com/frontend/sc-ui/commit/75c1225b63ad2443e9090cd7c2e3025ad3efc3f8))
* 修复 ConfigProvider 组件包裹 ScDatePicker 造成递归 死循环问题修复 ([27a1337](http://gitlab.voneyun.com/frontend/sc-ui/commit/27a133790d900391d109a5dab08d4ce0bf8fbda2))
* 修复 ScModal ScDrawer 视口最大高度, 内部出现滚动条 ([d27752e](http://gitlab.voneyun.com/frontend/sc-ui/commit/d27752ef4ff082bf2ea298d9a3d837175c9b98a6))

### Features

* 1. ScAlert 组件 新增 size 属性 2. v-loading 适配 fullscreen 属性适配 ([503e8ed](http://gitlab.voneyun.com/frontend/sc-ui/commit/503e8eda88faa692c43886a98a70d8d0e38f8846))
* 更新 ScDrawer confirmLoading 状态下 不能关闭 窗口 ([0162d62](http://gitlab.voneyun.com/frontend/sc-ui/commit/0162d6235452aa9e77bf753e666faa2f4217b037))
* 完善 ScDrawer 组件功能 ([893d470](http://gitlab.voneyun.com/frontend/sc-ui/commit/893d470bbb4cc505e54e2f2f0b3bcb1441375fea))
* scDrawer 组件 功能开发,初始版 ([634ecae](http://gitlab.voneyun.com/frontend/sc-ui/commit/634ecaef1891aeb4adc1619d4bf870070291d1e3))
* scModal 组件 新增loading 属性 ([ec4a80b](http://gitlab.voneyun.com/frontend/sc-ui/commit/ec4a80b8e7d3b056ff9ad715cbe95191ac14436e))

## [0.0.112](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.111...0.0.112) (2023-05-09)

### Bug Fixes

* 修复ScModal 关闭icon 样式问题 ([93f18aa](http://gitlab.voneyun.com/frontend/sc-ui/commit/93f18aaaf3ad7f81c86f5551c4c09508f35f5455))
* sctimePicker 组件,禁用部分时分秒, 滚动选中报错问题 ([8c95bc6](http://gitlab.voneyun.com/frontend/sc-ui/commit/8c95bc66db68121fd2cdff207037fc7cc65887c1))

### Features

* 调整 ScForm 组件左侧label宽度 折行实现 ([f52485e](http://gitlab.voneyun.com/frontend/sc-ui/commit/f52485eee8465e47a8b454b47b6dc5f4bf38f153))
* scModal 内容区域新增 ScScrollBar 组件, 用于控制区域滚动 ([f2dc6a6](http://gitlab.voneyun.com/frontend/sc-ui/commit/f2dc6a6329b646afe18034b99b21e03817c30657))
* scPanelCascader 组件 / CascaderPanel 组件 新增 全局方法getCheckedNodeKeys ([4d7cd10](http://gitlab.voneyun.com/frontend/sc-ui/commit/4d7cd1004336cadb89a308fea7d9d650b1603b9e))

## [0.0.111](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.110...0.0.111) (2023-05-04)

### Bug Fixes

* 修改 ScTable rowSelection问题; 去除警告 ([92445c5](http://gitlab.voneyun.com/frontend/sc-ui/commit/92445c5c503a872f1c17868c81add22d048ea076))
* scTable 去除 expanded-rows-change selection-change 事件警告 ([f1feeca](http://gitlab.voneyun.com/frontend/sc-ui/commit/f1feeca8da44ac8c7249abbd3854d861967695b4))

## [0.0.110](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.109...0.0.110) (2023-04-27)

### Features

* scSlider 新增 单位显示 ScSwitch 警告去除 ([ae7dc7b](http://gitlab.voneyun.com/frontend/sc-ui/commit/ae7dc7b93dfeebec208f25580bf64c309c1a9005))

## [0.0.109](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.108...0.0.109) (2023-04-26)

### Bug Fixes

* scInputNumber 输入为空时, 失焦重新复制为最后一次非空值 ([63962c2](http://gitlab.voneyun.com/frontend/sc-ui/commit/63962c2e5f40196dedccdf2e9b6896f7f810c9bd))

## [0.0.108](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.107...0.0.108) (2023-04-25)

### Features

* 完善 ScIp 组件 ([592320b](http://gitlab.voneyun.com/frontend/sc-ui/commit/592320bbe8ee6ef5ec58e296738686522fb02876))
* 新增 ScIp 组合 输入框 初版 ([4ee4a63](http://gitlab.voneyun.com/frontend/sc-ui/commit/4ee4a63e08d90f4bc666cfac1b9db487491d69ab))

## [0.0.107](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.106...0.0.107) (2023-04-23)

### Bug Fixes

* scCascaderNew 组件 多选搜索 递归报错 修复 ([90fa6c0](http://gitlab.voneyun.com/frontend/sc-ui/commit/90fa6c0dc937c13c44b7661e69ff448527de263d))
* 调整 ScCascaderNew 组件 宽度问题 ([c7de0f3](http://gitlab.voneyun.com/frontend/sc-ui/commit/c7de0f3f70aaa21a7819c778c35a0a8de4a86fd9))

### Features

* scCascaderNew 组件, 搜索结果 isTooltip 新增 滚动条展示 ([6168a45](http://gitlab.voneyun.com/frontend/sc-ui/commit/6168a4532285b5c9a6a1693513406b9d0b781e86))
* scModal confirmLoading 属性增加为ture 增加 取消按钮交互状态 ([5c2c0a3](http://gitlab.voneyun.com/frontend/sc-ui/commit/5c2c0a37bb377a6581eac73841edf820b311389f))
* scModal 更新 confirmLoading 为 true; 不能关闭 弹窗 ([516892c](http://gitlab.voneyun.com/frontend/sc-ui/commit/516892cc51a2539bf4c18b162f7395c502d75684))
* scTable empty 字段占位符-- 改为 - ([ef67fee](http://gitlab.voneyun.com/frontend/sc-ui/commit/ef67feebd775c1920806bede868bd7f8539fb9d4))
* scTag 新增 loading 状态 ([494e97d](http://gitlab.voneyun.com/frontend/sc-ui/commit/494e97d3e87a08fcaf2eb9d396e350ff221bb85d))

## [0.0.106](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.105...0.0.106) (2023-04-19)

### Bug Fixes

* scSteps ScModal.confirm 去除  warning 警告 ([b12f1a5](http://gitlab.voneyun.com/frontend/sc-ui/commit/b12f1a5e6136a286dc0b1781166ea56a0a847a2c))
* 修复 ScCascaderNew 组件,多选 panel 收回问题\ 默认值显示问题 ([3f48572](http://gitlab.voneyun.com/frontend/sc-ui/commit/3f4857298fb7aad8743465d3378ec575fafea129))
* 更新 ScModal.confirm 关闭按钮 样式 ([37d53f8](http://gitlab.voneyun.com/frontend/sc-ui/commit/37d53f824c03a382bbef4a0a1d7983c6d6ebf75c))

### Features

* 组件 ScCascaderNew 组件 新增 prefixIcon slot ([ff3c26f](http://gitlab.voneyun.com/frontend/sc-ui/commit/ff3c26fca2964f2f5e4ee8d8ff182dcc6f8a58fd))

## [0.0.105](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.104...0.0.105) (2023-04-18)

### Bug Fixes

* scSlider watch value 更新时机问题 ([6e62d53](http://gitlab.voneyun.com/frontend/sc-ui/commit/6e62d5342c14c25e4e5bc45bd9fec1a5e8b85703))
* 修复 scModal.confirm type 背景样式问题 ([69568a9](http://gitlab.voneyun.com/frontend/sc-ui/commit/69568a9b7b8cf1a8c060b4f5cfee29d24a4fa456))

## [0.0.104](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.103...0.0.104) (2023-04-17)

### Bug Fixes

* 1. 去除ScTabs change 事件 警告 2. ScModal ok按钮回调 新增try cache 防止报错 ([7599734](http://gitlab.voneyun.com/frontend/sc-ui/commit/75997341b393ddd4312650f912e4014fab2f0701))

## [0.0.103](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.102...0.0.103) (2023-04-14)

### Bug Fixes

* scModal.confirm 点击 ok按钮 不自动关闭 问题 ([694bbd9](http://gitlab.voneyun.com/frontend/sc-ui/commit/694bbd93e6164859121684280a6df6921603477e))

## [0.0.102](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.101...0.0.102) (2023-04-14)

### Bug Fixes

* 1. 调整 Sctag Status 属性值 2. ScModal.confirm 默认使用 中文字符 ([6cdcdab](http://gitlab.voneyun.com/frontend/sc-ui/commit/6cdcdabdc5f7aea71cf0c2d52555da43b60e8aba))

### Features

* scModa.confirm 确认按钮 支持传入 异步 函数, 自动触发 确认 loading状态 ([e2eb6bd](http://gitlab.voneyun.com/frontend/sc-ui/commit/e2eb6bd2fbddea3b60ebcb19c4902dce31ddfe39))
* sctable 新增 updateTableDataRecord updateTableData 方法 ([e3ee6e6](http://gitlab.voneyun.com/frontend/sc-ui/commit/e3ee6e6eadd001c0c9e3900b45c912301c0e817a))

## [0.0.101](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.100...0.0.101) (2023-04-13)

### Features

* 1. 完善ScCascaderNew 组件功能 2. 调整 ScTable 展开样式问题 \ 列筛选,分页数据重置为 第一页 3. v-loading 指令, 不传fullScreen 字段,给当前元素增加 position: relative 属性 4. ScCascaderNew 组件完善部分文档\demo ([33cdfdd](http://gitlab.voneyun.com/frontend/sc-ui/commit/33cdfddf8115f394189e0a2935bb454b59e43e0f))

## [0.0.100](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.99...0.0.100) (2023-04-10)

### Features

* 1. ScTabs 内部组件 TabPanel 为 异步数组循环时, 找不到第一key 报错问题 2. ScButton shadow为type 时,增加 size 适配 3.ScModal.confirm   新增 changeConfirmLocale   方法, 用于适配 多语言问题 ([93b4309](http://gitlab.voneyun.com/frontend/sc-ui/commit/93b43094ad12384bf6c0ede0e874155900732994))

## [0.0.99](http://gitlab.voneyun.com/frontend/sc-ui/compare/0.0.98...0.0.99) (2023-04-08)

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
