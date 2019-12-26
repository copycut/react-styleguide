
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import Tab from './Tab';

describe('Tab', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Tab style={{ color: 'red' }}>test</Tab>);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Tab className="test">test</Tab>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Tab id="test">test</Tab>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
