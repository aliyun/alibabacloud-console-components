import { ConfigProvider as NextConfigProvider } from '@alifd/next';
declare const ConfigProvider: typeof NextConfigProvider & {
    useRefElement: typeof useRefElement;
};
export default ConfigProvider;
/**
 * 获取微应用根元素
 */
declare function useRefElement(): HTMLElement;

export * from '@alifd/next/types/config-provider'
