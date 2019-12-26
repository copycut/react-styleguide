import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('overwrite style when provided', () => {
    const wrapper = shallow(<Card style={{ color: 'red' }}>test</Card>);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Card className="test">test</Card>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = shallow(<Card id="test">test</Card>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
