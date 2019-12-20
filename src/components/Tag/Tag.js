import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import { SIZES } from '@styleguide/src/constants/sizes';
import Button from '@styleguide/src/components/Button';
import './Tag.scss';

export default class Tag extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    isDisabled: PropTypes.bool,
    isDismissible: PropTypes.bool,
    isPushLeft: PropTypes.bool,
    isPushRight: PropTypes.bool,
    isRounded: PropTypes.bool,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    size: PropTypes.oneOf(SIZES),
    style: PropTypes.object,
    id: PropTypes.string
  };

  handleClick = (event, func) => {
    const action = get(this.props, func);
    let value = event;

    if (typeof this.props.children === 'string') {
      value = this.props.children;
    }

    if (!this.props.isDisabled && action) {
      return action(value);
    }
  };

  renderButton() {
    if (!this.props.isDismissible) {
      return;
    }

    return (
      <Button
        className="rsg__tag__button"
        color="invisible"
        icon="cross"
        size="extraSmall"
        onClick={event => this.handleClick(event, 'onClose')}
      />
    );
  }

  render() {
    const classNames = classnames(
      {
        rsg__tag: true,
        [`rsg__tag--${this.props.color}`]: this.props.color,
        [`rsg__tag--${this.props.size}`]: this.props.size,
        'rsg__tag--clickable': this.props.onClick,
        'rsg__tag--pushLeft': this.props.isPushLeft,
        'rsg__tag--pushRight': this.props.isPushRight,
        'rsg__tag--rounded': this.props.isRounded,
        'rsg__tag--disabled': this.props.isDisabled
      },
      this.props.className
    );

    return (
      <div
        className={classNames}
        onClick={event => this.handleClick(event, 'onClick')}
        style={this.props.style}
        id={this.props.id}
      >
        {this.props.children}
        {this.renderButton()}
      </div>
    );
  }
}
