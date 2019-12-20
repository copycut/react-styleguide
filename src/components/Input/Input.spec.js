
import React from 'react';
import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
import Input from './Input';

describe('Input', () => {
  it('overwrite style', () => {
    const wrapper = render(<Input style={{ color: 'red' }} />);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = mount(<Input className="test" />);
    expect(wrapper.find('input').hasClass('test')).to.be.equal(true);
  });

  it('must dispatch onchange action', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(<Input onChange={mockClick} />);
    wrapper.find('input').simulate('change');
    expect(mockClick.called).to.be.equal(true);
  });

  it('can get every other input props provided', () => {
    const mockClick = sinon.spy();
    const wrapper = mount(<Input onBlur={mockClick} />);
    wrapper.find('input').simulate('blur');
    expect(mockClick.called).to.be.equal(true);
  });

  it('can be a textarea', () => {
    const wrapper = mount(<Input type="textarea" />);
    expect(wrapper.find('textarea').exists()).to.be.equal(true);
  });

  it('can have an error state', () => {
    const wrapper = mount(<Input isError />);
    expect(wrapper.find('input').hasClass('sg__input--error')).to.be.equal(
      true
    );
  });

  it('can have an error state message', () => {
    const wrapper = mount(<Input isError errorMessage="test" />);
    expect(wrapper.find('.sg__input__errorMessage').exists()).to.be.equal(true);
  });

  it('must add id on input', () => {
    const wrapper = shallow(<Input id="test" />);
    expect(wrapper.find('input').prop('id')).to.be.equal('test');
  });

  it('must add id on textarea', () => {
    const wrapper = shallow(<Input id="test" type="textarea" />);

    expect(wrapper.find('textarea').prop('id')).to.be.equal('test');
  });
});
