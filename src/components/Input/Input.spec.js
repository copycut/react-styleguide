import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import Input from './Input';

describe('Input', () => {
  it('overwrite style', () => {
    const wrapper = shallow(<Input style={{ color: 'red' }} />);
    expect(
      wrapper.find('.rsg__input__wrapper').prop('style').color
    ).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Input className="test" />);
    expect(wrapper.find('input').hasClass('test')).to.be.equal(true);
  });

  it('must dispatch onchange action', () => {
    const mockClick = spy();
    const wrapper = shallow(<Input onChange={mockClick} />);
    wrapper.find('input').simulate('change');
    expect(mockClick.called).to.be.equal(true);
  });

  it('can get every other input props provided', () => {
    const mockClick = spy();
    const wrapper = shallow(<Input onBlur={mockClick} />);
    wrapper.find('input').simulate('blur');
    expect(mockClick.called).to.be.equal(true);
  });

  it('can be a textarea', () => {
    const wrapper = shallow(<Input type="textarea" />);
    expect(wrapper.find('textarea').exists()).to.be.equal(true);
  });

  it('can have an error state', () => {
    const wrapper = shallow(<Input isError />);
    expect(wrapper.find('input').hasClass('rsg__input--error')).to.be.equal(
      true
    );
  });

  it('can have an error state message', () => {
    const wrapper = shallow(<Input isError errorMessage="test" />);
    expect(wrapper.find('.rsg__input__errorMessage').exists()).to.be.equal(
      true
    );
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
