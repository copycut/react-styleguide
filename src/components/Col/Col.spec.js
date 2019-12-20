import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import Col from './Col';

describe('Col', () => {
  it('overwrite style when provided', () => {
    const wrapper = shallow(<Col style={{ color: 'red' }}>test</Col>);
    const stylesArray = wrapper
      .render()
      .children()[0]
      .attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Col className="test">test</Col>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Col id="test">test</Col>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
