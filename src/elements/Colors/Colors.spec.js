
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Colors from './Colors';

describe('Colors', () => {
  it('must add id', () => {
    const wrapper = render(<Colors id="test" />);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
