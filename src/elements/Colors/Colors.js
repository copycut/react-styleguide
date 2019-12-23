import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Colors.scss';

export default class Colors extends Component {
  static propTypes = {
    /** use theses color references in every components. */
    color: PropTypes.string,
    id: PropTypes.string
  };

  render() {
    const classNames = classnames({
      color: true,
      [`color--${this.props.color}`]: this.props.color
    });

    const colorValues = {
      primarySmoke: '#f4f9fd',
      primaryLight: '#66b1e4',
      primary: '#3498db',
      primaryDark: '#2980b9',
      successSmoke: '#f4fcf7',
      successLight: '#62d894',
      success: '#2ecc71',
      successDark: '#27ae60',
      warningSmoke: '#fefcf3',
      warningLight: '#f4d24b',
      warning: '#f1c40f',
      warningDark: '#f39c12',
      dangerSmoke: '#fdf6f5',
      dangerLight: '#ed786c',
      danger: '#e74c3c',
      dangerDark: '#c0392b',
      infoSmoke: '#f3fbfa',
      infoLight: '#53ccb4',
      info: '#1abc9c',
      infoDark: '#16a085',
      extraSmoke: '#faf6fb',
      extraLight: '#b482c8',
      extra: '#9b59b6',
      extraDark: '#8e44ad',
      white: '#ffffff',
      greySmoke: '#ecf0f1',
      grey: '#95a5a6',
      greyLight: '#bdc3c7',
      greyMedium: '#7f8c8d',
      greyDark: '#34495e',
      greyDarker: '#2c3e50',
      black: '#000000'
    };

    return (
      <div className={classNames} id={this.props.id}>
        <span className="color--text">
          <span className="color--name">{this.props.color}</span>
          <span className="color--hexa">{colorValues[this.props.color]}</span>
        </span>
      </div>
    );
  }
}
