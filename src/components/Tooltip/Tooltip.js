import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Tooltip.scss';

export default class Tooltip extends Component {
  static propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    isDisabled: PropTypes.bool,
    style: PropTypes.object,
    text: PropTypes.node,
    id: PropTypes.string,
    placement: PropTypes.oneOf(['bottom', 'left', 'right', 'top'])
  };

  render() {
    if (!this.props.text) {
      return this.props.children;
    }

    const classNames = classnames(
      {
        rsg__tooltip: true,
        'rsg__tooltip--disabled': this.props.isDisabled,
        'rsg__tooltip--active': this.props.isActive && !this.props.isDisabled,
        [`rsg__tooltip--${this.props.color}`]: this.props.color,
        [`rsg__tooltip--${this.props.placement}`]: this.props.placement
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        {this.props.children}
        <span className="rsg__tooltip__bubble">
          <span className="rsg__tooltip__text">{this.props.text}</span>
          <span className="rsg__tooltip__arrow" />
        </span>
      </div>
    );
  }
}
