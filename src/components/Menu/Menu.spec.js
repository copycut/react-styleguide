
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(
      <Menu style={{ backgroundColor: 'red' }}>test</Menu>
    );
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('background-color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Menu className="test">test</Menu>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Menu id="test">test</Menu>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
