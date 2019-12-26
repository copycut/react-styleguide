
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';

import Thumbnail from './Thumbnail';

describe('Thumbnail', () => {
  it('became a link when href prop provided', () => {
    const wrapper = render(<Thumbnail src="#" href="#" />);
    expect(wrapper.children()[0].name).to.be.equal('a');
  });

  it('not render if src prop is missing', () => {
    const wrapper = shallow(<Thumbnail />);
    return expect(wrapper.html()).to.be.null;
  });

  it('overwrite style when provided', () => {
    const wrapper = render(
      <Thumbnail src="#" style={{ backgroundColor: 'red' }} />
    );
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('background-color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Thumbnail className="test" src="#" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Thumbnail src="#" href="#" id="test" />);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
