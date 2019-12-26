import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import { spy } from 'sinon';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('can be default checked', () => {
    const wrapper = mount(<Checkbox isChecked />);
    expect(wrapper.props().isChecked).to.be.equal(true);
  });

  it('click on disabled checkbox do nothing', () => {
    const mockClick = spy();
    const mockChange = spy();
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
    const mockClick = spy();
    const mockChange = spy();
    const wrapper = mount(<Checkbox />);
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(false);
    expect(mockChange.called).to.be.equal(false);
  });

  it('click dispatch onClick with value', () => {
    const mockChange = spy();
    const mockClick = spy();
    const wrapper = mount(
      <Checkbox onClick={mockClick} onChange={mockChange} />
    );
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(true);
    expect(mockChange.called).to.be.equal(true);
  });

  it('must provide the label', () => {
    const wrapper = mount(<Checkbox label="test" />);
    expect(wrapper.find('.rsg__checkbox__label').exists()).to.be.equal(true);
  });

  it('overwrite style', () => {
    const wrapper = render(<Checkbox style={{ color: 'red' }} />);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = mount(<Checkbox className="test">test</Checkbox>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Checkbox id="test">test</Checkbox>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
