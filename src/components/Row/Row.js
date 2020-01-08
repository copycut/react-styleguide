import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Row.scss';

export default class Row extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string
  };

  render() {
    const classNames = classnames('rsg__row', this.props.className);

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}
