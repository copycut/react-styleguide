import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from '@styleguide/src/components/Link';
import './Thumbnail.scss';

export default class Thumbnail extends Component {
  static propTypes = {
    alt: PropTypes.string,
    isCircle: PropTypes.bool,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    href: PropTypes.string,
    isNoBorder: PropTypes.bool,
    onClick: PropTypes.func,
    isRounded: PropTypes.bool,
    isSquare: PropTypes.bool,
    src: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
    id: PropTypes.string
  };

  static defaultProps = {
    alt: ''
  };

  render() {
    if (!this.props.src) {
      return null;
    }

    const classNames = classnames(
      {
        rsg__thumbnail: true,
        'rsg__thumbnail--circle': this.props.isCircle,
        'rsg__thumbnail--disabled': this.props.isDisabled,
        'rsg__thumbnail--rounded': this.props.isRounded,
        'rsg__thumbnail--noBorder': this.props.isNoBorder,
        'rsg__thumbnail--square': this.props.isSquare,
        rsg__thumbnail__link: this.props.href
      },
      this.props.className
    );

    if (this.props.href || this.props.onClick) {
      return (
        <Link
          onClick={this.props.onClick}
          className={classNames}
          style={this.props.style}
          href={this.props.href}
          title={this.props.title}
          isDisabled={this.props.isDisabled}
          id={this.props.id}
        >
          <img
            className="rsg__thumbnail__inner-img"
            src={this.props.src}
            alt={this.props.alt}
          />
        </Link>
      );
    }

    return (
      <img
        className={classNames}
        style={this.props.style}
        src={this.props.src}
        alt={this.props.alt}
        id={this.props.id}
      />
    );
  }
}
