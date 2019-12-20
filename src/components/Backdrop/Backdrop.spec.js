import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import sinon from 'sinon';
import Backdrop from './Backdrop';

describe('Backdrop', () => {
  it('overwrite style', () => {
    const wrapper = render(<Backdrop style={{ background: 'red' }} />);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('background:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = mount(<Backdrop className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must dispatch click action', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(<Backdrop isOpen onClick={mockClick} />);
    wrapper.simulate('click');
    expect(mockClick.calledOnce).to.be.equal(true);
  });

  it('must not dispatch click action when closed', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(<Backdrop onClick={mockClick} />);
    wrapper.simulate('click');
    expect(mockClick.calledOnce).to.be.equal(false);
  });

  it('must not dispatch click action when closed', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(<Backdrop onClick={mockClick} />);
    wrapper.simulate('click');
    expect(mockClick.calledOnce).to.be.equal(false);
  });

  it('loose his pristine state when props change', () => {
    const wrapper = mount(<Backdrop isOpen />);
    wrapper.setProps({ isOpen: true });
    expect(wrapper.state().isPristine).to.be.equal(true);
    wrapper.setProps({ isOpen: false });
    expect(wrapper.state().isPristine).to.be.equal(false);
  });

  it('must add id', () => {
    const wrapper = render(<Backdrop id="test" />);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
