import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Note.scss';

export default class Note extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string
  };

  render() {
    const classNames = classnames('rsg__note', this.props.className);

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}
