import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from '@styleguide/src/components/Text';
import './Tab.scss';

export default class Tab extends React.PureComponent {
  static propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.node,
    id: PropTypes.string
  };

  render() {
    const classNames = classnames(
      {
        rsg__tab: true,
        'rsg__tab--active': this.props.isActive
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        <Text>{this.props.children}</Text>
      </div>
    );
  }
}
