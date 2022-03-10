import styled from "styled-components";

const prefix = (props: {prefix: string}) =>
  props.prefix ? `.${props.prefix}` : '.next-'

const SearchWarp = styled.div<{prefix: string}>`
  height: 100%;
  width: 100%;
  display: flex;
  --input-clear-icon-transform: 1;
  --input-hint-icon-color: #808080;
  ${prefix}input-control ${prefix}input-clear-icon::before {
    content: var(--icon-content-close, "\ea22") !important;
  }
  .left-wrap {
    flex: 1;
    border: 1px solid var(--btn-pure-normal-border-color, #d1d5d9);
    display: flex;
    border-bottom-left-radius: var(--corner-1, 2px);
    border-top-left-radius: var(--corner-1, 2px);
    &.focus {
      border: 1px solid #0064c8;
      border: 1px solid var(--input-focus-border-color,#0064c8);;
      border-right: 1px solid rgba(192, 198,204, 1);
    }
    .condition{
      height: 26px;
      display: inline-block;
      margin-top: 2px;
    }
    .condition-item{
      height: 26px;
      display: inline-block;
      line-height: 26px;
      background-color: var(--console-rc-search-label-color, #F7F9FA);
      :hover {
        background-color: var(--console-rc-search-label-hover-color, #EFF3F8);
      }
      border-radius: var(--corner-1, 2px);
      padding: 0 8px;
      margin: 0 2px;
      font-size: 12px;
      color: #333;
      position: relative;
      &-txt{
        padding-right: 4px;
      }
      &:hover{
        background-color: #E0E4E8;
      }
    }
    .condition-select{
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
      top: var(--console-rc-search-close-btn-top, 0);
      left: var(--console-rc-search-close-btn-left, 0);
      min-width: auto;
      ${prefix}select-inner{
        min-width: auto;
      }
    }
    .forms{
      flex: 1;
      position: relative;
      .clear-level1{
        position: absolute;
        top: 1px;
        right: 1px;
        height: 28px;
        width: 30px;
        background-color: #fff;
        z-index: 99;
        color: #333;
        text-align: center;
        line-height: 28px;
        font-size: 12px;
        cursor: pointer;
        padding: 6px 0 0 6px;
      }
    }
    .main-input{
      height: auto;
      border: none;
      box-shadow: none;
      &.single{
        flex: 1;
      }
      &.select{
        width: 100%;
      }
      &.multi{
        width: 100%;
        /* .next-select-values .next-tag{
          display: none;
        } */
      }
      
      ${prefix}input, ${prefix}input{
        height: auto;
        box-shadow: none;
      }
    }
    ${prefix}input${prefix}medium{
      height: auto;
    }
  }
  .right-wrap {
    width: 32px;
    .search-btn {
      width: 32px;
      padding: 0 !important;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      &.focus {
        border-color: #0064c8;
        border-color: var(--input-focus-border-color,#0064c8);
      }
      border-left: none;
    }
  }
`;

const MenuContentWrap = styled.ul<{prefix: string}>`
    ${prefix}tag-small${prefix}tag-closable > ${prefix}tag-close-btn {
    margin-left: 8px;
    padding-right: 4px;
    padding-top: 1px;
  }
  ${prefix}tag-small${prefix}tag-closable > ${prefix}tag-body {
    max-width: calc(100% - 8px - 8px - var(--tag-size-m-padding-lr, 8px));
  }
  ${prefix}tag-small${prefix}tag-closable > ${prefix}tag-close-btn ${prefix}icon:before, ${prefix}tag-small${prefix}tag-closable > ${prefix}tag-close-btn ${prefix}icon ${prefix}icon-remote {
    font-size: 13px;
  }
  && [class*='-icon-close']:hover::before {
    color: #181818;
  }
  && [class*='-icon-close']::before{
    color: #808080;
    content: var(--icon-content-delete-filling);
  }
`


const MultiBtnWarp = styled.div<{prefix: string}>`
  padding: "0 4px";
  text-align: "center";
  /* display: "flex"; */
  /* justify-content: "start"; */
  .pri-btn{
    margin-right: 8px;
    width: auto;
    min-width: auto;
    padding: 3px 12px;
  }
  .cancel-btn{
    padding: 3px 12px;
    width: auto;
    min-width: auto;
  }
  ${prefix}btn${prefix}small:not(.isOnlyIcon):not(${prefix}btn-text) {
      min-width: auto;
  }
`;

const TagListWrap = styled.div<{prefix: string}>`
  ${prefix}tag-medium${prefix}tag-closable > ${prefix}tag-close-btn {
    margin-left: 8px;
    padding-right: 6px;
  }
  ${prefix}tag-medium${prefix}tag-closable > ${prefix}tag-body {
    max-width: calc(100% - 8px - 8px - var(--tag-size-m-padding-lr, 8px));
  }
  ${prefix}tag-medium${prefix}tag-closable > ${prefix}tag-close-btn ${prefix}icon:before, ${prefix}tag-medium${prefix}tag-closable > ${prefix}tag-close-btn ${prefix}icon ${prefix}icon-remote{
    font-size: 16px;
  }
  && [class*='-icon-close']:hover::before  {
    color: #181818;
  }
  && [class*='-icon-close']::before{
    color: #808080;
    font-size: 12px !important;
  }
  .remove-btn{
    margin-bottom: 8px;
    line-height: 24px;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
`

export {
  SearchWarp,
  MultiBtnWarp,
  TagListWrap,
  MenuContentWrap
}