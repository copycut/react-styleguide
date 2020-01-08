import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './ListGroup.scss';

export default class ListGroup extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string
  };

  render() {
    const classNames = classnames('rsg__listGroup', this.props.className);

    return (
      <ul className={classNames} style={this.props.style} id={this.props.id}>
        {this.props.children}
      </ul>
    );
  }
}
