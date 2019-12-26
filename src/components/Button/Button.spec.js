import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import Button from './Button';
import Icon from '@styleguide/src/elements/Icon';

describe('Button', () => {
  it('must be rendered as a BUTTON element by default', () => {
    const wrapper = shallow(<Button>test</Button>);
    expect(wrapper.name()).to.equal('button');
  });

  it('must be rendered as a A element with href', () => {
    const wrapper = shallow(<Button href="#">test</Button>);
    expect(wrapper.name()).to.equal('a');
  });

  it('must render icon', () => {
    const wrapper = shallow(
      <Button href="#" icon="star">
        test
      </Button>
    );
    expect(wrapper.find(Icon)).to.have.lengthOf(1);
  });

  it('overwrite style', () => {
    const wrapper = shallow(<Button style={{ color: 'red' }}>test</Button>);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Button className="test">test</Button>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must dispatch click action', () => {
    const mockClick = spy();
    const wrapper = shallow(<Button onClick={mockClick}>test</Button>);
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(true);
  });

  it('must dispatch focus action', () => {
    const mockFocus = spy();
    const wrapper = shallow(<Button onFocus={mockFocus}>test</Button>);
    wrapper.simulate('focus');
    expect(mockFocus.called).to.be.equal(true);
  });

  it('must dispatch blur action', () => {
    const mockBlur = spy();
    const wrapper = shallow(<Button onBlur={mockBlur}>test</Button>);
    wrapper.simulate('blur');
    expect(mockBlur.called).to.be.equal(true);
  });

  it('must not dispatch click action when disabled', () => {
    const mockClick = spy();
    const wrapper = shallow(
      <Button isDisabled onClick={mockClick}>
        test
      </Button>
    );
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(false);
  });

  it('must not dispatch focus action when disabled', () => {
    const mockFocus = spy();
    const wrapper = shallow(
      <Button isDisabled onFocus={mockFocus}>
        test
      </Button>
    );
    wrapper.simulate('focus');
    expect(mockFocus.called).to.be.equal(false);
  });

  it('must not dispatch blur action when disabled', () => {
    const mockBlur = spy();
    const wrapper = shallow(
      <Button isDisabled onBlur={mockBlur}>
        test
      </Button>
    );
    wrapper.simulate('focus');
    wrapper.simulate('blur');
    expect(mockBlur.called).to.be.equal(false);
  });

  it('must add id', () => {
    const wrapper = shallow(<Button id="test">test</Button>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
