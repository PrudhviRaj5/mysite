/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Elevation } from '@rmwc/elevation';

import './VanillaPaper.scss';

class VanillaPaper extends Component {
  constructor(props) {
    super(props);
    const elevation = props.elevationOut;
    this.state = {
      elevation,
    };
  }

  updateElevationMouseOver = () => {
    const { elevationIn } = this.props;
    this.setState({
      elevation: elevationIn,
    });
  }

  updateElevationMouseOut = () => {
    const { elevationOut } = this.props;
    this.setState({
      elevation: elevationOut,
    });
  }

  render() {
    const {
      style,
      className,
      rounded,
      ...rest
    } = this.props;

    const passProps = {
      style,
      className: cx({
        'zt-vanilla-paper': true,
        '--rounded': rounded,
      }, className),
    };

    const { children } = this.props;
    const { elevation } = this.state;

    return (
      <Elevation
        z={elevation}
        transition
        onMouseOver={() => this.updateElevationMouseOver()}
        onFocus={() => this.updateElevationMouseOver()}
        onMouseOut={() => this.updateElevationMouseOut()}
        onBlur={() => this.updateElevationMouseOut()}
        {...passProps}
        {...rest}
      >
        {children}
      </Elevation>
    );
  }
}

VanillaPaper.defaultProps = {
  style: {},
  className: '',
  rounded: false,
  elevationIn: 4,
  elevationOut: 1,
};

VanillaPaper.propTypes = {
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  rounded: PropTypes.bool,
  children: PropTypes.any.isRequired,
  elevationIn: PropTypes.number,
  elevationOut: PropTypes.number,
};

export default VanillaPaper;
