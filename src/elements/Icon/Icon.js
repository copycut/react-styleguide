import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SIZES } from '@styleguide/src/constants/sizes';
import './Icon.scss';

export default class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    /** set the icon size.
    extraSmall: 10px,
    small: 12px,
    normal: 16px,
    large: 20px,
    extraLarge: 22px.
    Default: normal */
    size: PropTypes.oneOf(SIZES),
    style: PropTypes.object,
    path: PropTypes.string,
    id: PropTypes.string
  };

  renderIcon = iconSource => {
    if (iconSource) {
      return (
        <span
          style={this.props.style}
          dangerouslySetInnerHTML={{
            __html: iconSource
          }}
        />
      );
    }

    return (
      <svg viewBox="0 0 25 25">
        <path d={this.props.path} fillRule="evenodd" />
      </svg>
    );
  };

  render() {
    const { icon } = this.props;

    if (!icon && !this.props.path) {
      return null;
    }

    let iconClassName = icon;
    let iconSource = icon;

    if (icon && icon[0] === '<') {
      iconClassName = false;
      iconSource = icon;
    } else if (icon) {
      iconSource = require(`../../icons/${icon}.svg`);
    } else {
      iconClassName = false;
    }

    const classNames = classnames(
      {
        rsg__icon: true,
        [`rsg__icon--${iconClassName}`]: iconClassName,
        [`rsg__icon--${this.props.color}`]: this.props.color,
        [`rsg__icon--${this.props.size}`]: this.props.size
      },
      this.props.className
    );

    return (
      <span className={classNames} id={this.props.id} style={this.props.style}>
        {this.renderIcon(iconSource)}
      </span>
    );
  }
}
