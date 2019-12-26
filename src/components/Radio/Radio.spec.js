import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import { spy } from 'sinon';
import Radio from './Radio';

describe('Radio', () => {
  it('must be unchecked by default', () => {
    const wrapper = mount(<Radio />);
    wrapper.setProps({ isChecked: true });
    expect(wrapper.props().isChecked).to.be.equal(true);
  });

  it('must provide the label', () => {
    const wrapper = mount(<Radio label="test" />);
    expect(wrapper.find('.sg__radio__label').exists()).to.be.equal(true);
  });

  it('must be checked by default', () => {
    const wrapper = mount(<Radio isChecked />);
    expect(wrapper.props().isChecked).to.be.equal(true);
  });

  it('click return the reverse checked state', () => {
    const mockClick = spy();
    const mockChange = spy();
    const wrapper = mount(
      <Radio isChecked onClick={mockClick} onChange={mockChange} />
    );
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(true);
    expect(mockChange.called).to.be.equal(true);
    expect(mockClick.args[0][0]).to.be.equal(false);
    expect(mockChange.args[0][0]).to.be.equal(false);
  });

  it('click return the reverse checked state', () => {
    const mockClick = spy();
    const mockChange = spy();
    const wrapper = mount(<Radio />);
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(false);
    expect(mockChange.called).to.be.equal(false);
  });

  it('click on disabled radio do nothing', () => {
    const mockClick = spy();
    const mockChange = spy();
    const wrapper = mount(
      <Radio
        isDisabled
        isChecked={false}
        onClick={mockClick}
        onChange={mockChange}
      />
    );
    wrapper.simulate('click');
    expect(wrapper.props().isChecked).to.be.equal(false);
    expect(mockClick.called).to.be.equal(false);
    expect(mockChange.called).to.be.equal(false);
  });

  it('overwrite style', () => {
    const wrapper = render(<Radio style={{ color: 'red' }} />);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = mount(<Radio className="test">test</Radio>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Radio id="test" />);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
