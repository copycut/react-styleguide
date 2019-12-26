import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ListGroupItem from './ListGroupItem';
import { spy } from 'sinon';

describe('ListGroupItem', () => {
  it('can be a heading', () => {
    const wrapper = shallow(<ListGroupItem heading="test" />);
    expect(wrapper.find('.rsg__listGroupItem__heading').exists()).to.be.equal(
      true
    );
  });

  it('can be a link', () => {
    const wrapper = shallow(<ListGroupItem href="#" />);
    expect(wrapper.find('.rsg__listGroupItem__link').exists()).to.be.equal(
      true
    );
  });

  it('overwrite style', () => {
    const wrapper = shallow(<ListGroupItem style={{ color: 'red' }} />);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<ListGroupItem className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must dispatch click action', () => {
    const mockClick = spy();
    const wrapper = shallow(<ListGroupItem onClick={mockClick} />);
    wrapper.simulate('click');
    expect(mockClick.calledOnce).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = shallow(<ListGroupItem id="test" />);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
