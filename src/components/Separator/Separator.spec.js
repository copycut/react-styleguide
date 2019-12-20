
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import Separator from './Separator';

describe('Separator', () => {
  it('can be vertical', () => {
    const wrapper = shallow(<Separator isVertical />);
    expect(wrapper.hasClass('sg__separator--vertical')).to.be.equal(true);
  });

  it('overwrite style when provided', () => {
    const wrapper = render(<Separator style={{ borderColor: 'red' }} />);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('border-color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Separator className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Separator id="test" />);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
