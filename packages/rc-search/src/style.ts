import styled from "styled-components";

const SearchWarp = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  .left-wrap {
    flex: 1;
    border-left: 1px solid rgba(192,198,204,1);
    border-bottom: 1px solid rgba(192, 198,204, 1);
    border-top: 1px solid rgba(192, 198,204, 1);
    border-right: 1px solid rgba(192, 198,204, 1);
    display: flex;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    &.focus{
      border: 1px solid #0064c8;
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
      background: #EFF3F8;
      border-radius: 2px;
      background-color: #EFF3F8;
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
      top: 0;
      left: 0;
      min-width: auto;
      .next-select-inner{
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
      
      .next-input, .xdemo-input{
        height: auto;
        box-shadow: none;
      }
    }
    .xdemo-input.xdemo-medium{
      height: auto;
    }
  }
  .right-wrap {
    width: 32px;
    position: relative;
    /* height: 32px; */
    .search-btn{
      width: 32px;
      /* height: 32px; */
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border-left: none;
    }
    .hiddenFocus-box{
      display: block;
      height: 1px;
      width: 1px;
      overflow: hidden;
      position: absolute;
      opacity: 0;
    }
  }
`;

const MenuContentWrap = styled.ul`
  .next-tag-small.next-tag-closable > .next-tag-close-btn {
    margin-left: 8px;
    padding-right: 4px;
    padding-top: 1px;
  }
  .next-tag-small.next-tag-closable > .next-tag-body {
    max-width: calc(100% - 8px - 8px - var(--tag-size-m-padding-lr, 8px));
  }
  .next-tag-small.next-tag-closable > .next-tag-close-btn .next-icon:before, .next-tag-small.next-tag-closable > .next-tag-close-btn .next-icon .next-icon-remote{
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


const MultiBtnWarp = styled.div`
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
  .next-btn.next-small:not(.isOnlyIcon):not(.next-btn-text) {
      min-width: auto;
  }
`;

const TagListWrap = styled.div`
  .next-tag-medium.next-tag-closable > .next-tag-close-btn {
    margin-left: 8px;
    padding-right: 6px;
  }
  .next-tag-medium.next-tag-closable > .next-tag-body {
    max-width: calc(100% - 8px - 8px - var(--tag-size-m-padding-lr, 8px));
  }
  .next-tag-medium.next-tag-closable > .next-tag-close-btn .next-icon:before, .next-tag-medium.next-tag-closable > .next-tag-close-btn .next-icon .next-icon-remote{
    font-size: 16px;
  }
  && [class*='-icon-close']:hover::before  {
    color: #181818;
  }
  && [class*='-icon-close']::before{
    color: #808080;
    content: var(--icon-content-delete-filling);
  }
  .remove-btn{
    margin-bottom: 4px;
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