import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Text.scss';
import { SIZES } from '@styleguide/src/constants/sizes';

export default class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    isHTML: PropTypes.string,
    size: PropTypes.oneOf(SIZES),
    style: PropTypes.object,
    text: PropTypes.string,
    id: PropTypes.string
  };

  renderContent() {
    if (this.props.isHTML) {
      return <span dangerouslySetInnerHTML={{ __html: this.props.isHTML }} />;
    }

    return this.props.text || this.props.children;
  }

  render() {
    const classNames = classnames(
      {
        rsg__text: true,
        [`rsg__text--${this.props.color}`]: this.props.color,
        [`rsg__text--${this.props.size}`]: this.props.size
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        {this.renderContent()}
      </div>
    );
  }
}
