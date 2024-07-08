import { useLayoutEffect, RefObject, useState } from 'react';
import { ConfigProvider } from '@alicloud/console-components';

export default () => {
  return typeof document !== 'undefined' && document.body.classList.contains('theme-wind') ? 'xs' : 'small';
};

let nextId = 0;

export function useCssVar(cssVarName: string) {
  const [v, setV] = useState('');
  const refElement = ConfigProvider.useRefElement();

  useLayoutEffect(() => {
    check();

    // @ts-ignore
    const checkArr = (window.__recheck_css_var = window.__recheck_css_var ?? []);
    while (checkArr[nextId]) {
      // 如果一个页面下有份此组件库（即有多个nextId指针），需要避免冲突
      nextId++;
    }
    const id = nextId++;
    checkArr[id] = check;

    return () => {
      delete checkArr[id];
    };

    function check() {
      const val =
        window.getComputedStyle?.(refElement).getPropertyValue(cssVarName) ??
        '';
      setV(val);
    }
  }, [refElement, cssVarName]);

  return v;
}
