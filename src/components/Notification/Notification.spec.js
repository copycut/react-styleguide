import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import sinon from 'sinon';
import Notification from './Notification';

describe('Notification', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(
      <Notification style={{ color: 'red' }}>test</Notification>
    );
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add class name', () => {
    const wrapper = mount(<Notification className="test">test</Notification>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('button inside can be clicked', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(<Notification isDismissible>test</Notification>);
    wrapper.find('Button').simulate('click');
    expect(mockClick.calledOnce).to.be.equal(false);
  });

  it('must dispatch click action', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(
      <Notification isDismissible onClick={mockClick}>
        test
      </Notification>
    );
    wrapper.find('Button').simulate('click');
    expect(mockClick.calledOnce).to.be.equal(true);
  });

  it('must active when receive prop', () => {
    const mockClick = sinon.spy(
      Notification.prototype,
      'componentWillReceiveProps'
    );
    const wrapper = mount(<Notification>test</Notification>);
    wrapper.setProps({ isActive: true });
    expect(mockClick.calledOnce).to.be.equal(true);
  });

  it('must be not active by default', () => {
    const wrapper = mount(<Notification>test</Notification>);
    expect(wrapper.state().isActive).to.be.equal(false);
  });

  it('can be active by default', () => {
    const wrapper = mount(<Notification isActive>test</Notification>);
    expect(wrapper.state().isActive).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Notification id="test">test</Notification>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
