import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@styleguide/src/components/Button';
import Title from '@styleguide/src/components/Title';
import './Popover.scss';

export default class Popover extends Component {
  static propTypes = {
    isActive: PropTypes.bool,
    buttonText: PropTypes.string,
    buttonColor: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    content: PropTypes.node,
    isDisabled: PropTypes.bool,
    isDismissible: PropTypes.bool,
    onClick: PropTypes.func,
    isReverse: PropTypes.bool,
    style: PropTypes.object,
    title: PropTypes.string,
    id: PropTypes.string
  };

  state = {
    isActive: false
  };

  componentDidMount() {
    if (this.props.isActive && !this.props.isDisabled) {
      this.setState({ isActive: true });
    }
  }

  close = () => this.setState({ isActive: false });

  toggle = event => {
    if (this.props.isDisabled) {
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(event);
    }

    this.setState({ isActive: !this.state.isActive });
  };

  renderTitle() {
    if (!this.props.title) {
      return;
    }

    return (
      <Title className="rsg__popover__title" level={6}>
        {this.props.title}
      </Title>
    );
  }

  renderContent() {
    if (!this.props.content) {
      return;
    }

    return <div className="rsg__popover__content">{this.props.content}</div>;
  }

  renderButton() {
    if (!this.props.buttonText) {
      return;
    }

    return (
      <Button
        isBlock
        className="rsg__popover__button"
        color={this.props.buttonColor}
        onClick={this.toggle}
        size="small"
      >
        {this.props.buttonText}
      </Button>
    );
  }

  renderCloseButton() {
    if (!this.props.isDismissible) {
      return;
    }

    return (
      <Button
        className="rsg__popover__close"
        color="invisible"
        icon="cross"
        onClick={this.close}
        size="small"
      />
    );
  }

  render() {
    const classNames = classnames(
      {
        rsg__popover: true,
        'rsg__popover--active': this.state.isActive,
        'rsg__popover--dismissible': this.props.isDismissible,
        'rsg__popover--reverse': this.props.isReverse
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        <div className="rsg__popover__trigger" onClick={this.toggle}>
          {this.props.children}
        </div>

        <div className="rsg__popover__box">
          {this.renderCloseButton()}
          {this.renderTitle()}
          <div className="rsg__popover__inner">
            {this.renderContent()}
            {this.renderButton()}
          </div>
        </div>
      </div>
    );
  }
}
