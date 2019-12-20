import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from '@styleguide/src/components/Link';
import './MenuItem.scss';

export default class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isHeader: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    tabIndex: PropTypes.number,
    id: PropTypes.string
  };

  handleKeyDown = event => {
    event.preventDefault();
    const key = event.which || event.charCode;
    const ENTER = 13;
    const SPACE = 32;

    if (this.props.isDisabled) {
      return;
    }

    if ((key === ENTER || key === SPACE) && this.props.onClick) {
      return this.props.onClick(event);
    }
  };

  handleClick = event => {
    event.preventDefault();

    if (!this.props.isDisabled && this.props.onClick) {
      return this.props.onClick(event);
    }
  };

  render() {
    const classNames = classnames(
      {
        rsg__menuItem: true,
        'rsg__menuItem--disabled': this.props.isDisabled,
        'rsg__menuItem--active': this.props.isActive,
        'rsg__menuItem--header': this.props.isHeader
      },
      this.props.className
    );

    if (this.props.href) {
      return (
        <Link
          className={classNames}
          isDisabled={this.props.isDisabled}
          href={this.props.href}
          onClick={this.handleClick}
          style={this.props.style}
        >
          {this.props.children}
        </Link>
      );
    }

    return (
      <div
        tabIndex={this.props.tabIndex}
        className={classNames}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        style={this.props.style}
        id={this.props.id}
      >
        {this.props.children}
      </div>
    );
  }
}
