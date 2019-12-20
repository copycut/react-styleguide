
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import ListGroup from './ListGroup';

describe('ListGroup', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(
      <ListGroup style={{ color: 'red' }}>test</ListGroup>
    );
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<ListGroup className="test">test</ListGroup>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<ListGroup id="test">test</ListGroup>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
