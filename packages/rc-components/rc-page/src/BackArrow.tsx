import * as React from 'react';
import * as PropTypes from 'prop-types';
import StyledBackArrow, { BackArrowIcon } from './styles/BackArrow';

export interface IProps {
  render?: (icon: React.ReactElement) => React.ReactElement
  onClick?: (e: React.SyntheticEvent) => void
}

const BackArrow: React.FC<IProps> = ({ onClick, render }) => {
  const icon = <BackArrowIcon type="arrow-left-line" onClick={onClick} />;
  return (
    <StyledBackArrow>
      {typeof render === 'function' ? render(icon) : icon}
    </StyledBackArrow>
  );
};

BackArrow.propTypes = {
  onClick: PropTypes.func,
  render: PropTypes.func,
};

export default BackArrow;
