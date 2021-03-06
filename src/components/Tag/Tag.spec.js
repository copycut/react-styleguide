import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import { spy } from 'sinon';
import Tag from './Tag';

describe('Tag', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Tag style={{ color: 'red' }}>test</Tag>);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Tag className="test">test</Tag>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('can be clicked', () => {
    const mockClick = spy();
    const wrapper = shallow(<Tag onClick={mockClick}>test</Tag>);
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(true);
  });

  it('can be close', () => {
    const mockClick = spy();
    const wrapper = shallow(
      <Tag isDismissible onClose={mockClick}>
        test
      </Tag>
    );
    wrapper.find('Button').simulate('click');
    expect(mockClick.called).to.be.equal(true);
  });

  it('cannot be clicked when disabled', () => {
    const mockClick = spy();
    const wrapper = shallow(
      <Tag onClick={mockClick} isDisabled>
        test
      </Tag>
    );
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(false);
  });

  it('cannot be close when disabled', () => {
    const mockClick = spy();
    const wrapper = shallow(
      <Tag onClose={mockClick} isDisabled isDismissible>
        test
      </Tag>
    );
    wrapper.find('Button').simulate('click');
    expect(mockClick.called).to.be.equal(false);
  });

  it('must add id', () => {
    const wrapper = render(<Tag id="test">test</Tag>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
