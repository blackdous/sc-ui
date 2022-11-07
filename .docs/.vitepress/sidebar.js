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
          text: 'Model', link: '/en/model/'
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
    },
    {
      text: 'Data Display',
      items: [
        {
          text: 'Tabs', link: '/en/tabs/'
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
      text: '导航',
      items: [
        { text: '步骤条', link: '/steps/' }
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
          text: '弹框', link: '/model/'
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
    },
    {
      text: '数据展示',
      items: [
        {
          text: '标签页', link: '/tabs/'
        }
      ]
    }
  ],
};