import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Backdrop from '@styleguide/src/components/Backdrop';
import Button from '@styleguide/src/components/Button';
import Title from '@styleguide/src/components/Title';
import './Modal.scss';
import { MODAL } from '@styleguide/src/constants/classnames';

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
    const { isOpen } = this.props;
    if (isOpen !== undefined) {
      this.setState({ isOpen });
    }
  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps !== null && newProps.isOpen !== this.props.isOpen) {
  //     return this.setState({
  //       isOpen: newProps.isOpen,
  //       isPristine: false
  //     });
  //   }
  // }

  close = () => {
    const { onDismiss, isDismissible } = this.props;

    if (!isDismissible) {
      return;
    }

    this.setState({
      isOpen: false,
      isPristine: false
    });

    if (onDismiss) {
      return onDismiss();
    }
  };

  renderTitle() {
    const { title, titleDirection, titleLevel } = this.props;

    if (!title) {
      return;
    }

    const titleClassName = classnames(`${MODAL}__title`, {
      [`${MODAL}__title--${titleDirection}`]: titleDirection
    });

    return (
      <Title level={titleLevel || 4} className={titleClassName}>
        {title}
      </Title>
    );
  }

  renderClose() {
    if (!this.props.isDismissible) {
      return;
    }

    return (
      <Button
        className={`${MODAL}__close`}
        color="invisible"
        icon="cross"
        onClick={this.close}
      />
    );
  }

  renderBackDrop() {
    const { hasBackdrop } = this.props;

    if (!hasBackdrop) {
      return;
    }

    return <Backdrop isOpen={this.state.isOpen} onClick={this.close} />;
  }

  renderFooter() {
    const { footer, footerDirection } = this.props;

    if (!footer) {
      return;
    }

    const footerClassName = classnames(`${MODAL}__footer`, {
      [`${MODAL}__footer--${footerDirection}`]: footerDirection
    });

    return <div className={footerClassName}>{footer}</div>;
  }

  render() {
    const {
      children,
      className,
      isDismissible,
      isReverse,
      width,
      style,
      id
    } = this.props;
    const { isOpen, isPristine } = this.state;
    const classNames = classnames(
      MODAL,
      {
        [`${MODAL}--open`]: isOpen,
        [`${MODAL}--dismissible`]: isDismissible,
        [`${MODAL}--reverse`]: isReverse,
        [`${MODAL}--touched`]: !isPristine,
        [`${MODAL}--${width}`]: width
      },
      className
    );

    return (
      <div className={classNames} style={style} id={id}>
        <div className={`${MODAL}__box`}>
          {this.renderClose()}
          {this.renderTitle()}
          <div className={`${MODAL}__content`}>{children}</div>
          {this.renderFooter()}
        </div>
        {this.renderBackDrop()}
      </div>
    );
  }
}
