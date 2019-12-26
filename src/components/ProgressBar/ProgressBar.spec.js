import React from 'react';
import { expect } from 'chai';
import { render, shallow, mount } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(
      <ProgressBar style={{ color: 'red' }}>test</ProgressBar>
    );
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<ProgressBar className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must return a percentage', () => {
    const wrapper = mount(
      <ProgressBar current={30} total={100} labelPosition="left" />
    );
    expect(wrapper.find('.sg__progressBar__percentage').text()).to.be.equal(
      '30%'
    );
  });

  it('must return a label', () => {
    const wrapper = mount(
      <ProgressBar current={30} total={100} labelPosition="left" label="test" />
    );
    expect(wrapper.find('.sg__progressBar__label').text()).to.be.equal('test');
  });

  it('must add id', () => {
    const wrapper = render(<ProgressBar id="test" />);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
