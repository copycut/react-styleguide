import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import MenuItem from '../MenuItem';

describe('MenuItem', () => {
  it('is a Link component if a href prop provided', () => {
    const wrapper = shallow(<MenuItem href="#">test</MenuItem>);
    expect(wrapper.name()).to.equal('Link');
  });

  it('overwrite style when provided', () => {
    const wrapper = shallow(<MenuItem style={{ color: 'red' }}>test</MenuItem>);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<MenuItem className="test">test</MenuItem>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('onKeyPress with Space or Enter return onClick', () => {
    const mockClick = spy();
    const wrapper = mount(<MenuItem onClick={mockClick}>test</MenuItem>);
    wrapper.simulate('keydown', { which: 32 });
    expect(mockClick.called).to.be.equal(true);
    wrapper.simulate('keydown', { charCode: 13 });
    expect(mockClick.calledTwice).to.be.equal(true);
  });

  it('Do not return onClick func if disabled', () => {
    const mockClick = spy();
    const wrapper = mount(
      <MenuItem isDisabled onClick={mockClick}>
        test
      </MenuItem>
    );
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(false);
  });

  it('must add id', () => {
    const wrapper = shallow(<MenuItem id="test">test</MenuItem>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
