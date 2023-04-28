/*
 * @Author: yangkun 17854265879@163.com
 * @Date: 2023-03-16 16:21:30
 * @LastEditors: yangkun 17854265879@163.com
 * @LastEditTime: 2023-04-28 13:57:01
 * @FilePath: /starship-console-scr/src/views/imageDocker/tableColumns.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue'
// import i18n from '@/i18n'

// const { t } = i18n.global

export default ref([
  {
    title: '机型',
    width: 94,
    dataIndex: 'model',
    key: 'model',
    slots: { customRender: 'model' }
  },
  {
    title: '套餐',
    dataIndex: 'package',
    key: 'package',
    width: 140,
    slots: { customRender: 'package' }
  },
  {
    // title: 'CPU',
    dataIndex: 'cpu',
    key: 'cpu',
    width: 94,
    slots: { customRender: 'cpu' },
    titleType: {
      componentName: 'thUnit2',
      props: {
        text: 'CPU',
        unit: '(核)'
      }
    }
  },
  {
    // title: '内存',
    dataIndex: 'ram',
    key: 'ram',
    width: 94,
    slots: { customRender: 'ram' },
    titleType: {
      componentName: 'thUnit2',
      props: {
        text: '内存',
        unit: '(GB)'
      }
    }
  },
  {
    title: '处理器型号',
    dataIndex: 'processor',
    key: 'processor',
    width: 353,
    slots: { customRender: 'processor' }
  },
  {
    title: 'GPU',
    dataIndex: 'gpu',
    key: 'gpu',
    width: 143,
    slots: { customRender: 'gpu' }
  },
  {
    title: '内网带宽',
    dataIndex: 'internalNetworkBandwidth',
    key: 'internalNetworkBandwidth',
    width: 118,
    slots: { customRender: 'internalNetworkBandwidth' }
  },
  {
    title: '收发包',
    dataIndex: 'receivePackages',
    key: 'receivePackages',
    width: 118,
    slots: { customRender: 'receivePackages' }
  },
  {
    title: '参考价格',
    dataIndex: 'price',
    key: 'price',
    width: 189,
    slots: { customRender: 'price' }
  }
])
