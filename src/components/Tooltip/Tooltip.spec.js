
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('Render the children if not text', () => {
    const wrapper = render(
      <Tooltip>
        <button className="test">test</button>
      </Tooltip>
    );

    expect(wrapper.children()[0].name).to.equal('button');
    expect(wrapper.find('.test').length).to.equal(1);
  });

  it('can be active', () => {
    const wrapper = shallow(<Tooltip text="test" isActive />);
    expect(wrapper.hasClass('sg__tooltip--active')).to.be.equal(true);
  });

  it('can be disabled', () => {
    const wrapper = shallow(<Tooltip text="test" isDisabled />);
    expect(wrapper.hasClass('sg__tooltip--disabled')).to.be.equal(true);
  });

  it('disabled props overwrite active props', () => {
    const wrapper = shallow(<Tooltip text="test" isDisabled isActive />);
    expect(wrapper.hasClass('sg__tooltip--active')).to.be.equal(false);
  });

  it('can have placement prop (top)', () => {
    const wrapper = shallow(<Tooltip text="test" placement="top" />);
    expect(wrapper.hasClass('sg__tooltip--top')).to.be.equal(true);
  });

  it('can have placement prop (left)', () => {
    const wrapper = shallow(<Tooltip text="test" placement="left" />);
    expect(wrapper.hasClass('sg__tooltip--left')).to.be.equal(true);
  });

  it('can have placement prop (right)', () => {
    const wrapper = shallow(<Tooltip text="test" placement="right" />);
    expect(wrapper.hasClass('sg__tooltip--right')).to.be.equal(true);
  });

  it('can have placement prop (bottom)', () => {
    const wrapper = shallow(<Tooltip text="test" placement="bottom" />);
    expect(wrapper.hasClass('sg__tooltip--bottom')).to.be.equal(true);
  });

  it('can have color prop', () => {
    const wrapper = shallow(<Tooltip text="test" color="primary" />);
    expect(wrapper.hasClass('sg__tooltip--primary')).to.be.equal(true);
  });

  it('overwrite style when provided', () => {
    const wrapper = render(<Tooltip text="test" style={{ color: 'red' }} />);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Tooltip text="test" className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Tooltip text="test" id="test" />);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
