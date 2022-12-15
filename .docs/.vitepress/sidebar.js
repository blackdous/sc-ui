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
      ],
    },
    {
      text: 'General',
      items: [
        { text: 'Button', link: '/en/button/' },
        { text: 'Loading', link: '/en/loading/' }
      ]
    },
    {
      text: 'Data Display',
      items: [
        { text: 'Tabs', link: '/en/tabs/' },
        { text: 'Table', link: '/en/table/' },
        { text: 'Tooltip', link: '/en/tooltip/' }
      ]
    },
    {
      text: 'Data Entry',
      items: [
        { text: 'Radio', link: '/en/radio/' },
        { text: 'Input', link: '/en/input/' },
        { text: 'Checkbox', link: '/en/checkbox/' },
        { text: 'InputNumber', link: '/en/inputNumber/' },
        { text: 'Select', link: '/en/select/' },
        { text: 'Switch', link: '/en/switch/' }
      ]
    },
    {
      text: 'Navigation',
      items: [
        { text: 'Steps', link: '/en/steps/' },
        { text: 'Pagination', link: '/en/pagination/' },
        { text: 'Dropdown', link: '/en/dropdown/' }
      ]
    },
    {
      text: 'Feedback',
      items: [
        { text: 'Alert', link: '/en/alert/' },
        { text: 'Modal', link: '/en/modal/' },
        { text: 'contextMenu', link: '/contextMenu/' }
      ]
    },
    {
      text: 'From',
      items: [
        { text: 'Password', link: '/en/password/' }
      ]
    }
  ],
  '/': [
    {
      text: 'SC-UI',
      items: [
        { text: '简介', link: '/' },
      ],
    },
    {
      text: '通用',
      items: [
        { text: '按钮', link: '/button/' },
        { text: '加载动画', link: '/loading/' }
      ]
    },
    {
      text: '导航',
      items: [
        { text: '步骤条', link: '/steps/' },
        { text: '分页', link: '/pagination/' },
        { text: '下拉菜单', link: '/dropdown/' }
      ]
    },
    {
      text: '数据展示',
      items: [
        { text: '标签页', link: '/tabs/' },
        { text: '表格', link: '/table/' },
        { text: '文字提示', link: '/tooltip/' }
      ]
    },
    {
      text: '数据录入',
      items: [
        { text: '单选框', link: '/radio/' },
        { text: '输入框', link: '/input/' },
        { text: '复选框', link: '/checkbox/' },
        { text: '数字输入框', link: '/inputNumber/' },
        { text: '选择器', link: '/select/' },
        { text: '开关', link: '/switch/' }
      ]
    },
    {
      text: '反馈',
      items: [
        { text: '警告提示', link: '/alert/' },
        { text: '弹框', link: '/modal/' },
        { text: '鼠标右键', link: '/contextMenu/' }
      ]
    },
    {
      text: '表单',
      items: [
        { text: '密码框', link: '/password/' }
      ]
    }
  ],
};