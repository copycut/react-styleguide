
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import Options from './Options';

describe('Card', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Options style={{ color: 'red' }} />);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Options className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Options id="test" />);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
