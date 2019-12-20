import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Col.scss';

export default class Col extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string,
    /** set the width ratio for mobiles and wider (from 0px)
    use this prop if you have to use only one whatever the device */
    mobile: PropTypes.number,
    /** set the width ratio for tablets and wider (from 768px) */
    tablet: PropTypes.number,
    /** set the width ratio for desktops and wider (from 992px) */
    desktop: PropTypes.number,
    /** set the width ratio for large desktops and wider (from 1200px) */
    largeDesktop: PropTypes.number,
    /** push the col to right for a screen ration for mobiles and wider
    use this prop if you have to use only one whatever the device */
    offsetMobile: PropTypes.number,
    /** push the col to right for a screen ration for tablets and wider */
    offsetTablet: PropTypes.number,
    /** push the col to right for a screen ration for desktops and wider */
    offsetDesktop: PropTypes.number,
    /** push the col to right for a screen ration for large desktops
    and wider */
    offsetLargeDesktop: PropTypes.number
  };

  render() {
    const classNames = classnames(
      {
        rsg__col: true,
        [`rsg__col--mobile--${this.props.mobile}`]: this.props.mobile,
        [`rsg__col--tablet--${this.props.tablet}`]: this.props.tablet,
        [`rsg__col--desktop--${this.props.desktop}`]: this.props.desktop,
        [`rsg__col--largeDesktop--${this.props.largeDesktop}`]: this.props
          .largeDesktop,
        [`rsg__col--offset--mobile--${this.props.offsetMobile}`]: this.props
          .offsetMobile,
        [`rsg__col--offset--tablet--${this.props.offsetTablet}`]: this.props
          .offsetTablet,
        [`rsg__col--offset--desktop--${this.props.offsetDesktop}`]: this.props
          .offsetDesktop,
        [`rsg__col--offset--largeDesktop--${this.props.offsetLargeDesktop}`]: this
          .props.offsetLargeDesktop
      },
      this.props.className
    );

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        <div className="rsg__col__inner">{this.props.children}</div>
      </div>
    );
  }
}
