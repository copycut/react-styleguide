
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import Panel from './Panel';

describe('Panel', () => {
  it('can have header', () => {
    const wrapper = render(<Panel header="test">test</Panel>);
    expect(wrapper.find('.sg__panel__title').length).to.be.equal(1);
  });

  it('can have footer', () => {
    const wrapper = render(<Panel footer="test">test</Panel>);
    expect(wrapper.find('.sg__panel__footer').length).to.be.equal(1);
  });

  it('overwrite style when provided', () => {
    const wrapper = render(
      <Panel style={{ backgroundColor: 'red' }}>test</Panel>
    );
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('background-color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Panel className="test">test</Panel>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Panel id="test">test</Panel>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
