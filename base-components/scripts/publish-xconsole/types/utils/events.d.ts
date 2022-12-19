/**
 * 取消事件绑定
 * @param  {*}   node       DOM节点或任何可以绑定事件的对象
 * @param  {String}   eventName  事件名
 * @param  {Function} callback   回调方法
 * @param  {Boolean}   [useCapture=false] 是否开启事件捕获优先
 */
export declare function off(node: any, eventName: any, callback: any, useCapture?: any): void;
/**
 * 绑定事件
 * @param  {*}   node       DOM节点或任何可以绑定事件的对象
 * @param  {String}   eventName  事件名
 * @param  {Function} callback   回调方法
 * @param  {Boolean}   useCapture 是否开启事件捕获优先
 * @return {Object}               返回的object中包含一个off方法，用于取消事件监听
 *
 * @example
 * const handler = events.on(document.body, 'click', e => {
 *     // handle click ...
 * });
 * // 取消事件绑定
 * handler.off();
 */
export declare function on(node: any, eventName: any, callback: any, useCapture?: any): {
    off: () => void;
};
/**
 * 绑定事件，只执行一次后销毁
 * @param  {*}   node       DOM节点或任何可以绑定事件的对象
 * @param  {String}   eventName  事件名
 * @param  {Function} callback   回调方法
 * @param  {Boolean}   useCapture 是否开启事件捕获优先
 * @return {Function}             返回的object中包含一个off方法，用于取消事件监听
 */
export declare function once(node: any, eventName: any, callback: any, useCapture?: any): {
    off: () => void;
};
