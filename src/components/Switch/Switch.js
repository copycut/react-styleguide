import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SIZES } from '@styleguide/src/constants/sizes';
import './Switch.scss';

export default class Switch extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(SIZES),
    style: PropTypes.object,
    id: PropTypes.string
  };

  toggleSwitch = () => {
    const isActive = this.props.isActive || false;

    if (this.props.isDisabled) {
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(!isActive);
    }

    if (this.props.onChange) {
      this.props.onChange(!isActive);
    }
  };

  render() {
    const classNames = classnames(
      {
        rsg__switch: true,
        'rsg__switch--disabled': this.props.isDisabled,
        'rsg__switch--active': this.props.isActive,
        [`rsg__switch--${this.props.color}`]: this.props.color,
        [`rsg__switch--${this.props.size}`]: this.props.size
      },
      this.props.className
    );

    return (
      <span
        className={classNames}
        style={this.props.style}
        onClick={this.toggleSwitch}
        id={this.props.id}
      >
        <span className="rsg__switch__toggle" />
      </span>
    );
  }
}
