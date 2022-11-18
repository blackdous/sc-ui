import Pagination from 'ant-design-vue/lib/pagination';
import { VNodeChild } from 'vue';

interface PaginationRenderProps {
  page: number;
  type: 'page' | 'prev' | 'next';
  originalElement: any;
}

type PaginationPositon =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight';

export declare class PaginationConfig extends Pagination {
  position?: PaginationPositon[];
}

export interface PaginationProps {
  /**
   * 数据项的总数
   * @default 0
   * @type number
   */
  total?: number;

  /**
   * 默认初始页码
   * @default 1
   * @type number
   */
  defaultCurrent?: number;

  /**
   * 当前页码
   * @type number
   */
  current?: number;

  /**
   * 每页数据项的默认数量
   * @default 10
   * @type number
   */
  defaultPageSize?: number;

  /**
   * 每页数据项数
   * @type number
   */
  pageSize?: number;

  /**
   * 是否在单个页面上隐藏分页
   * @default false
   * @type boolean
   */
  hideOnSinglePage?: boolean;

  /**
   * 确定是否可以更改pageSize
   * @default false
   * @type boolean
   */
  showSizeChanger?: boolean;

  /**
   * 指定sizeChanger选项
   * @default ['10', '20', '30', '40']
   * @type string[]
   */
  pageSizeOptions?: string[];

  /**
   * 确定是否可以直接跳转到页面
   * @default false
   * @type boolean
   */
  showQuickJumper?: boolean | object;

  /**
   * 显示总数和范围
   * @type Function
   */
  showTotal?: (total: number, range: [number, number]) => any;

  /**
   * 指定分页的大小，可以设置为小
   * @default ''
   * @type string
   */
  size?: string;

  /**
   * 是否设置简单模式
   * @type boolean
   */
  simple?: boolean;

  /**
   * 自定义项目innerHTML
   * @type Function
   */
  itemRender?: (props: PaginationRenderProps) => VNodeChild | JSX.Element;

  /**
   * 指定分页的位置
   * @default ['bottomRight']
   * @type string[]
   */
  position?: PaginationPositon[];
}
