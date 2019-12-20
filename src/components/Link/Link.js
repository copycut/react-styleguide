import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Link.scss';

export default class Link extends Component {
  static propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    target: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
    isDisabled: PropTypes.bool
  };

  handleClick = event => {
    if (!this.props.isDisabled && this.props.onClick) {
      return this.props.onClick(event);
    }

    return event;
  };

  render() {
    const classNames = classnames(
      {
        rsg__link: true,
        'rsg__link--disabled': this.props.isDisabled,
        'rsg__link--active': this.props.isActive
      },
      this.props.className
    );

    return (
      <a
        href={this.props.href}
        className={classNames}
        title={this.props.title}
        target={this.props.target}
        style={this.props.style}
        onClick={this.handleClick}
        id={this.props.id}
      >
        {this.props.children}
      </a>
    );
  }
}
