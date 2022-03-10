import createLogger, { LogFn } from '@alicloud/console-logger-sls';

let logger: LogFn | null = null;

export const getLogger = () => {

  if (!logger) {
    logger = createLogger({
      project: 'stonehenge-console',
      endpoint: 'cn-hangzhou.log.aliyuncs.com',
      logstore: `com-usage-origin`
    });
  }
  return logger;
};
