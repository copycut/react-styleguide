import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Alert from '@styleguide/src/components/Alert';
import './Notification.scss';

export default class Notification extends React.PureComponent {
  static propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    onDismiss: PropTypes.func,
    style: PropTypes.object,
    id: PropTypes.string,
    isDismissible: PropTypes.bool,
    placement: PropTypes.oneOf(['top', 'bottom'])
  };

  handleOnDismiss = event => {
    if (this.props.onDismiss) {
      return this.props.onDismiss(event);
    }
  };

  render() {
    const placement = this.props.placement || 'top';
    const classNames = classnames(
      {
        rsg__notification: true,
        'rsg__notification--active': this.props.isActive,
        [`rsg__notification--${placement}`]: placement
      },
      this.props.className
    );

    return (
      <Alert
        {...this.props}
        className={classNames}
        iconColor={this.props.iconColor}
        onDismiss={this.handleOnDismiss}
        id={this.props.id}
      >
        {this.props.children}
      </Alert>
    );
  }
}
