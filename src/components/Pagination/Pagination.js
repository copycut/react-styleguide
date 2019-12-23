import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import clamp from 'lodash/clamp';
import compact from 'lodash/compact';
import Button from '@styleguide/src/components/Button';
import ButtonGroup from '@styleguide/src/components/ButtonGroup';
import Input from '@styleguide/src/components/Input';
import Text from '@styleguide/src/components/Text';
import Note from '@styleguide/src/components/Note';
import { SIZES } from '@styleguide/src/constants/sizes';
import './Pagination.scss';

export default class Pagination extends Component {
  static propTypes = {
    itemsCount: PropTypes.number,
    itemsPerPage: PropTypes.number,
    onChange: PropTypes.func,
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
      value = clamp(pageNum, 1, this.state.pagesCount).toString();
    }

    this.setState({ pageInfoValue: value });
  };

  handlePageSubmit = event => {
    event && event.preventDefault();

    if (this.state.pageInfoValue) {
      this.props.onChange(parseInt(this.state.pageInfoValue, 10), event);
    }
  };

  renderActionButton(action) {
    let gotoPage;
    let isDisabled;

    if (action === 'prev' || action === 'first') {
      isDisabled = this.props.activePage <= 1;
      gotoPage = action === 'prev' ? Math.max(this.props.activePage - 1, 1) : 1;
    } else if (action === 'next' || action === 'last') {
      isDisabled = this.props.activePage >= this.state.pagesCount;

      gotoPage =
        action === 'next'
          ? Math.min(this.props.activePage + 1, this.state.pagesCount)
          : this.state.pagesCount;
    } else {
      return;
    }

    return (
      <Button
        key={action}
        className="rsg__pagination__direction"
        size={this.props.size}
        icon={Pagination.iconMap[action]}
        isDisabled={isDisabled}
        onClick={event => this.props.onChange(gotoPage, event)}
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

    let label = '';

    if (this.props.pageInfoLabel) {
      label = (
        <Text
          size={this.props.size}
          className="rsg__pagination}__textWithSpace"
        >
          {this.props.pageInfoLabel}
        </Text>
      );
    }

    return (
      <form onSubmit={this.handlePageSubmit} className="rsg__pagination__form">
        {label}
        <Input
          size={this.props.size}
          type="number"
          value={this.state.pageInfoValue}
          onChange={this.handlePageEdit}
          min="1"
          max={this.state.pagesCount}
        />
        <Text size={this.props.size} className="rsg__pagination__text">
          / {this.state.pagesCount}
        </Text>
      </form>
    );
  }

  renderItemsInfo() {
    if (!this.props.hasItemsInfo) {
      return;
    }

    let label = '';
    if (this.props.itemsInfoLabel) {
      // Adds ending space
      label = `${this.props.itemsInfoLabel} `;
    }

    const minItemsRange =
      (this.props.activePage - 1) * this.props.itemsPerPage + 1;
    const maxItemsRange = Math.min(
      this.props.activePage * this.props.itemsPerPage,
      this.props.itemsCount
    );

    return (
      <Note className="rsg__pagination__text">
        ({label}
        {minItemsRange}-{maxItemsRange} / {this.props.itemsCount})
      </Note>
    );
  }

  renderPagesRange() {
    const minRangeOffset = Math.floor((this.props.displayRange - 1) / 2);
    const minRangeMax = this.state.pagesCount - this.props.displayRange + 1;

    const minRange = clamp(
      this.props.activePage - minRangeOffset,
      1,
      minRangeMax
    );
    const maxRange = Math.min(
      minRange + this.props.displayRange - 1,
      this.state.pagesCount
    );
    const pagesRange = [];

    for (let page = minRange; page <= maxRange; page++) {
      pagesRange.push(
        <Button
          key={page}
          className="rsg__pagination__page"
          isActive={page === this.props.activePage}
          size={this.props.size}
          onClick={() => this.props.onChange(page)}
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
      actions = compact([
        this.renderFirstLastButton('first'),
        this.renderPrevNextButton('prev')
      ]);
    } else {
      actions = compact([
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
    if (
      this.state.pagesCount === 0 ||
      (this.state.pagesCount < 2 && !this.props.showOnSinglePage)
    ) {
      return null;
    }

    if (this.props.activePage > this.state.pagesCount) {
      throw new Error('Active page greater than page count');
    }

    const classNames = classnames('rsg__pagination', this.props.className);

    return (
      <div className={classNames} style={this.props.style} id={this.props.id}>
        {this.renderActionsGroup('left')}
        <ButtonGroup className="rsg__pagination__pagesGroup">
          {this.renderPagesRange()}
        </ButtonGroup>
        {this.renderActionsGroup('right')}
        {this.renderPageInfo()}
        {this.renderItemsInfo()}
      </div>
    );
  }
}
