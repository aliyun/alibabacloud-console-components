import { css, CSSObject, FlattenSimpleInterpolation } from 'styled-components';

export const flexContainer = (
  props: CSSObject = {},
): FlattenSimpleInterpolation => {
  return css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
    ...props,
  });
};

export const flexItem = (props: CSSObject = {}): FlattenSimpleInterpolation => {
  return css({
    order: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    alignSelf: 'auto',
    ...props,
  });
};

export const lineHeight = (fontSize: number): number => fontSize * 2 - fontSize / 2;
