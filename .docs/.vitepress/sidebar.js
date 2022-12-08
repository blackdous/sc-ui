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
        {
          text: 'Tabs', link: '/en/tabs/'
        },
        {
          text: '表格', link: '/en/table/'
        }
      ]
    },
    {
      text: 'Data Entry',
      items: [
        { text: 'Radio', link: '/en/radio/' }
      ]
    },
    {
      text: 'Navigation',
      items: [
        { text: 'Steps', link: '/en/steps/' }
      ]
    },
    {
      text: 'Feedback',
      items: [
        {
          text: 'Alert', link: '/en/alert/'
        },
        {
          text: 'Modal', link: '/en/modal/'
        },
        {
          text: 'contextMenu', link: '/contextMenu/'
        }
      ]
    },
    {
      text: 'From',
      items: [
        {
          text: 'Password', link: '/en/password/'
        }
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
        { text: '步骤条', link: '/steps/' }
      ]
    },
    {
      text: '数据展示',
      items: [
        {
          text: '标签页', link: '/tabs/'
        },
        {
          text: '表格', link: '/table/'
        }
      ]
    },
    {
      text: '数据录入',
      items: [
        { text: '单选框', link: '/radio/' }
      ]
    },
    {
      text: '反馈',
      items: [
        {
          text: '警告提示', link: '/alert/'
        },
        {
          text: '弹框', link: '/modal/'
        },
        {
          text: '鼠标右键', link: '/contextMenu/'
        }
      ]
    },
    {
      text: '表单',
      items: [
        {
          text: '密码框', link: '/password/'
        }
      ]
    }
  ],
};