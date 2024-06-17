import React, { useEffect } from 'react';
import { getEnv } from '../utils/getEnv';
import { getLogger } from '../utils/logger';

export interface LoggerProviderProps {
  regionId: string;
  componentName: string;
};

const TOPIC = 'com-usage';
const SAMPLING = getEnv() === 'local' ? 1 : 0.5;

// 用来记录是否已经发送过日志，防止日志量太多，比如在列表中使用组件
const LOGGER_RECORD: Record<string, boolean> = {}

const LoggerProvider: React.FC<LoggerProviderProps> = (props) => {
  const { regionId, componentName } = props;

  useEffect(() => {
    const recordKey = `${componentName}`;
    const info = {
      env: getEnv(),
      // @ts-ignore
      properties: [`regionId`, `resourceType`].map(t => `${t}=${props[t]}`).join('&'),
      component: componentName
    };

    if (!LOGGER_RECORD[recordKey]) {
      getLogger().log(TOPIC, info, {sampling: SAMPLING });
      LOGGER_RECORD[recordKey] = true;
    }
  
  }, [regionId, componentName]);

  return null;
}

export default LoggerProvider;
