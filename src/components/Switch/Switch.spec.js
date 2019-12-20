
import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import sinon from 'sinon';
import Switch from './Switch';

describe('Switch', () => {
  it('can be active by default', () => {
    const wrapper = mount(<Switch isActive />);
    expect(wrapper.hasClass('sg__switch--active')).to.be.equal(true);
  });

  it('can be disabled by default', () => {
    const wrapper = mount(<Switch isDisabled />);
    expect(wrapper.hasClass('sg__switch--disabled')).to.be.equal(true);
  });

  it('return the reverse props isActive', () => {
    const mockClick = sinon.spy();
    const mockChange = sinon.spy();
    const wrapper = mount(<Switch onClick={mockClick} onChange={mockChange} />);
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(true);
    expect(mockChange.called).to.be.equal(true);
    expect(mockClick.args[0][0]).to.be.equal(true);
    expect(mockChange.args[0][0]).to.be.equal(true);
  });

  it("can't be activated by click when disabled", () => {
    const mockClick = sinon.spy();
    const wrapper = mount(<Switch isDisabled onClick={mockClick} />);
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(false);
    expect(mockClick.args[0]).to.be.equal(undefined);
  });

  it('overwrite style when provided', () => {
    const wrapper = render(<Switch style={{ backgroundColor: 'red' }} />);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('background-color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = mount(<Switch className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Switch id="test" />);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
