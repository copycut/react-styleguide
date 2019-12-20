
import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import sinon from 'sinon';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        onChange={() => {}}
        style={{ color: 'red' }}
      />
    );
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = mount(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        className="test"
        onChange={() => {}}
      />
    );
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('enable previous/next buttons', () => {
    const wrapper = mount(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        hasPrevNext
        onChange={() => {}}
      />
    );
    expect(wrapper.find('.sg__pagination__direction').length).to.be.equal(2);
  });

  it('enable first/last buttons', () => {
    const wrapper = mount(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        hasFirstLast
        onChange={() => {}}
      />
    );
    expect(wrapper.find('.sg__pagination__direction').length).to.be.equal(2);
  });

  it('enable page info', () => {
    const wrapper = mount(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        hasPageInfo
        onChange={() => {}}
      />
    );
    expect(wrapper.find('.sg__pagination__form').length).to.be.equal(1);
  });

  it('enable page info with label', () => {
    const wrapper = mount(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        hasPageInfo
        pageInfoLabel="test"
        onChange={() => {}}
      />
    );
    expect(wrapper.find('.sg__pagination__form').text()).to.be.contains('test');
  });

  it('enable items info', () => {
    const wrapper = mount(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        hasItemsInfo
        onChange={() => {}}
      />
    );
    expect(wrapper.find('.sg__note').length).to.be.equal(1);
  });

  it('enable items info with label', () => {
    const wrapper = mount(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        hasItemsInfo
        itemsInfoLabel="test"
        onChange={() => {}}
      />
    );
    expect(wrapper.find('.sg__note').text()).to.be.contains('test');
  });

  it('on first page, the previous button is disabled', () => {
    const wrapper = mount(
      <Pagination
        activePage={1}
        itemsCount={100}
        itemsPerPage={10}
        hasPrevNext
        onChange={() => {}}
      />
    );
    expect(
      wrapper
        .find('Button')
        .at(0)
        .props().isDisabled
    ).to.be.equal(true);
  });

  it('on last page, the next button is disabled', () => {
    const wrapper = mount(
      <Pagination
        activePage={10}
        itemsCount={100}
        itemsPerPage={10}
        hasPrevNext
        onChange={() => {}}
      />
    );
    expect(
      wrapper
        .find('Button')
        .last()
        .props().isDisabled
    ).to.be.equal(true);
  });

  it('click on page 2 return 2', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        onChange={page => mockClick(page)}
      />
    );
    wrapper
      .find('.sg__pagination__pagesGroup Button')
      .at(1)
      .simulate('click');
    expect(mockClick.args[0][0]).to.be.equal(2);
  });

  it('click on next go to next page', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        hasPrevNext
        onChange={page => mockClick(page)}
      />
    );
    wrapper
      .find('.sg__pagination__direction')
      .at(1)
      .simulate('click');
    expect(mockClick.args[0][0]).to.be.equal(2);
  });

  it('click on prev go to previous page', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(
      <Pagination
        activePage={3}
        itemsCount={100}
        itemsPerPage={10}
        hasPrevNext
        onChange={page => mockClick(page)}
      />
    );
    wrapper
      .find('.sg__pagination__direction')
      .at(0)
      .simulate('click');
    expect(mockClick.args[0][0]).to.be.equal(2);
  });

  it('click on first go to first page', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(
      <Pagination
        activePage={3}
        itemsCount={100}
        itemsPerPage={10}
        hasFirstLast
        onChange={page => mockClick(page)}
      />
    );
    wrapper
      .find('.sg__pagination__direction')
      .at(0)
      .simulate('click');
    expect(mockClick.args[0][0]).to.be.equal(1);
  });

  it('click on last go to last page', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(
      <Pagination
        activePage={3}
        itemsCount={100}
        itemsPerPage={10}
        hasFirstLast
        onChange={page => mockClick(page)}
      />
    );
    wrapper
      .find('.sg__pagination__direction')
      .at(1)
      .simulate('click');
    expect(mockClick.args[0][0]).to.be.equal(10);
  });

  it('change input page number return the allowed page', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        hasPageInfo
        onChange={page => mockClick(page)}
      />
    );
    wrapper.find('input').node.value = '2';
    wrapper.find('input').simulate('change');
    wrapper.find('form').simulate('submit');
    expect(mockClick.args[0][0]).to.be.equal(2);
  });

  it('input should equal active page', () => {
    const wrapper = mount(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        hasPageInfo
        activePage={3}
        onChange={() => {}}
      />
    );

    expect(wrapper.find('input').node.value).to.be.equal('3');
  });

  it('change input above page range max', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        hasPageInfo
        onChange={page => mockClick(page)}
      />
    );
    wrapper.find('input').node.value = '19';
    wrapper.find('input').simulate('change');
    wrapper.find('form').simulate('submit');
    expect(mockClick.args[0][0]).to.be.equal(10);
  });

  it('do not render if only one page', () => {
    const wrapper = mount(
      <Pagination itemsCount={10} itemsPerPage={10} onChange={() => {}} />
    );
    expect(wrapper.isEmptyRender()).to.be.equal(true);
  });

  it('render if only one page with showOnSinglePage', () => {
    const wrapper = mount(
      <Pagination
        itemsCount={10}
        itemsPerPage={10}
        onChange={() => {}}
        showOnSinglePage
      />
    );
    expect(wrapper.isEmptyRender()).to.be.equal(false);
  });

  it('do not render if pages count is zero', () => {
    const wrapper = mount(
      <Pagination
        itemsCount={0}
        itemsPerPage={10}
        onChange={() => {}}
        showOnSinglePage
      />
    );
    expect(wrapper.isEmptyRender()).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Pagination id="test" />);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
