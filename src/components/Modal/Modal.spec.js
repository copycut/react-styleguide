import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import Modal from './Modal';

describe('Modal', () => {
  it('overwrite style when provided', () => {
    const wrapper = shallow(<Modal style={{ color: 'red' }} />);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Modal className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('can have a title', () => {
    const wrapper = shallow(<Modal title="test" />);
    expect(wrapper.find('Title').length).to.be.equal(1);
  });

  it('can be shown by default', () => {
    const wrapper = shallow(<Modal isOpen />);
    expect(wrapper.state().isOpen).to.be.equal(true);
    expect(wrapper.hasClass('rsg__modal--open')).to.be.equal(true);
  });

  it('can have a backdrop', () => {
    const wrapper = shallow(<Modal hasBackdrop />);
    expect(wrapper.find('.rsg__modal__backdrop').length).to.be.equal(1);
  });

  it('can be dismissible', () => {
    const wrapper = shallow(<Modal isDismissible />);
    return expect(wrapper.find('.rsg__modal__close')).to.exist;
  });

  it('click the dismissible button, close the modal ', () => {
    const wrapper = shallow(<Modal isOpen isDismissible />);
    const close = wrapper.find('.rsg__modal__close');
    close.simulate('click');
    expect(wrapper.state().isOpen).to.be.equal(false);
  });

  it('click the backdrop, close the modal ', () => {
    const wrapper = shallow(<Modal isOpen hasBackdrop isDismissible />);
    const backdrop = wrapper.find('.rsg__modal__backdrop');
    backdrop.simulate('click');
    expect(wrapper.state().isOpen).to.be.equal(false);
  });

  it('trigger onDismiss when closed', () => {
    const mockClick = spy();
    const wrapper = shallow(
      <Modal isOpen isDismissible onDismiss={mockClick} />
    );
    wrapper.find('.rsg__modal__close').simulate('click');
    expect(mockClick.called).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = shallow(<Modal id="test" />);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
