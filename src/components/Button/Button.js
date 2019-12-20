import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import { SIZES } from '@styleguide/src/constants/sizes';
import Icon from '@styleguide/src/elements/Icon';
import './Button.scss';

export default class Button extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    isActive: PropTypes.bool,
    isBlock: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isRounded: PropTypes.bool,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    size: PropTypes.oneOf(SIZES),
    style: PropTypes.object,
    target: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string
  };

  handleClick = event => {
    if (!this.props.isDisabled && this.props.onClick) {
      return this.props.onClick(event);
    }
  };

  handleFocus = event => {
    if (!this.props.isDisabled && this.props.onFocus) {
      return this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    if (!this.props.isDisabled && this.props.onBlur) {
      return this.props.onBlur(event);
    }
  };

  renderButtonLabel() {
    if (!this.props.children) {
      return;
    }

    return <span className="rsg__button__label">{this.props.children}</span>;
  }

  renderButtonContent() {
    if (!this.props.icon) {
      return <span className="rsg__button__inner">{this.props.children}</span>;
    }

    return (
      <span className="rsg__button__inner">
        <Icon
          icon={this.props.icon}
          size={this.props.size}
          color={this.props.iconColor}
          className={classnames({ rsg__button__icon: !this.props.iconColor })}
        />
        {this.renderButtonLabel()}
      </span>
    );
  }

  render() {
    const classNames = classnames(
      'rsg__button',
      {
        [`rsg__button--${this.props.color}`]: this.props.color,
        [`rsg__button--${this.props.size}`]: this.props.size,
        'rsg__button--active': this.props.isActive,
        'rsg__button--block': this.props.isBlock,
        'rsg__button--disabled': this.props.isDisabled,
        'rsg__button--rounded': this.props.isRounded
      },
      this.props.className
    );
    const extraProps = omit(
      this.props,
      'icon',
      'iconColor',
      'isDisabled',
      'isActive',
      'isRounded',
      'isBlock'
    );

    if (this.props.href) {
      return (
        <a
          {...omit(extraProps, 'type')}
          className={classnames(classNames, 'rsg__button__anchor')}
          onClick={this.handleClick}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        >
          {this.renderButtonContent()}
        </a>
      );
    }

    return (
      <button
        {...extraProps}
        className={classNames}
        disabled={this.props.isDisabled}
        onClick={this.handleClick}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        type={this.props.type || 'button'}
      >
        {this.renderButtonContent()}
      </button>
    );
  }
}
