
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';

import Text from './Text';

describe('Text', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Text style={{ color: 'red' }}>test</Text>);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Text className="test">test</Text>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('can have a text color', () => {
    const wrapper = shallow(<Text color="primary">test</Text>);
    expect(wrapper.hasClass('sg__text--primary')).to.be.equal(true);
  });

  it('can have a text size', () => {
    const wrapper = shallow(<Text size="small">test</Text>);
    expect(wrapper.hasClass('sg__text--small')).to.be.equal(true);
  });

  it('can get content from text prop in place of children', () => {
    const wrapper = shallow(<Text text="test">test</Text>);
    expect(wrapper.text()).to.equal('test');
  });

  it('can get raw html content rendered', () => {
    const wrapper = shallow(<Text html='<p class="test">hello</p>' />);
    expect(
      wrapper
        .render()
        .find('.test')
        .text()
    ).to.equal('hello');
  });

  it('must add id', () => {
    const wrapper = render(<Text id="test">test</Text>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
