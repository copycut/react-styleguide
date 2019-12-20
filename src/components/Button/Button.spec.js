import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './Button';
import Icon from '@styleguide/src/elements/Icon';

describe('Button', () => {
  it('must be rendered as a button element', () => {
    const wrapper = render(<Button>test</Button>);
    expect(wrapper.children()[0].name).to.equal('button');
  });

  it('became a link with href', () => {
    const wrapper = render(<Button href="#">test</Button>);
    expect(wrapper.children()[0].name).to.equal('a');
  });

  it('must render icon', () => {
    const wrapper = shallow(
      <Button href="#" icon="star">
        test
      </Button>
    );
    expect(wrapper.find(Icon)).to.have.length(1);
  });

  it('overwrite style', () => {
    const wrapper = render(<Button style={{ color: 'red' }}>test</Button>);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Button className="test">test</Button>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must dispatch click action', () => {
    const mockClick = sinon.spy();
    const wrapper = shallow(<Button onClick={mockClick}>test</Button>);
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(true);
  });

  it('must dispatch focus action', () => {
    const mockFocus = sinon.spy();
    const wrapper = shallow(<Button onFocus={mockFocus}>test</Button>);
    wrapper.simulate('focus');
    expect(mockFocus.called).to.be.equal(true);
  });

  it('must dispatch blur action', () => {
    const mockBlur = sinon.spy();
    const wrapper = shallow(<Button onBlur={mockBlur}>test</Button>);
    wrapper.simulate('blur');
    expect(mockBlur.called).to.be.equal(true);
  });

  it('must not dispatch click action when disabled', () => {
    const mockClick = sinon.spy();
    const wrapper = shallow(
      <Button isDisabled onClick={mockClick}>
        test
      </Button>
    );
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(false);
  });

  it('must not dispatch focus action when disabled', () => {
    const mockFocus = sinon.spy();
    const wrapper = shallow(
      <Button isDisabled onFocus={mockFocus}>
        test
      </Button>
    );
    wrapper.simulate('focus');
    expect(mockFocus.called).to.be.equal(false);
  });

  it('must not dispatch blur action when disabled', () => {
    const mockBlur = sinon.spy();
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
    const wrapper = render(<Button id="test">test</Button>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
