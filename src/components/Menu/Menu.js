import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Menu.scss';

export default class Menu extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isInverse: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    id: PropTypes.string
  };

  render() {
    const classNames = classnames(
      {
        rsg__menu: true,
        'rsg__menu--inverse': this.props.isInverse
      },
      this.props.className
    );

    return (
      <div
        className={classNames}
        style={this.props.style}
        onClick={this.props.onClick}
        id={this.props.id}
      >
        {this.props.children}
      </div>
    );
  }
}
