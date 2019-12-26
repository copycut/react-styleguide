
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import Note from './Note';

describe('Note', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Note style={{ color: 'red' }}>test</Note>);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Note className="test">test</Note>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Note id="test">test</Note>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
