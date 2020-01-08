import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from '@styleguide/src/components/Text';
import { SIZES } from '@styleguide/src/constants/sizes';
import './ProgressBar.scss';

export default class ProgressBar extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOf(SIZES),
    color: PropTypes.string,
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    current: PropTypes.number,
    total: PropTypes.number,
    isRounded: PropTypes.bool,
    isDisabled: PropTypes.bool,
    id: PropTypes.string
  };

  getProgress = () => {
    if (this.props.current && this.props.total) {
      const progress = ((this.props.current / this.props.total) * 1000) / 10;

      return `${progress}%`;
    }
  };

  getLabel = () => {
    if (this.props.labelPosition && !this.props.label) {
      return (
        <Text className="rsg__progressBar__percentage">
          {this.getProgress()}
        </Text>
      );
    }

    if (this.props.labelPosition && this.props.label) {
      return (
        <Text className="rsg__progressBar__label">{this.props.label}</Text>
      );
    }
  };

  render() {
    const classNames = classnames(
      {
        rsg__progressBar: true,
        'rsg__progressBar--rounded': this.props.isRounded,
        [`rsg__progressBar--${this.props.size}`]: this.props.size,
        [`rsg__progressBar--${this.props.color}`]: this.props.color,
        [`rsg__progressBar--${this.props.labelPosition}`]: this.props
          .labelPosition
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        {this.getLabel()}

        <div className="rsg__progressBar__bar">
          <div
            className="rsg__progressBar__progression"
            style={{ width: this.getProgress() }}
          />
        </div>
      </div>
    );
  }
}
