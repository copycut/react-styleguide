import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Backdrop.scss';

export default class Backdrop extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    id: PropTypes.string
  };

  state = {
    isPristine: true
  };

  static defaultProps = {
    isOpen: false
  };

  handleClick = event => {
    if (this.props.onClick) {
      return this.props.onClick(!this.props.isOpen, event);
    }
  };

  render() {
    const classNames = classnames(
      {
        rsg__backdrop: true,
        'rsg__backdrop--open': this.props.isOpen,
        'rsg__backdrop--touched': !this.state.isPristine
      },
      this.props.className
    );

    return (
      <div
        className={classNames}
        onClick={this.handleClick}
        id={this.props.id}
        style={this.props.style}
      />
    );
  }
}
