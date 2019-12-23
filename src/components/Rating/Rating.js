import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@styleguide/src/elements/Icon';
import { SIZES } from '@styleguide/src/constants/sizes';
import './Rating.scss';

export default class Rating extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.number,
    max: PropTypes.number,
    icon: PropTypes.string,
    size: PropTypes.oneOf(SIZES),
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    onRating: PropTypes.func,
    isDisabled: PropTypes.bool,
    id: PropTypes.string
  };

  static defaultProps = {
    max: 5,
    icon: 'star',
    size: 'normal',
    activeColor: 'warning',
    inactiveColor: 'grey'
  };

  state = {
    isActive: false
  };

  onChange = event => {
    if (!this.props.onRating || this.props.isDisabled) {
      return;
    }

    const isClick = event.type === 'click';

    if (!this.state.isActive && !isClick) {
      return;
    }

    let clientX = event.clientX;

    if (typeof clientX === 'undefined') {
      clientX = event.touches[0].clientX;
    }

    const position = event.target.getBoundingClientRect();
    const x = clientX - position.left;
    const steps = position.width / this.props.max;
    const newRating = Math.max(
      Math.min(Math.ceil(x / steps), this.props.max),
      0
    );

    this.setState({ isActive: !isClick });
    this.props.onRating(newRating);
  };

  onStart = () => this.setState({ isActive: true });

  onStop = () => this.setState({ isActive: false });

  render() {
    const classNames = classnames(
      {
        rsg__rating: true,
        'rsg__rating--disabled': this.props.isDisabled
      },
      this.props.className
    );
    let stars = [];

    for (let i = 0; i < this.props.max; i++) {
      stars = stars.concat(
        <Icon
          key={i}
          icon={this.props.icon}
          color={
            i < this.props.value
              ? this.props.activeColor
              : this.props.inactiveColor
          }
          size={this.props.size}
        />
      );
    }

    return (
      <span className={classNames} style={this.props.style} id={this.props.id}>
        <span
          className="rsg__rating__slider"
          onClick={this.onChange}
          onMouseDown={this.onStart}
          onMouseLeave={this.onStop}
          onMouseMove={this.onChange}
          onMouseUp={this.onStop}
          onTouchEnd={this.onStop}
          onTouchMove={this.onChange}
          onTouchStart={this.onStart}
        />
        {stars}
      </span>
    );
  }
}
