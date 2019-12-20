import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { OPTIONS } from '@styleguide/src/constants/classnames';
import Button from '@styleguide/src/components/Button';
import Dropdown from '@styleguide/src/components/Dropdown';
import './Options.scss';

export default class Options extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isHorizontal: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    id: PropTypes.string
  };

  handleClick = event => {
    const { onClick } = this.props;

    if (onClick) {
      return onClick(event);
    }
  };

  renderButton() {
    return (
      <Button
        color="invisible"
        icon="options"
        iconColor="grey"
        onClick={this.handleClick}
      />
    );
  }

  render() {
    const { children, className, style, id, isHorizontal } = this.props;
    const classNames = classnames(
      OPTIONS,
      { [`${OPTIONS}--horizontal`]: isHorizontal },
      className
    );

    return (
      <div className={classNames} style={style} id={id}>
        <Dropdown customButton={this.renderButton()} menuPosition="right">
          {children}
        </Dropdown>
      </div>
    );
  }
}
