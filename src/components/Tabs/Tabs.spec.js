import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import Tabs from './Tabs';
import Tab from '../../components/Tab';
import sinon from 'sinon';

describe('Tabs', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(
      <Tabs style={{ backgroundColor: 'red' }}>
        <Tab title="tab">Tab</Tab>
      </Tabs>
    );
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('background-color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = mount(
      <Tabs className="test">
        {null}
        <Tab title="tab">Tab</Tab>
      </Tabs>
    );
    wrapper
      .find('.sg__tabs__button')
      .at(0)
      .simulate('click');
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('dispatch tabActive when clicked', () => {
    const mockClick = sinon.spy();
    const mockChange = sinon.spy();
    const wrapper = mount(
      <Tabs onClick={mockClick} onChange={mockChange}>
        <Tab title="first">First</Tab>
        <Tab title="second">Second</Tab>
      </Tabs>
    );
    wrapper
      .find('.sg__tabs__button')
      .at(1)
      .simulate('click');
    expect(mockClick.called).to.be.equal(true);
    expect(mockChange.called).to.be.equal(true);
    expect(mockClick.args[0][0]).to.be.equal(1);
    expect(mockChange.args[0][0]).to.be.equal(1);
  });

  it('must add id', () => {
    const wrapper = render(
      <Tabs id="test">
        <Tab title="tab">Tab</Tab>
      </Tabs>
    );
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
