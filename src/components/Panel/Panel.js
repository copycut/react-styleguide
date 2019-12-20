import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Title from '@styleguide/src/components/Title';
import './Panel.scss';

export default class Panel extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    footer: PropTypes.string,
    header: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string
  };

  renderHeaderTitle() {
    if (!this.props.header) {
      return;
    }

    return (
      <Title level={4} className="rsg__panel__title">
        {this.props.header}
      </Title>
    );
  }

  renderFooterTitle() {
    if (!this.props.footer) {
      return;
    }

    return (
      <Title level={4} className="rsg__panel__footer">
        {this.props.footer}
      </Title>
    );
  }

  render() {
    const classNames = classnames(
      {
        rsg__panel: true,
        [`rsg__panel--${this.props.color}`]: this.props.color,
        [`rsg__panel__title--${this.props.color}`]: this.props.color
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        {this.renderHeaderTitle()}
        <div className="rsg__panel__content">{this.props.children}</div>
        {this.renderFooterTitle()}
      </div>
    );
  }
}
