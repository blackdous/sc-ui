---
map:
  path: /theme
---

# 主题变量

```less

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

@btn-active-color: #a6a6a6;
@border-color: #e7e7e7;
@tabs-shadow-bgColor: #F5F5F5;
@btn-light-color: #23A6F3;
@white-color: #fff;
@hover-shadow: fade(@link-color, 20);

@disabled-bg-color: #EEEEEE; // 禁选颜色

@shadow-color: 0px 4px 4px rgb(35 166 243 / 8%), 0px 0px 6px #e4e8ed;

@primary-shadow: 0px 0px 8px rgba(0, 140, 211, 0.5); // 祖逖渐变色

@error-shadow: 0px 2px 8px rgba(245, 63, 63, 0.5); // 祖逖渐变色

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
```