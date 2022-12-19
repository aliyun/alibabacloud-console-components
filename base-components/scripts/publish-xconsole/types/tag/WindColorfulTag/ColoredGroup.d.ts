import PropTypes from 'prop-types';
declare const ColoredGroup: {
    ({ className, style, avaliableColors, children }: {
        className: any;
        style: any;
        avaliableColors?: string[];
        children: any;
    }): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        avaliableColors: PropTypes.Requireable<string[]>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export default ColoredGroup;
