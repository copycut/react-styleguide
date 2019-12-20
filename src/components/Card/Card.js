import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Card.scss';

export default class Card extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string
  };

  render() {
    const classNames = classnames('rsg__card', this.props.className);

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}
