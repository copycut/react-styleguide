
import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import sinon from 'sinon';
import Popover from './Popover';

describe('Popover', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Popover title="test" style={{ color: 'red' }} />);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('hidden by default', () => {
    const wrapper = mount(<Popover title="test" />);
    expect(wrapper.state().isActive).to.be.equal(false);
    expect(wrapper.hasClass('sg__popover--active')).to.be.equal(false);
  });

  it('can be shown by default', () => {
    const wrapper = mount(<Popover title="test" isActive />);
    expect(wrapper.state().isActive).to.be.equal(true);
    expect(wrapper.hasClass('sg__popover--active')).to.be.equal(true);
  });

  it('can recieve props', () => {
    const wrapper = mount(<Popover />);
    wrapper.setProps({ isActive: true });
    expect(wrapper.hasClass('sg__popover--active')).to.be.equal(true);
  });

  it('can be shown by clicking the component', () => {
    const wrapper = mount(<Popover title="test" />);
    const trigger = wrapper.find('.sg__popover__trigger');
    trigger.simulate('click');
    expect(wrapper.state().isActive).to.be.equal(true);
  });

  it('can be hide by clicking the component', () => {
    const wrapper = mount(<Popover title="test" isActive />);
    const trigger = wrapper.find('.sg__popover__trigger');
    trigger.simulate('click');
    expect(wrapper.state().isActive).to.be.equal(false);
  });

  it('can be hide with close button', () => {
    const wrapper = mount(<Popover title="test" isActive isDismissible />);
    const close = wrapper.find('.sg__popover__close');

    close.simulate('click');
    expect(wrapper.state().isActive).to.be.equal(false);
  });

  it('must add className', () => {
    const wrapper = mount(<Popover title="test" className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must dispatch onClick function to popover button', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(<Popover onClick={mockClick} buttonText="test" />);
    wrapper.find('.sg__popover__button').simulate('click');
    expect(mockClick.called).to.be.equal(true);
  });

  it('cannot be active if disabled', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(
      <Popover isDisabled onClick={mockClick} buttonText="test" />
    );
    wrapper.find('.sg__popover__button').simulate('click');
    expect(mockClick.called).to.be.equal(false);
  });

  it('can have content', () => {
    const content = <div id="content">content</div>;
    const wrapper = mount(<Popover title="test" content={content} />);

    expect(wrapper.find('#content').length).to.be.equal(1);
  });

  it('can be disabled', () => {
    const wrapper = mount(<Popover isDisabled />);
    expect(wrapper.instance().props.isDisabled).to.be.equal(true);
    expect(wrapper.state().isActive).to.be.equal(false);
  });

  it('must add id', () => {
    const wrapper = render(<Popover id="test" />);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
