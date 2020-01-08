import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Separator.scss';

export default class Separator extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    isVertical: PropTypes.bool,
    id: PropTypes.string
  };

  render() {
    const classNames = classnames(
      {
        rsg__separator: true,
        'rsg__separator--vertical': this.props.isVertical
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id} />
    );
  }
}
