
import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import MenuItem from '../MenuItem';
import sinon from 'sinon';

describe('MenuItem', () => {
  it('is a Link component if a href prop provided', () => {
    const wrapper = render(<MenuItem href="#">test</MenuItem>);
    expect(wrapper.html()).to.equal(
      '<a href="#" class="sg__link sg__menuItem">test</a>'
    );
  });

  it('overwrite style when provided', () => {
    const wrapper = render(<MenuItem style={{ color: 'red' }}>test</MenuItem>);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = mount(<MenuItem className="test">test</MenuItem>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('onKeyPress with Space or Enter return onClick', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(<MenuItem onClick={mockClick}>test</MenuItem>);
    wrapper.simulate('keydown', { which: 32 });
    expect(mockClick.called).to.be.equal(true);
    wrapper.simulate('keydown', { charCode: 13 });
    expect(mockClick.calledTwice).to.be.equal(true);
  });

  it('Do not return onClick func if disabled', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(
      <MenuItem isDisabled onClick={mockClick}>
        test
      </MenuItem>
    );
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(false);
  });

  it('must add id', () => {
    const wrapper = render(<MenuItem id="test">test</MenuItem>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
