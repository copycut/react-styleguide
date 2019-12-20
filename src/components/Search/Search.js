import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SIZES } from '@styleguide/src/constants/sizes';
import Input from '@styleguide/src/components/Input';
import Icon from '@styleguide/src/elements/Icon';
import get from 'lodash/get';
import './Search.scss';

export default class Search extends Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    children: PropTypes.element,
    className: PropTypes.string,
    errorMessage: PropTypes.string,
    icon: PropTypes.string,
    isBlock: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isError: PropTypes.bool,
    isSquared: PropTypes.bool,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(SIZES),
    style: PropTypes.object,
    value: PropTypes.string,
    id: PropTypes.string
  };

  handleChange = event => {
    if (this.props.onChange) {
      return this.props.onChange(event.currentTarget.value, event);
    }
  };

  render() {
    const classNames = classnames(
      'rsg__search',
      {
        [`rsg__search--${this.props.size}`]: this.props.size,
        'rsg__search--block': this.props.isBlock,
        'rsg__search--disabled': this.props.isDisabled
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        {this.props.children}
        <Icon
          icon={get(this.props, 'icon', 'search')}
          color="greyMedium"
          className="rsg__search__icon"
          size={this.props.size}
        />
        <Input
          autoFocus={this.props.autoFocus}
          autoComplete="off"
          id={this.props.id}
          errorMessage={this.props.errorMessage}
          isBlock={this.props.isBlock}
          isDisabled={this.props.isDisabled}
          isError={this.props.isError}
          isSquared={this.props.isSquared}
          className="rsg__search__input"
          type="text"
          size={this.props.size}
          onChange={this.handleChange}
          value={this.props.value}
        />
      </div>
    );
  }
}
