import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('overwrite style when provided', () => {
    const wrapper = shallow(<Menu style={{ color: 'red' }}>test</Menu>);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Menu className="test">test</Menu>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = shallow(<Menu id="test">test</Menu>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
