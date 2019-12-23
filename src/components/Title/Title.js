import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import './Title.scss';

const possibleLevels = [1, 2, 3, 4, 5, 6];

export default class Title extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    level: PropTypes.oneOf(possibleLevels),
    style: PropTypes.object,
    id: PropTypes.string
  };

  render() {
    const isTitleLevel = possibleLevels.indexOf(this.props.level) !== -1;
    const classNames = classnames(
      {
        rsg__title: true,
        [`rsg__title--level-${this.props.level}`]: this.props.level
      },
      this.props.className
    );

    return React.createElement(
      isTitleLevel ? `h${this.props.level}` : 'div',
      {
        ...omit(this.props, 'level', 'className', 'children'),
        className: classNames
      },
      this.props.children
    );
  }
}
