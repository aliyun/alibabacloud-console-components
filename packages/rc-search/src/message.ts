import Cookie from 'js-cookie';

const isSSR = typeof document === 'undefined';

const messages = {
  'zh': {
    confirm: '确定',
    cancel: '取消',
    allValue: '全部值',
    emptyValue: '空值',
    tag: "标签",
    defaultFilterGroupName: "选择筛选条件",
    defaultPlaceHolder: '默认按${value}搜索',
    clearFilter: '清除筛选条件',
  },
  'en': {
    confirm: 'Ok',
    cancel: 'Cancel',
    allValue: 'All Value',
    emptyValue: 'Empty Value',
    tag: "Tag",
    defaultFilterGroupName: "Filters",
    defaultPlaceHolder: 'Search By ${value}',
    clearFilter: 'Clear Filter',
  }
}

let lang = isSSR ? 'en' : (Cookie.get('aliyun_lang') || 'en');

if (!Object.keys(messages).includes(lang)) {
  lang = 'en';
}

// @ts-ignore
export default messages[lang];