import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import castArray from 'lodash/castArray';
import Tab from '@styleguide/src/components/Tab';
import Button from '@styleguide/src/components/Button';
import './Tabs.scss';

export default class Tabs extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isBlock: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    style: PropTypes.object,
    tabActive: PropTypes.number,
    id: PropTypes.string
  };

  isActive = index => this.props.tabActive === index;

  renderTabButton = (child, index) => {
    if (!child) {
      return;
    }

    return (
      <Button
        className="rsg__tab__button"
        isActive={this.isActive(index)}
        key={`tab-${index}`}
        isDisabled={child.props.isDisabled}
        onClick={event => this.handleClick(index, event)}
        isBlock={this.props.isBlock}
        title={child.props.title}
      >
        {child.props.title}
      </Button>
    );
  };

  renderTabContent = (child, index) => {
    if (!child) {
      return;
    }

    return (
      <Tab
        className={child.props.className}
        isActive={this.isActive(index)}
        key={index}
        style={child.props.style}
      >
        {child.props.children}
      </Tab>
    );
  };

  handleClick = (tab, event) => {
    if (this.props.onClick) {
      this.props.onClick(tab, event);
    }

    if (this.props.onChange) {
      this.props.onChange(tab, event);
    }
  };

  render() {
    const children = castArray(this.props.children);
    const classNames = classnames(
      {
        rsg__tab: true,
        'rsg__tab--block': this.props.isBlock,
        [`rsg__tab--block--${children.length}`]: children.length
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        {children.map(this.renderTabButton)}
        {children.map(this.renderTabContent)}
      </div>
    );
  }
}
