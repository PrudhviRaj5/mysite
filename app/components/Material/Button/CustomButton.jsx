import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '@rmwc/button';

import './CustomButton.scss';

const CustomButton = (props) => {
  const {
    icon,
    rounded,
    className,
    children,
    ...rest
  } = props;

  return (
    <Button
      raised
      icon={icon}
      className={cx({
        'custom-button': true,
        'm-bt': true,
        'round-button': rounded,
      }, className)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      { children }
    </Button>
  );
};

CustomButton.defaultProps = {
  icon: null,
  rounded: false,
  className: '',
  children: null,
};

CustomButton.propTypes = {
  icon: PropTypes.string,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default CustomButton;
