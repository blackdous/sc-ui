// interface SidebarItemsType {
//   text: string
//   items: ItemType[]
// }
// interface ItemType {
//   text: string
//   link: string
//   [key:string]: any
// }
export const sidebar = {
  '/en/': [
    {
      text: 'SC-UI',
      items: [
        { text: 'Guide', link: '/en/' },
        { text: 'Theme', link: '/en/theme/' },
      ],
    },
    {
      text: 'General',
      items: [
        { text: 'Button', link: '/en/button/' },
        { text: 'Loading', link: '/en/loading/' },
        { text: 'Scrollbar', link: '/en/scrollbar/' },
      ]
    },
    {
      text: 'Data Display',
      items: [
        { text: 'Tabs', link: '/en/tabs/' },
        { text: 'Table', link: '/en/table/' },
        { text: 'Tooltip', link: '/en/tooltip/' },
        { text: 'Description', link: '/description/' },
      ]
    },
    {
      text: 'Data Entry',
      items: [
        { text: 'Form', link: '/en/form/' },
        { text: 'Radio', link: '/en/radio/' },
        { text: 'Input', link: '/en/input/' },
        { text: 'Checkbox', link: '/en/checkbox/' },
        { text: 'InputNumber', link: '/en/inputNumber/' },
        { text: 'Select', link: '/en/select/' },
        { text: 'Switch', link: '/en/switch/' },
        { text: 'Cascader', link: '/en/cascader/' },
        { text: 'CascaderPanel', link: '/en/cascaderPanel/' },
        { text: 'Slider', link: '/en/slider/' },
        { text: 'Transfer', link: '/en/transfer/' },
        { text: 'DatePicker', link: '/en/datePicker/' },
        { text: 'TimePicker', link: '/en/timePicker/' },
      ]
    },
    {
      text: 'Navigation',
      items: [
        { text: 'Steps', link: '/en/steps/' },
        { text: 'Pagination', link: '/en/pagination/' },
        { text: 'Dropdown', link: '/en/dropdown/' },
        { text: 'Breadcrumb', link: '/en/breadcrumb/' }
      ]
    },
    {
      text: 'Feedback',
      items: [
        { text: 'Alert', link: '/en/alert/' },
        { text: 'Modal', link: '/en/modal/' },
        { text: 'ContextMenu', link: '/en/contextMenu/' },
        { text: 'Popconfirm', link: '/en/popconfirm/' },
        { text: 'Message', link: '/en/message/' }
      ]
    },
    {
      text: 'From',
      items: [
        { text: 'Password', link: '/en/password/' }
      ]
    },
    {
      text: 'Other',
      items: [
        { text: 'Empty', link: '/en/empty/' },
        { text: 'TableColumn', link: '/en/tableColumn/' },
        { text: 'Copy', link: '/en/copy/' }
      ]
    }
  ],
  '/': [
    {
      text: 'SC-UI',
      items: [
        { text: '简介 Guide', link: '/' },
        { text: '主题变量 Theme', link: '/theme/' },
      ],
    },
    {
      text: '通用 General',
      items: [
        { text: '按钮 Button', link: '/button/' },
        { text: '加载动画 Loading', link: '/loading/' },
        { text: '滚动条 Scrollbar', link: '/scrollbar/' },
      ]
    },
    {
      text: '导航',
      items: [
        { text: '步骤条 Steps', link: '/steps/' },
        { text: '分页 Pagination', link: '/pagination/' },
        { text: '下拉菜单 Dropdown', link: '/dropdown/' },
        { text: '面包屑 Breadcrumb', link: '/breadcrumb/' }
      ]
    },
    {
      text: '数据展示',
      items: [
        { text: '标签页 Tabs', link: '/tabs/' },
        { text: '表格 Table', link: '/table/' },
        { text: '文字提示 Tooltip', link: '/tooltip/' },
        { text: '描述列表 Description', link: '/description/' },
      ]
    },
    {
      text: '数据录入',
      items: [
        { text: '表单 Form', link: '/form/' },
        { text: '单选框 Radio', link: '/radio/' },
        { text: '输入框 Input', link: '/input/' },
        { text: '复选框 Checkbox', link: '/checkbox/' },
        { text: '数字输入框 InputNumber', link: '/inputNumber/' },
        { text: '选择器 Select', link: '/select/' },
        { text: '开关 Switch', link: '/switch/' },
        { text: '级联选择 Cascader', link: '/cascader/' },
        { text: '级联选择面板 CascaderPanel', link: '/cascaderPanel/' },
        { text: '滑动输入条 Slider', link: '/slider/' },
        { text: '穿梭框 Transfer', link: '/transfer/' },
        { text: '日期选择框 DatePicker', link: '/datePicker/' },
        { text: '时间选择框 TimePicker', link: '/timePicker/' },
      ]
    },
    {
      text: '反馈',
      items: [
        { text: '警告提示 Alert', link: '/alert/' },
        { text: '弹框 Modal', link: '/modal/' },
        { text: '鼠标右键 ContextMenu', link: '/contextMenu/' },
        { text: '气泡确认框 Popconfirm', link: '/popconfirm/' },
        { text: '全局提示 Message', link: '/message/' },
      ]
    },
    {
      text: '表单',
      items: [
        { text: '密码框 Password', link: '/password/' }
      ]
    },
    {
      text: '其他',
      items: [
        { text: '空组件', link: '/empty/' },
        { text: '表格Column', link: '/tableColumn/' },
        { text: '复制Copy', link: '/copy/' }
      ]
    }
  ],
};