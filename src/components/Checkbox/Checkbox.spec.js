
import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import sinon from 'sinon';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('can be default checked', () => {
    const wrapper = mount(<Checkbox isChecked />);
    expect(wrapper.props().isChecked).to.be.equal(true);
  });

  it('click on disabled checkbox do nothing', () => {
    const mockClick = sinon.spy();
    const mockChange = sinon.spy();
    const wrapper = mount(
      <Checkbox
        isDisabled
        isChecked={false}
        onClick={mockClick}
        onChange={mockChange}
      />
    );
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(false);
    expect(mockChange.called).to.be.equal(false);
    expect(wrapper.props().isChecked).to.be.equal(false);
  });

  it('must provide onClick or onChange to get value', () => {
    const mockClick = sinon.spy();
    const mockChange = sinon.spy();
    const wrapper = mount(<Checkbox />);
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(false);
    expect(mockChange.called).to.be.equal(false);
  });

  it('click dispatch onClick with value', () => {
    const mockChange = sinon.spy();
    const mockClick = sinon.spy();
    const wrapper = mount(
      <Checkbox onClick={mockClick} onChange={mockChange} />
    );
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(true);
    expect(mockChange.called).to.be.equal(true);
  });

  it('must provide the label', () => {
    const wrapper = mount(<Checkbox label="test" />);
    expect(wrapper.find('.sg__checkbox__label').exists()).to.be.equal(true);
  });

  it('overwrite style', () => {
    const wrapper = render(<Checkbox style={{ color: 'red' }} />);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = mount(<Checkbox className="test">test</Checkbox>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Checkbox id="test">test</Checkbox>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
