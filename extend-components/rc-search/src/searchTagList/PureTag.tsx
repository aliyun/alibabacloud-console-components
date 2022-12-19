import React from 'react';
import { Tag, Badge } from '@alicloud/console-components';
import Truncate from '@alicloud/console-components-truncate';
import { CloseableProps } from '@alifd/next/lib/tag';
import './index.less'
import message from '../message';

export interface PureTagProps extends CloseableProps {
  tagKey: string;
  tagValue: string;
  disableTruncate?: boolean;
  closable?: boolean;
  showDot?: boolean;
  showLabel?: boolean | string;
  intl?: any;
}

const Empty: React.FC<{children: React.ReactChild}> = ({ children }) => {
  return <>{children}</>;
}

const PureTag: React.FC<PureTagProps> = (props: PureTagProps) => {
  const { intl, tagKey, disableTruncate, showDot, tagValue, showLabel, closable = true, ...resetProps } = props;

  const defaultTruncateProps = {
    threshold: 20,
    showTooltip: false
  }

  const TruncateWrapper = disableTruncate ? Empty : Truncate;
  const DotWrapper = showDot ? Badge : Empty
  const TagWrapper = closable ? Tag.Closeable : Tag;

  let transformedTagValue = tagValue;
  if (tagValue === '') {
    transformedTagValue = message.emptyValue;
  } else if(tagValue === undefined || tagValue === null) {
    transformedTagValue = message.allValue;
  }

  return (
    //@ts-ignore
    <DotWrapper className="search-tags-tag-dot" dot><TagWrapper
      title={`${tagKey}:${tagValue}`}
      className="search-tags-tag"
      {...resetProps}
    >
        { showLabel && <label className="search-tags-tag-label">{message.tag}</label> }
        <TruncateWrapper {...defaultTruncateProps}>{tagKey}</TruncateWrapper>:{tagValue? <TruncateWrapper {...defaultTruncateProps}>{tagValue}</TruncateWrapper> : <span className="console-tags-tag_empty">{transformedTagValue}</span>}
      </TagWrapper>
    </DotWrapper>
  );
}

export default PureTag;
