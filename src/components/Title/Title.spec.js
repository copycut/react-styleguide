
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';

import Title from './Title';

describe('Title', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Title style={{ color: 'red' }}>test</Title>);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Title className="test">test</Title>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must be a valid html tag', () => {
    const wrapper = shallow(<Title level />);
    expect(wrapper.type()).to.be.equal('div');
  });

  it('must be a valid title tag', () => {
    const wrapper = shallow(<Title level={1} />);
    expect(wrapper.type()).to.be.equal('h1');
  });

  it('must add id', () => {
    const wrapper = render(<Title id="test" />);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
