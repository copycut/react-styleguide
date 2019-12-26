
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import ListGroup from './ListGroup';

describe('ListGroup', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(
      <ListGroup style={{ color: 'red' }}>test</ListGroup>
    );
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<ListGroup className="test">test</ListGroup>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<ListGroup id="test">test</ListGroup>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
