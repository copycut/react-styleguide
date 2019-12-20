import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from '@styleguide/src/components/Link';
import './ListGroupItem.scss';

export default class ListGroupItem extends Component {
  static propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    heading: PropTypes.string,
    href: PropTypes.string,
    style: PropTypes.object,
    target: PropTypes.string,
    onClick: PropTypes.func,
    id: PropTypes.string
  };

  handleClick = event => {
    if (this.props.onClick) {
      return this.props.onClick(event);
    }
  };

  renderHeading() {
    if (!this.props.heading) {
      return;
    }

    return (
      <span className="rsg__listGroupItem__heading">{this.props.heading}</span>
    );
  }

  renderContent() {
    if (!this.props.href) {
      return <span>{this.props.children}</span>;
    }

    return (
      <Link
        href={this.props.href}
        isDisabled={this.props.isDisabled}
        className="rsg__listGroupItem__link"
        onClick={this.props.onClick}
        target={this.props.target}
      >
        {this.props.children}
      </Link>
    );
  }

  render() {
    const classNames = classnames(
      {
        rsg__listGroupItem: true,
        'rsg__listGroupItem--active': this.props.isActive,
        'rsg__listGroupItem--disabled': this.props.isDisabled,
        'rsg__listGroupItem--clickable': this.props.onClick
      },
      this.props.className
    );

    return (
      <li
        className={classNames}
        style={this.props.style}
        onClick={this.handleClick}
        id={this.props.id}
      >
        {this.renderHeading()}
        {this.renderContent()}
      </li>
    );
  }
}
