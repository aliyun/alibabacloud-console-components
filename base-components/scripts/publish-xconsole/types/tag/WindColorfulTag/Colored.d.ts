declare const ColoredTag: {
    ({ type, className, ...restProps }: {
        [x: string]: any;
        type: any;
        className: any;
    }): JSX.Element;
    /**
     * Prop types
     * @static
     * @type {Object}
     */
    propTypes: any;
    /**
     * Default props
     * @static
     * @type {Object}
     */
    defaultProps: {
        type: string;
    };
};
export default ColoredTag;
