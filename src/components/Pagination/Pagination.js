import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import Button from '@styleguide/src/components/Button';
import ButtonGroup from '@styleguide/src/components/ButtonGroup';
import Input from '@styleguide/src/components/Input';
import Text from '@styleguide/src/components/Text';
import Note from '@styleguide/src/components/Note';
import './Pagination.scss';
import { SIZES } from '@styleguide/src/constants/sizes';
import { PAGINATION } from '@styleguide/src/constants/classnames';

export default class Pagination extends Component {
  static propTypes = {
    itemsCount: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    activePage: PropTypes.number,
    className: PropTypes.string,
    size: PropTypes.oneOf(SIZES),
    style: PropTypes.object,
    displayRange: PropTypes.number,
    hasPrevNext: PropTypes.bool,
    hasFirstLast: PropTypes.bool,
    hasPageInfo: PropTypes.bool,
    pageInfoLabel: PropTypes.string,
    hasItemsInfo: PropTypes.bool,
    itemsInfoLabel: PropTypes.string,
    showOnSinglePage: PropTypes.bool,
    id: PropTypes.string
  };

  static defaultProps = {
    activePage: 1,
    displayRange: 5
  };

  static iconMap = {
    prev: 'chevron-left',
    next: 'chevron-right',
    first: 'chevron-first',
    last: 'chevron-last'
  };

  constructor(props) {
    super(props);

    this.state = this.getStateFromProps(props);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState(this.getStateFromProps(nextProps));
  // }

  getStateFromProps(props) {
    const { activePage, itemsCount, itemsPerPage } = props;
    const pagesCount = Math.ceil(itemsCount / itemsPerPage);

    return {
      pagesCount,
      pageInfoValue: activePage.toString()
    };
  }

  handlePageEdit = event => {
    let value = '';

    if (event.target.value) {
      const pageNum = parseInt(event.target.value, 10);
      value = _.clamp(pageNum, 1, this.state.pagesCount).toString();
    }

    this.setState({ pageInfoValue: value });
  };

  handlePageSubmit = event => {
    event && event.preventDefault();

    if (this.state.pageInfoValue) {
      this.props.onChange(parseInt(this.state.pageInfoValue, 10));
    }
  };

  renderActionButton(action) {
    const { activePage, onChange } = this.props;
    const { pagesCount } = this.state;

    let gotoPage;
    let isDisabled;

    if (action === 'prev' || action === 'first') {
      isDisabled = activePage <= 1;
      if (action === 'prev') {
        gotoPage = Math.max(activePage - 1, 1);
      } else {
        gotoPage = 1;
      }
    } else if (action === 'next' || action === 'last') {
      isDisabled = activePage >= pagesCount;
      if (action === 'next') {
        gotoPage = Math.min(activePage + 1, pagesCount);
      } else {
        gotoPage = pagesCount;
      }
    } else {
      return;
    }

    return (
      <Button
        key={action}
        className={`${PAGINATION}__direction`}
        size={this.props.size}
        icon={Pagination.iconMap[action]}
        isDisabled={isDisabled}
        onClick={() => onChange(gotoPage)}
      />
    );
  }

  renderPrevNextButton(action) {
    if (!this.props.hasPrevNext) {
      return;
    }

    return this.renderActionButton(action);
  }

  renderFirstLastButton(action) {
    if (!this.props.hasFirstLast) {
      return;
    }

    return this.renderActionButton(action);
  }

  renderPageInfo() {
    if (!this.props.hasPageInfo) {
      return;
    }

    const { size } = this.props;
    const { pagesCount } = this.state;

    let label = '';

    if (this.props.pageInfoLabel) {
      label = (
        <Text size={size} className={`${PAGINATION}__textWithSpace`}>
          {this.props.pageInfoLabel}
        </Text>
      );
    }

    return (
      <form onSubmit={this.handlePageSubmit} className={`${PAGINATION}__form`}>
        {label}
        <Input
          size={size}
          type="number"
          value={this.state.pageInfoValue}
          onChange={this.handlePageEdit}
          min="1"
          max={pagesCount}
        />
        <Text size={size} className={`${PAGINATION}__text`}>
          / {pagesCount}
        </Text>
      </form>
    );
  }

  renderItemsInfo() {
    if (!this.props.hasItemsInfo) {
      return;
    }

    const { activePage, itemsPerPage, itemsCount } = this.props;

    let label = '';
    if (this.props.itemsInfoLabel) {
      // Adds ending space
      label = `${this.props.itemsInfoLabel} `;
    }

    const minItemsRange = (activePage - 1) * itemsPerPage + 1;
    const maxItemsRange = Math.min(activePage * itemsPerPage, itemsCount);

    return (
      <Note className={`${PAGINATION}__text`}>
        ({label}
        {minItemsRange}-{maxItemsRange} / {itemsCount})
      </Note>
    );
  }

  renderPagesRange() {
    const { displayRange, activePage, size, onChange } = this.props;
    const { pagesCount } = this.state;

    const minRangeOffset = Math.floor((displayRange - 1) / 2);
    const minRangeMax = pagesCount - displayRange + 1;

    const minRange = _.clamp(activePage - minRangeOffset, 1, minRangeMax);
    const maxRange = Math.min(minRange + displayRange - 1, pagesCount);
    const pagesRange = [];

    for (let page = minRange; page <= maxRange; page++) {
      pagesRange.push(
        <Button
          key={page}
          className={`${PAGINATION}__page`}
          isActive={page === activePage}
          size={size}
          onClick={() => onChange(page)}
        >
          {page}
        </Button>
      );
    }

    return pagesRange;
  }

  renderActionsGroup(direction) {
    let actions;
    if (direction === 'left') {
      actions = _.compact([
        this.renderFirstLastButton('first'),
        this.renderPrevNextButton('prev')
      ]);
    } else {
      actions = _.compact([
        this.renderPrevNextButton('next'),
        this.renderFirstLastButton('last')
      ]);
    }

    if (actions.length === 0) {
      return;
    }

    return <ButtonGroup>{actions}</ButtonGroup>;
  }

  /**
   * Here is the display with all options set:
   *
   * |< < 11 12 [13] 14 15 > >| page: {3} / 23 (items: 11-15 / 118)
   */
  render() {
    const { activePage, className, showOnSinglePage, style, id } = this.props;
    const { pagesCount } = this.state;

    if (pagesCount === 0 || (pagesCount < 2 && !showOnSinglePage)) {
      return null;
    }

    if (activePage > pagesCount) {
      throw new Error('Active page greater than page count');
    }

    const classNames = classnames(PAGINATION, className);

    return (
      <div className={classNames} style={style} id={id}>
        {this.renderActionsGroup('left')}
        <ButtonGroup className={`${PAGINATION}__pagesGroup`}>
          {this.renderPagesRange()}
        </ButtonGroup>
        {this.renderActionsGroup('right')}
        {this.renderPageInfo()}
        {this.renderItemsInfo()}
      </div>
    );
  }
}
