import React from 'react';
declare const HOC: <T extends unknown>(WrappedComponents: React.ComponentType<T>) => React.ComponentType<T>;
export default HOC;
declare const OverlayHOC: <T extends unknown>(WrappedComponents: React.ComponentType<T>) => React.ComponentType<T>;
export { OverlayHOC };
export declare function useDefaultOffsetY(): number;
