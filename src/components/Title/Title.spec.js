import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';

import Title from './Title';

describe('Title', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Title style={{ color: 'red' }}>test</Title>);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Title className="test">test</Title>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must be a valid html tag', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.type()).to.be.equal('div');
  });

  it('must be a valid title tag', () => {
    const wrapper = shallow(<Title level={1} />);
    expect(wrapper.type()).to.be.equal('h1');
  });

  it('must add id', () => {
    const wrapper = render(<Title id="test" />);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
