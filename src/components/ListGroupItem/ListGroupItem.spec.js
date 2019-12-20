import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import ListGroupItem from './ListGroupItem';
import sinon from 'sinon';

describe('ListGroupItem', () => {
  it('can be a heading', () => {
    const wrapper = render(<ListGroupItem heading="test" />);
    const heading = wrapper.find('.sg__listGroupItem__heading')[0];
    expect(heading.name).to.be.equal('h6');
  });

  it('can be a link', () => {
    const wrapper = render(<ListGroupItem href="#" />);
    const link = wrapper.find('.sg__listGroupItem__link')[0];
    expect(link.name).to.be.equal('a');
  });

  it('overwrite style', () => {
    const wrapper = render(<ListGroupItem style={{ color: 'red' }} />);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<ListGroupItem className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must dispatch click action', () => {
    const mockClick = sinon.spy();
    const wrapper = shallow(<ListGroupItem onClick={mockClick} />);
    wrapper.simulate('click');
    expect(mockClick.calledOnce).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<ListGroupItem id="test" />);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
