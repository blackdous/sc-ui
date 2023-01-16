const demoList = (count = 20) => {
  const result = {
    list: [] as any[],
  };
  for (let index = 0; index < count; index++) {
    result.list.push({
      name: `选项${index}`,
      id: `${index}`,
    });
  }
  return result;
};

const demoTreeList = () => {
  const result = {
    list: [] as Recordable[],
  };
  for (let index = 0; index < 5; index++) {
    const children: Recordable[] = [];
    for (let j = 0; j < 3; j++) {
      children.push({
        title: `选项${index}-${j}`,
        value: `${index}-${j}`,
        key: `${index}-${j}`,
      });
    }
    result.list.push({
      title: `选项${index}`,
      value: `${index}`,
      key: `${index}`,
      children,
    });
  }
  return result;
};

const demoAreaList = (parentCode: any) => {
  const areaList: any[] = [
    {
      id: '530825900854620160',
      code: '430000',
      parentCode: '100000',
      levelType: 1,
      name: '湖南省',
      province: '湖南省',
      city: null,
      district: null,
      town: null,
      village: null,
      parentPath: '430000',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 16:33:42',
      customized: false,
      usable: true,
    },
    {
      id: '530825900883980288',
      code: '430100',
      parentCode: '430000',
      levelType: 2,
      name: '长沙市',
      province: '湖南省',
      city: '长沙市',
      district: null,
      town: null,
      village: null,
      parentPath: '430000,430100',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 16:33:42',
      customized: false,
      usable: true,
    },
    {
      id: '530825900951089152',
      code: '430102',
      parentCode: '430100',
      levelType: 3,
      name: '芙蓉区',
      province: '湖南省',
      city: '长沙市',
      district: '芙蓉区',
      town: null,
      village: null,
      parentPath: '430000,430100,430102',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 16:33:42',
      customized: false,
      usable: true,
    },
    {
      id: '530825901014003712',
      code: '430104',
      parentCode: '430100',
      levelType: 3,
      name: '岳麓区',
      province: '湖南省',
      city: '长沙市',
      district: '岳麓区',
      town: null,
      village: null,
      parentPath: '430000,430100,430104',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 16:33:42',
      customized: false,
      usable: true,
    },
    {
      id: '530825900988837888',
      code: '430103',
      parentCode: '430100',
      levelType: 3,
      name: '天心区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: null,
      village: null,
      parentPath: '430000,430100,430103',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 16:33:42',
      customized: false,
      usable: true,
    },
    {
      id: '530826672489115648',
      code: '430103002',
      parentCode: '430103',
      levelType: 4,
      name: '坡子街街道',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: null,
      parentPath: '430000,430100,430103,430103002',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-12-14 15:26:43',
      customized: false,
      usable: true,
    },
    {
      id: '530840241171607552',
      code: '430103002001',
      parentCode: '430103002',
      levelType: 5,
      name: '八角亭社区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: '八角亭社区',
      parentPath: '430000,430100,430103,430103002,430103002001',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2021-01-20 14:07:23',
      customized: false,
      usable: true,
    },
    {
      id: '530840241200967680',
      code: '430103002002',
      parentCode: '430103002',
      levelType: 5,
      name: '西牌楼社区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: '西牌楼社区',
      parentPath: '430000,430100,430103,430103002,430103002002',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 17:30:41',
      customized: false,
      usable: true,
    },
    {
      id: '530840241230327808',
      code: '430103002003',
      parentCode: '430103002',
      levelType: 5,
      name: '太平街社区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: '太平街社区',
      parentPath: '430000,430100,430103,430103002,430103002003',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 17:30:41',
      customized: false,
      usable: true,
    },
    {
      id: '530840241259687936',
      code: '430103002005',
      parentCode: '430103002',
      levelType: 5,
      name: '坡子街社区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: '坡子街社区',
      parentPath: '430000,430100,430103,430103002,430103002005',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 17:30:41',
      customized: false,
      usable: true,
    },
    {
      id: '530840241284853760',
      code: '430103002006',
      parentCode: '430103002',
      levelType: 5,
      name: '青山祠社区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: '青山祠社区',
      parentPath: '430000,430100,430103,430103002,430103002006',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 17:30:41',
      customized: false,
      usable: true,
    },
    {
      id: '530840241310019584',
      code: '430103002007',
      parentCode: '430103002',
      levelType: 5,
      name: '沙河社区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: '沙河社区',
      parentPath: '430000,430100,430103,430103002,430103002007',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 17:30:41',
      customized: false,
      usable: true,
    },
    {
      id: '530840241381322752',
      code: '430103002008',
      parentCode: '430103002',
      levelType: 5,
      name: '碧湘社区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: '碧湘社区',
      parentPath: '430000,430100,430103,430103002,430103002008',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 17:30:41',
      customized: false,
      usable: true,
    },
    {
      id: '530840241410682880',
      code: '430103002009',
      parentCode: '430103002',
      levelType: 5,
      name: '创远社区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: '创远社区',
      parentPath: '430000,430100,430103,430103002,430103002009',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 17:30:41',
      customized: false,
      usable: true,
    },
    {
      id: '530840241431654400',
      code: '430103002010',
      parentCode: '430103002',
      levelType: 5,
      name: '楚湘社区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: '楚湘社区',
      parentPath: '430000,430100,430103,430103002,430103002010',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 17:30:41',
      customized: false,
      usable: true,
    },
    {
      id: '530840241465208832',
      code: '430103002011',
      parentCode: '430103002',
      levelType: 5,
      name: '西湖社区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: '西湖社区',
      parentPath: '430000,430100,430103,430103002,430103002011',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 17:30:41',
      customized: false,
      usable: true,
    },
    {
      id: '530840241502957568',
      code: '430103002012',
      parentCode: '430103002',
      levelType: 5,
      name: '登仁桥社区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: '登仁桥社区',
      parentPath: '430000,430100,430103,430103002,430103002012',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 17:30:41',
      customized: false,
      usable: true,
    },
    {
      id: '530840241553289216',
      code: '430103002013',
      parentCode: '430103002',
      levelType: 5,
      name: '文庙坪社区',
      province: '湖南省',
      city: '长沙市',
      district: '天心区',
      town: '坡子街街道',
      village: '文庙坪社区',
      parentPath: '430000,430100,430103,430103002,430103002013',
      createTime: '2020-11-30 15:47:31',
      updateTime: '2020-11-30 17:30:41',
      customized: false,
      usable: true,
    },
  ];
  if (!parentCode) {
    return areaList.filter((it) => it.code === '430000');
  }
  return areaList.filter((it) => it.parentCode === parentCode);
};

const demoAccountExist = (account: any) => {
  console.log('account: ', account);
  return new Promise((resolve, reject) => {
    if (account && account.indexOf('admin') !== -1) {
      reject('该字段不能包含admin');
    } else {
      resolve(`${account} 可以使用`);
    }
  });
};

export const optionsListApi = (params: any) => {
  return new Promise<any>((res) => {
    setTimeout(() => {
      res(demoList(params.count));
    }, 500);
  });
};

export const treeOptionsListApi = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(demoTreeList());
    }, 500);
  });
};

export const areaRecord = (parentCode: any) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(demoAreaList(parentCode));
    }, 500);
  });
};

export const isAccountExist = (parentCode: any) => {
  console.log('parentCode: ', parentCode);
  return demoAccountExist(parentCode);
};


export default { optionsListApi, treeOptionsListApi, areaRecord, isAccountExist}