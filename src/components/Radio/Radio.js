import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Radio.scss';

export default class Radio extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    style: PropTypes.object
  };

  handleClick = event => {
    if (this.props.isDisabled) {
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(!this.props.isChecked, event);
    }

    if (this.props.onChange) {
      this.props.onChange(!this.props.isChecked, event);
    }
  };

  renderRadio() {
    return (
      <button type="button" className="rsg__radio__button">
        <span className="rsg__radio__mark" />
      </button>
    );
  }

  renderLabelAndRadio() {
    if (!this.props.label) {
      return this.renderRadio();
    }

    return (
      <div className="rsg__radio__label" title={this.props.label}>
        {this.renderRadio()}
        {this.props.label}
      </div>
    );
  }

  render() {
    const classNames = classnames(
      {
        rsg__radio: true,
        'rsg__radio--disabled': this.props.isDisabled,
        'rsg__radio--checked': this.props.isChecked
      },
      this.props.className
    );

    return (
      <div
        className={classNames}
        id={this.props.id}
        name={this.props.name}
        onClick={this.handleClick}
        style={this.propsstyle}
      >
        {this.renderLabelAndRadio()}
      </div>
    );
  }
}
