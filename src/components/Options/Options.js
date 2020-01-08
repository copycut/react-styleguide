import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@styleguide/src/components/Button';
import Dropdown from '@styleguide/src/components/Dropdown';
import './Options.scss';

export default class Options extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isHorizontal: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    id: PropTypes.string
  };

  handleClick = event => {
    if (this.props.onClick) {
      return this.props.onClick(event);
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
    const classNames = classnames(
      {
        rsg__options: true,
        'rsg__options--horizontal': this.props.isHorizontal
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        <Dropdown customButton={this.renderButton()} menuPosition="right">
          {this.props.children}
        </Dropdown>
      </div>
    );
  }
}
