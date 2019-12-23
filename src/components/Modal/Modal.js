import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Backdrop from '@styleguide/src/components/Backdrop';
import Button from '@styleguide/src/components/Button';
import Title from '@styleguide/src/components/Title';
import './Modal.scss';

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hasBackdrop: PropTypes.bool,
    isDismissible: PropTypes.bool,
    isOpen: PropTypes.bool,
    isReverse: PropTypes.bool,
    footer: PropTypes.element,
    footerDirection: PropTypes.oneOf(['left', 'center', 'right']),
    onDismiss: PropTypes.func,
    style: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    titleDirection: PropTypes.oneOf(['left', 'center', 'right']),
    titleLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    width: PropTypes.oneOf([
      'extraSmall',
      'small',
      'normal',
      'large',
      'extraLarge',
      'max'
    ]),
    id: PropTypes.string
  };

  state = {
    isOpen: false,
    isPristine: true
  };

  componentDidMount() {
    if (typeof this.props.isOpen !== 'undefined') {
      this.setState({ isOpen: this.props.isOpen });
    }
  }

  close = event => {
    if (!this.props.isDismissible) {
      return;
    }

    this.setState({
      isOpen: false,
      isPristine: false
    });

    if (this.props.onDismiss) {
      return this.props.onDismiss(event);
    }
  };

  renderTitle() {
    if (!this.props.title) {
      return;
    }

    const titleClassName = classnames({
      rsg__modal__title: true,
      [`rsg__modal__title--${this.props.titleDirection}`]: this.props
        .titleDirection
    });

    return (
      <Title level={this.props.titleLevel || 4} className={titleClassName}>
        {this.props.title}
      </Title>
    );
  }

  renderClose() {
    if (!this.props.isDismissible) {
      return;
    }

    return (
      <Button
        className="rsg__modal__close"
        color="invisible"
        icon="cross"
        onClick={this.close}
      />
    );
  }

  renderBackDrop() {
    if (!this.props.hasBackdrop) {
      return;
    }

    return <Backdrop isOpen={this.state.isOpen} onClick={this.close} />;
  }

  renderFooter() {
    if (!this.props.footer && !React.isValidElement(this.props.footer)) {
      return;
    }

    const footerClassName = classnames({
      rsg__modal__footer: true,
      [`rsg__modal__footer--${this.props.footerDirection}`]: this.props
        .footerDirection
    });

    return <div className={footerClassName}>{this.props.footer}</div>;
  }

  render() {
    const classNames = classnames(
      {
        rsg__modal: true,
        'rsg__modal--open': this.state.isOpen,
        'rsg__modal--dismissible': this.props.isDismissible,
        'rsg__modal--reverse': this.props.isReverse,
        'rsg__modal--touched': !this.state.isPristine,
        [`rsg__modal--${this.props.width}`]: this.props.width
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        <div className="rsg__modal__box">
          {this.renderClose()}
          {this.renderTitle()}
          <div className="rsg__modal__content">{this.props.children}</div>
          {this.renderFooter()}
        </div>
        {this.renderBackDrop()}
      </div>
    );
  }
}
