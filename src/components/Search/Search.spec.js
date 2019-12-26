import React from 'react';
import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';
import { spy } from 'sinon';
import Search from './Search';

describe('Search', () => {
  it('must return inputed search string when change', () => {
    const mockChange = spy();
    const wrapper = mount(<Search onChange={mockChange} />);
    wrapper.find('input').node.value = 'test';
    wrapper.find('input').simulate('change');
    expect(mockChange.args[0][0]).to.be.equal('test');
  });

  it('overwrite style', () => {
    const mockChange = spy();
    const wrapper = render(<Search style={{ color: 'red' }} />);
    expect(wrapper.prop('style').color).to.be.equal('red');
    expect(mockChange.called).to.be.equal(false);
  });

  it('onChange func must be provided', () => {
    const mockChange = spy();
    const wrapper = mount(<Search />);
    wrapper.find('input').node.value = 'test';
    wrapper.find('input').simulate('change');
    expect(mockChange.called).to.be.equal(false);
  });

  it('must add className', () => {
    const wrapper = mount(<Search className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = shallow(<Search id="test" />);
    const input = wrapper.last();
    expect(input.prop('id')).to.be.equal('test');
  });
});
