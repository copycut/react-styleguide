import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@styleguide/src/elements/Icon';
import Button from '@styleguide/src/components/Button';
import './Alert.scss';

export default class Alert extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    isDismissible: PropTypes.bool,
    onDismiss: PropTypes.func,
    style: PropTypes.object,
    id: PropTypes.string
  };

  renderCloseButton() {
    if (!this.props.isDismissible) {
      return;
    }

    return (
      <Button
        className="rsg__alert__close"
        color="invisible"
        onClick={this.props.onDismiss}
      >
        <Icon icon="cross" />
      </Button>
    );
  }

  renderIcon() {
    if (!this.props.icon) {
      return;
    }

    return (
      <Icon
        className="rsg__alert__icon"
        color={this.props.iconColor}
        icon={this.props.icon}
      />
    );
  }

  render() {
    const classNames = classnames(
      'rsg__alert',
      {
        [`rsg__alert--${this.props.color}`]: this.props.color,
        'rsg__alert--withIcon': this.props.icon,
        'rsg__alert--dismissible': this.props.isDismissible
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        {this.renderIcon()}
        <div className="rsg__alert__inner">{this.props.children}</div>
        {this.renderCloseButton()}
      </div>
    );
  }
}
