import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Checkbox.scss';

export default class Checkbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    isBlock: PropTypes.bool,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isSomeChecked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    style: PropTypes.object
  };

  handleClick = event => {
    if (this.props.isDisabled) {
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(!this.props.isChecked, event);
    }

    if (this.props.onChange) {
      this.props.onChange(!this.props.isChecked, event);
    }
  };

  renderInput() {
    return (
      <button type="button" className="rsg__checkbox__button">
        <span className="rsg__checkbox__mark rsg__checkbox__mark--one" />
        <span className="rsg__checkbox__mark rsg__checkbox__mark--two" />
      </button>
    );
  }

  renderLabelAndCheckbox() {
    if (!this.props.label) {
      return this.renderInput();
    }

    return (
      <span className="rsg__checkbox__label" title={this.props.label}>
        {this.renderInput()}
        {this.props.label}
      </span>
    );
  }

  render() {
    const classNames = classnames(
      'rsg__checkbox',
      {
        'rsg__checkbox--disabled': this.props.isDisabled,
        'rsg__checkbox--checked': this.props.isChecked,
        'rsg__checkbox--someChecked': this.props.isSomeChecked,
        'rsg__checkbox--block': this.props.isBlock
      },
      this.props.className
    );

    return (
      <span
        className={classNames}
        id={this.props.id}
        name={this.props.name}
        onClick={this.handleClick}
        style={this.props.style}
      >
        {this.renderLabelAndCheckbox()}
      </span>
    );
  }
}
