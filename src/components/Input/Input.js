import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import Text from '@styleguide/src/components/Text';
import { SIZES } from '@styleguide/src/constants/sizes';
import './Input.scss';

export default class Input extends Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    errorMessage: PropTypes.string,
    id: PropTypes.string,
    isBlock: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isError: PropTypes.bool,
    isRounded: PropTypes.bool,
    isSquared: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(SIZES),
    style: PropTypes.object,
    title: PropTypes.string,
    type: PropTypes.oneOf([
      'text',
      'color',
      'date',
      'email',
      'time',
      'number',
      'password',
      'textarea'
    ]),
    value: PropTypes.string,
    slot: PropTypes.node
  };

  renderErrorMessage() {
    if (!this.props.isError) {
      return;
    }

    return (
      <Text size="small" className="rsg__input__errorMessage" color="danger">
        {this.props.errorMessage}
      </Text>
    );
  }

  render() {
    const type = this.props.type || 'text';
    const classNames = classnames(
      {
        rsg__input: true,
        'rsg__input--block': this.props.isBlock,
        'rsg__input--disabled': this.props.isDisabled,
        'rsg__input--rounded': this.props.isRounded,
        'rsg__input--squared': this.props.isSquared,
        'rsg__input--error': this.props.isError,
        [`rsg__input--${this.props.size}`]: this.props.size,
        [`rsg__input--type--${this.props.type}`]: type
      },
      this.props.className
    );

    const wrapperClassName = classnames({
      rsg__input__wrapper: true,
      'rsg__input__wrapper--block': this.props.isBlock,
      [`rsg__input__wrapper--${type}`]: type
    });

    const extraProps = omit(
      this.props,
      'className',
      'errorMessage',
      'isBlock',
      'isDisabled',
      'isError',
      'isRounded',
      'isSquared',
      'size',
      'style'
    );

    if (type === 'textarea') {
      return (
        <div className={wrapperClassName} style={this.props.style}>
          {this.renderErrorMessage()}
          <textarea
            {...extraProps}
            className={classNames}
            disabled={this.props.isDisabled}
            id={this.props.id}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            type={type}
            title={this.props.title}
            value={this.props.value}
            defaultValue={this.props.defaultValue}
          />
        </div>
      );
    }

    return (
      <React.Fragment>
        {this.renderErrorMessage()}
        <div className={wrapperClassName} style={this.props.style}>
          <input
            {...extraProps}
            className={classNames}
            disabled={this.props.isDisabled}
            id={this.props.id}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            type={type}
            title={this.props.title}
            value={this.props.value}
            defaultValue={this.props.defaultValue}
          />
          {this.props.slot}
        </div>
      </React.Fragment>
    );
  }
}
