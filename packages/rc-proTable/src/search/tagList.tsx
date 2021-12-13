import React from 'react'
import { SearchTagList } from "@ali/console-components-search"


/**
 * @public
 */
const SearchTags: React.FC<any> = props => {
  let tagProps = {
    regionId: props.regionId || '',
    resourceType: props.resourceType || '',
    className: props.className ? props.className : '',
    style: props.style ? props.style : {},
    tagList: props.tagList,
    onChange: props.onChange ? props.onChange : () => {},
  }

  return (
    <SearchTagList
        {...tagProps}
    />
  );
  
}

export default SearchTags
