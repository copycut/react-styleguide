import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Alert from '@styleguide/src/components/Alert';
import './Notification.scss';

export default class Notification extends Component {
  static propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    id: PropTypes.string,
    isDismissible: PropTypes.bool,
    placement: PropTypes.oneOf(['top', 'bottom'])
  };

  state = {
    isActive: false
  };

  componentDidMount() {
    this.setState({ isActive: this.props.isActive || false });
  }

  handleOnClick = event => {
    this.setState({ isActive: false });

    if (this.props.onClick) {
      return this.props.onClick(event);
    }
  };

  render() {
    const classNames = classnames(
      {
        rsg__notification: true,
        'rsg__notification--active': this.state.isActive,
        [`rsg__notification--${this.props.placement}`]: this.props.placement
      },
      this.props.className
    );

    return (
      <Alert
        {...this.props}
        className={classNames}
        iconColor={this.props.iconColor}
        onClick={this.handleOnClick}
        id={this.props.id}
      >
        {this.props.children}
      </Alert>
    );
  }
}
