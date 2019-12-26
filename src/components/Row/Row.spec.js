
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';

import Row from './Row';

describe('Row', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Row style={{ color: 'red' }}>test</Row>);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Row className="test">test</Row>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Row id="test">test</Row>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
