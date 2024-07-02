import React, { useCallback } from 'react';
import { TimePicker, TimePickerProps } from '@alicloud/console-components';
import moment from 'moment-timezone';

import { getTimeZone } from './utils';

const tz = getTimeZone();

export function TimePickerTz(props: TimePickerProps) {
  const { onChange } = props;

  const handleChange = useCallback((value, e) => {
    if (!onChange) return;
    
    const formatTime = tz ? moment.tz(value, tz) : value;

    onChange(formatTime, e);
  }, [onChange]);

  return (
    <TimePicker
      {...props}
      onChange={handleChange}
    />
  );
}

export default TimePickerTz;
