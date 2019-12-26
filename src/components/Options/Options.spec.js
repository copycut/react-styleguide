import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Options from './Options';

describe('Card', () => {
  it('overwrite style when provided', () => {
    const wrapper = shallow(<Options style={{ color: 'red' }} />);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Options className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = shallow(<Options id="test" />);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
