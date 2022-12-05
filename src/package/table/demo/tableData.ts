const demoList = () => {
  const data: any = (() => {
    const arr: any = [];
    for (let index = 0; index < 100; index++) {
      arr.push({
        id: `${index}`,
        name: 'John Brown' + index,
        name1: 'name01--' + index,
        name2: 'name02--' + index,
        name3: 'name03--' + index,
        name4: 'name04--' + index,
        name5: 'name05--' + index,
        name6: 'name06--' + index,
        name7: 'name07--' + index,
        name8: 'name08--' + index,
        radio1: `选项${index + 1}`,
        radio2: `选项${index + 1}`,
        radio3: `选项${index + 1}`,
        age: `1${index}`,
        no: `${index + 10}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        imgArr: getRandomPics(Math.ceil(Math.random() * 3) + 1),
        imgs: getRandomPics(Math.ceil(Math.random() * 3) + 1),
        address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
        date: `2022-05-06`,
        time: `12:07`,
        status: 1,
      });
    }
    return arr;
  })();
  return data;
};
function getRandomPics(count = 10): string[] {
  const arr: string[] = [];
  const imgs = [
    'https://aliyuncdn.antdv.com/vue.png',
    'https://aliyuncdn.antdv.com/logo.png',
    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  ];
  for (let i = 0; i < count; i++) {
    arr.push(imgs[i % 4]);
  }
  return arr;
}
export function pagination<T = any>(pageNo: number, pageSize: number, array: T[]): T[] {
  const offset = (pageNo - 1) * Number(pageSize);
  const ret =
    offset + Number(pageSize) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(pageSize));
  return ret;
}
export const demoListApi = (params: any) => {
  return new Promise<any>((res) => {
    setTimeout(() => {
      const list: any[] = demoList();
      const pageData = pagination(params.current, params.size, list);
      res({
        current: params.current,
        size: params.size,
        records: pageData,
        total: list.length,
      });
    }, 500);
  });
};