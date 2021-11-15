let historyTagKey = `xconsole-rcsearch-historytag-${location.origin}${location.pathname}`;

// 从localStorage中获取tagList
const getHistoryTag = () => {
  let tagStr = localStorage.getItem(historyTagKey);
  if (tagStr) {
    return JSON.parse(tagStr);
  } else {
    return [];
  }
  
}



// 向localStorage中存入tagList
const setHistoryTag = (newTagList: any) => {
  let tagsHistory = getHistoryTag();
  let newHTags = tagsHistory.concat(newTagList);
  if (newHTags.length <= 5) {
    localStorage.setItem(historyTagKey, JSON.stringify(newHTags));
    return newHTags;
  } else {
    newHTags.reverse();
    // todo ：去重
    newHTags.length = 5;
    newHTags.reverse();
    localStorage.setItem(historyTagKey, JSON.stringify(newHTags));
    return newHTags;
  }
}

const removeHistoryTagItem = (tagItem: any) => {
  let tagsHistory = getHistoryTag();
  let findTagIndex = -1;
  if (tagsHistory && tagsHistory.length > 0) {
    findTagIndex = tagsHistory.findIndex((x: any) => {
      if (tagItem.dataIndex === x.dataIndex 
        && tagItem.valueShow === x.valueShow) {
        return true;
      } else {
        return false;
      }
    })
  }
  if (findTagIndex >= 0) {
    tagsHistory.splice(findTagIndex, 1);
  }
  localStorage.setItem(historyTagKey, JSON.stringify(tagsHistory));
  return tagsHistory;
}

// 将内部的表单对象， 转化成taglist array
const getTagByFileds = (fileds: any, options: any) => {
  let rtTags = new Array<any>();
  Object.keys(fileds).forEach((key: string) => {
    let resItem = options.find((x:any) => x.dataIndex === key)
    if (resItem) {
      let tagItem = {
        label: resItem.label,
        dataIndex: key,
        value: fileds[key],
        valueShow: ''
      }  
      if (resItem.template === 'input') {
        tagItem.valueShow = fileds[key]
      } else if (resItem.template === 'select') {
        tagItem.valueShow = resItem.templateProps.dataSource.find((y:any) => y.value === fileds[key]).label
      } else if (resItem.template === 'multiple') {
        tagItem.valueShow = ''
        let valueShowArr = new Array<any>();
        fileds[key].forEach((y:any) => {
          let findMul = resItem.templateProps.dataSource.find((z:any) => z.value === y)
          if (findMul) {
            valueShowArr.push(findMul.label)
          }
        })
        tagItem.valueShow = valueShowArr.join('/')
      }
      rtTags.push(tagItem)
    }
  })
  return rtTags;
}


export {
  getHistoryTag,
  setHistoryTag,
  removeHistoryTagItem,
  getTagByFileds,
}