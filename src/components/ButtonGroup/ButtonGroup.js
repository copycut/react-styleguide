import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import castArray from 'lodash/castArray';
import compact from 'lodash/compact';
import './ButtonGroup.scss';

export default class ButtonGroup extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isBlock: PropTypes.bool,
    style: PropTypes.object,
    id: PropTypes.string
  };

  render() {
    const childrenAmount = compact(castArray(this.props.children)).length;
    const classNames = classnames(
      {
        rsg__buttonGroup: true,
        'rsg__buttonGroup--block': this.props.isBlock,
        [`rsg__buttonGroup--block--${childrenAmount}`]: this.props.isBlock
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}
