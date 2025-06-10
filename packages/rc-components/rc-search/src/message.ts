import Cookie from 'js-cookie';

const isSSR = typeof document === 'undefined';

const messages = {
  zh: {
    confirm: '确定',
    cancel: '取消',
    allValue: '全部值',
    emptyValue: '空值',
    tag: '标签',
    defaultFilterGroupName: '选择筛选条件',
    defaultPlaceHolder: '默认按${value}搜索',
    clearFilter: '清除筛选条件',
  },
  en: {
    confirm: 'OK',
    cancel: 'Cancel',
    allValue: 'All Values',
    emptyValue: 'Empty',
    tag: 'Tag',
    defaultFilterGroupName: 'Select Filter Condition',
    defaultPlaceHolder: 'Search By ${value}',
    clearFilter: 'Clear Filter Condition',
  },
  'zh-TW': {
    confirm: '確定',
    cancel: '取消',
    allValue: '全部值',
    emptyValue: '空值',
    tag: '標籤',
    defaultFilterGroupName: '選擇篩選條件',
    defaultPlaceHolder: '默認按${value}搜索',
    clearFilter: '清除篩選條件',
  },
  ja: {
    confirm: 'OK',
    cancel: 'キャンセル',
    allValue: 'すべての値',
    emptyValue: '空',
    tag: 'タグ',
    defaultFilterGroupName: 'フィルタリング条件の選択',
    defaultPlaceHolder: '${value} で検索',
    clearFilter: 'フィルタリング条件のクリア',
  },
};

let lang = isSSR ? 'zh' : (Cookie.get('aliyun_lang') || 'zh');

if (!Object.keys(messages).includes(lang)) {
  lang = 'zh';
}

// @ts-ignore
export default messages[lang];
