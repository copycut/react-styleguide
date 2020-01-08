import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SIZES } from '@styleguide/src/constants/sizes';
import './Icon.scss';

export default class Icon extends React.PureComponent {
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
    if (!this.props.icon && !this.props.path) {
      return null;
    }

    let iconClassName = this.props.icon;
    let iconSource = this.props.icon;

    if (this.props.icon && this.props.icon[0] === '<') {
      iconClassName = false;
      iconSource = this.props.icon;
    } else if (this.props.icon) {
      iconSource = require(`../../icons/${this.props.icon}.svg`);
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
