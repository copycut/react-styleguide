import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import Notification from './Notification';

describe('Notification', () => {
  it('overwrite style when provided', () => {
    const wrapper = shallow(
      <Notification style={{ color: 'red' }}>test</Notification>
    );
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add class name', () => {
    const wrapper = shallow(<Notification className="test">test</Notification>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('button inside can be clicked', () => {
    const mockClick = spy();
    const wrapper = mount(<Notification isDismissible>test</Notification>);
    wrapper.find('Button').simulate('click');
    expect(mockClick.calledOnce).to.be.equal(false);
  });

  it('must dispatch click action', () => {
    const mockClick = spy();
    const wrapper = mount(
      <Notification isDismissible onDismiss={mockClick}>
        test
      </Notification>
    );
    wrapper.find('Button').simulate('click');
    expect(mockClick.calledOnce).to.be.equal(true);
  });

  it('must be not active by default', () => {
    const wrapper = shallow(<Notification>test</Notification>);
    expect(wrapper.prop('isActive')).to.be.equal(undefined);
  });

  it('can be active by default', () => {
    const wrapper = shallow(<Notification isActive>test</Notification>);
    expect(wrapper.prop('isActive')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = shallow(<Notification id="test">test</Notification>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
