import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import some from 'lodash/some';
import isFunction from 'lodash/isFunction';
import castArray from 'lodash/castArray';
import has from 'lodash/has';
import Button from '@styleguide/src/components/Button';
import Menu from '@styleguide/src/components/Menu';
import Icon from '@styleguide/src/elements/Icon';
import MenuItem from '@styleguide/src/components/MenuItem';
import { SIZES } from '@styleguide/src/constants/sizes';
import './Dropdown.scss';

export default class Dropdown extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    customButton: PropTypes.node,
    isBlock: PropTypes.bool,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    isDisabled: PropTypes.bool,
    isError: PropTypes.bool,
    isKeptOpen: PropTypes.bool,
    isOpen: PropTypes.bool,
    label: PropTypes.node,
    menuPosition: PropTypes.oneOf(['left', 'center', 'right']),
    openTop: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    search: PropTypes.node,
    size: PropTypes.oneOf(SIZES),
    style: PropTypes.object,
    title: PropTypes.string,
    id: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string)
  };

  state = {
    isOpen: false,
    isPristine: true
  };

  componentDidMount() {
    this.setState({ isOpen: get(this.props, 'isOpen', false) });

    if (
      typeof window !== 'undefined' &&
      isFunction(document.addEventListener)
    ) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }

  componentWillUnmount() {
    if (
      typeof window !== 'undefined' &&
      has(window, 'document', 'removeEventListener')
    ) {
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }

  containsNode(node, targetNode) {
    if (node === targetNode) {
      return true;
    }
    return some(node.children, child => {
      return this.containsNode(child, targetNode);
    });
  }

  handleClickOutside = event => {
    if (!this.containsNode(this.node, event.target)) {
      this.setState({
        isOpen: false
      });
    }
  };

  toggleDropdown = event => {
    if (this.props.isDisabled) {
      return;
    }

    this.setState({
      isOpen: !this.state.isOpen,
      isPristine: false
    });

    if (this.props.onClick) {
      return this.props.onClick(event);
    }
  };

  handleKeyDown = event => {
    const key = event.which || event.charCode;
    const ESC = 27;

    if (key === ESC) {
      event && event.preventDefault();
      if (this.state.isOpen) {
        this.toggleDropdown(event);
      }
    }
  };

  renderMenuItem(item, index) {
    if (!item) {
      return;
    }

    let tabIndex = get(item, 'props.tabIndex', 0);

    if (get(item, 'props.isHeader')) {
      tabIndex = 1;
    }

    return React.cloneElement(item, {
      ...item.props,
      key: index,
      tabIndex,
      onClick: event => {
        if (get(item, 'props.onClick')) {
          item.props.onClick(event);
        }

        if (!get(item, 'props.isHeader') && !this.props.isKeptOpen) {
          this.toggleDropdown();
        }
      }
    });
  }

  handleChange = (index, event) => {
    if (!this.props.onChange) {
      return;
    }

    this.props.onChange(index, event);
  };

  renderChildren() {
    if (
      typeof this.props.children === 'undefined' &&
      typeof this.props.options === 'undefined'
    ) {
      return;
    }

    if (this.props.options) {
      return castArray(this.props.options).map((option, index) => (
        <MenuItem
          key={option}
          onClick={event => this.handleChange(index, event)}
        >
          {option}
        </MenuItem>
      ));
    }

    return castArray(this.props.children).map((item, index) =>
      this.renderMenuItem(item, index)
    );
  }

  renderButton() {
    if (this.props.customButton) {
      return React.cloneElement(this.props.customButton, {
        onClick: event => {
          if (get(this.props.customButton, 'props.onClick')) {
            this.props.customButton.props.onClick(event);
          }

          this.toggleDropdown(event);
        }
      });
    }

    const chevron = (
      <Icon
        className="rsg__dropdown__icon"
        icon="chevron-down"
        size={this.props.size}
      />
    );

    let dropdownIcon = null;
    if (this.props.icon) {
      dropdownIcon = (
        <Icon
          className="rsg__dropdown__labelIcon"
          icon={this.props.icon}
          color={this.props.iconColor}
          size={this.props.size}
        />
      );
    }

    return (
      <Button
        className="rsg__dropdown__button"
        color={this.props.color}
        isActive={this.state.isOpen}
        isBlock={this.props.isBlock}
        isDisabled={this.props.isDisabled}
        onClick={this.toggleDropdown}
        size={this.props.size}
        title={this.props.title}
      >
        {dropdownIcon}
        <div className="rsg__dropdown__label">{this.props.label}</div>
        {chevron}
      </Button>
    );
  }

  renderSearch() {
    if (this.props.search) {
      return this.props.search;
    }
  }

  assignNodeRef(node) {
    this.node = node;
  }

  render() {
    const classNames = classnames(
      'rsg__dropdown',
      {
        'rsg__dropdown--touched': !this.state.isPristine,
        'rsg__dropdown--block': this.props.isBlock,
        'rsg__dropdown--open': this.state.isOpen,
        [`rsg__dropdown--${this.props.color}`]: this.props.color,
        [`rsg__dropdown--${this.props.size}`]: this.props.size,
        [`rsg__dropdown--${this.props.menuPosition}`]: this.props.menuPosition,
        'rsg__dropdown--top': this.props.openTop,
        'rsg__dropdown--withSearch': this.props.search,
        'rsg__dropdown--error': this.props.isError
      },
      this.props.className
    );

    return (
      <div
        ref={node => this.assignNodeRef(node)}
        className={classNames}
        style={this.props.style}
        id={this.props.id}
        onKeyDown={this.handleKeyDown}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        tabIndex="0"
      >
        {this.renderButton()}
        <div className="rsg__dropdown__wrapper">
          {this.renderSearch()}
          <Menu className="rsg__dropdown__menu">{this.renderChildren()}</Menu>
        </div>
      </div>
    );
  }
}
