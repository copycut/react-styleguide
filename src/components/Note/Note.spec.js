
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import Note from './Note';

describe('Note', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Note style={{ color: 'red' }}>test</Note>);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Note className="test">test</Note>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Note id="test">test</Note>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
