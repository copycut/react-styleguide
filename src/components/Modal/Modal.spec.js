
import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import Modal from './Modal';
import sinon from 'sinon';

describe('Modal', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Modal style={{ backgroundColor: 'red' }} />);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('background-color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = mount(<Modal className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('can have a title', () => {
    const wrapper = mount(<Modal title="test" />);
    expect(wrapper.find('Title').length).to.be.equal(1);
  });

  it('can be shown by default', () => {
    const wrapper = mount(<Modal isOpen />);
    expect(wrapper.state().isOpen).to.be.equal(true);
    expect(wrapper.hasClass('sg__modal--open')).to.be.equal(true);
  });

  it('can be opened by props update', () => {
    const wrapper = mount(<Modal />);
    wrapper.setProps({ isOpen: true });
    expect(wrapper.state().isOpen).to.be.equal(true);
  });

  it('can have a backdrop', () => {
    const wrapper = mount(<Modal hasBackdrop />);
    expect(wrapper.find('Backdrop').length).to.be.equal(1);
  });

  it('can be dismissible', () => {
    const wrapper = mount(<Modal isDismissible />);
    return expect(wrapper.find('.sg__modal__close')).to.exist;
  });

  it('click the dismissible button, close the modal ', () => {
    const wrapper = mount(<Modal isOpen isDismissible />);
    const close = wrapper.find('.sg__modal__close');
    close.simulate('click');
    expect(wrapper.state().isOpen).to.be.equal(false);
  });

  it('click the backdrop, close the modal ', () => {
    const wrapper = mount(<Modal isOpen hasBackdrop isDismissible />);
    const backdrop = wrapper.find('Backdrop');
    backdrop.simulate('click');
    expect(wrapper.state().isOpen).to.be.equal(false);
  });

  it('can be reverse color theme ', () => {
    const wrapper = mount(<Modal isReverse />);
    expect(wrapper.hasClass('sg__modal--reverse')).to.be.equal(true);
  });

  it('trigger onDismiss when closed', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(<Modal isOpen isDismissible onDismiss={mockClick} />);
    wrapper.find('.sg__modal__close').simulate('click');
    expect(mockClick.called).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Modal id="test" />);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
