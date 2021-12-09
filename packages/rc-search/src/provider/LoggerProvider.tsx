import React, { useEffect } from 'react';
import { getEnv, getLogger, isValidKey } from '../utils';

export interface LoggerProviderProps {
  regionId: string;
  resourceType: string;
  componentName: string;
};

const TOPIC = 'com-usage';
const SAMPLING = getEnv() === 'local' ? 1 : 0.5;

// 用来记录是否已经发送过日志，防止日志量太多，比如在列表中使用组件
const LOGGER_RECORD: Record<string, boolean> = {}

const LoggerProvider: React.FC<LoggerProviderProps> = (props) => {
  const { regionId, resourceType, componentName } = props;

  useEffect(() => {
    const recordKey = `${componentName}-${resourceType}`;
    let propsArr = new Array<string>();
    [`regionId`, `resourceType`].forEach((t:string) => {
      if (t && isValidKey(t, props)) {
        propsArr.push(`${t}=${props[t]}`)
      }
    })

    const info = {
      env: getEnv(),
      properties: propsArr.join('&'),
      component: componentName
    };

    if (!LOGGER_RECORD[recordKey]) {
      getLogger().log(TOPIC, info, {sampling: SAMPLING });
      LOGGER_RECORD[recordKey] = true;
    }
  
  }, [regionId, resourceType, componentName]);

  return null;
}

export default LoggerProvider;
