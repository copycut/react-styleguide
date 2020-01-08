import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Menu.scss';

export default class Menu extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    id: PropTypes.string
  };

  render() {
    const classNames = classnames('rsg__menu', this.props.className);

    return (
      <div
        className={classNames}
        style={this.props.style}
        onClick={this.props.onClick}
        id={this.props.id}
      >
        {this.props.children}
      </div>
    );
  }
}
