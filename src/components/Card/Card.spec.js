import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';

import Card from './Card';

describe('Card', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Card style={{ color: 'red' }}>test</Card>);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Card className="test">test</Card>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Card id="test">test</Card>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
