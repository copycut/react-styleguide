import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import Rating from './Rating';
import sinon from 'sinon';

describe('Rating', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Rating style={{ color: 'red' }} />);

    const stylesArray = wrapper.children()[0].attribs.style.split(';');

    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Rating className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must return a rating value on click', () => {
    const mockFunction = sinon.spy();
    const wrapper = shallow(<Rating onRating={mockFunction} />);
    const getBoundingClientRect = () => {
      return { left: 0, width: 100 };
    };
    const event = {
      type: 'click',
      clientX: 1,
      target: { getBoundingClientRect }
    };

    wrapper.find('.sg__rating__slider').simulate('click', event);
    expect(mockFunction.called).to.be.equal(true);
    expect(mockFunction.calledWith(1));
  });

  it('must return a rating value on touch', () => {
    const mockFunction = sinon.spy();
    const wrapper = shallow(<Rating onRating={mockFunction} />);
    const getBoundingClientRect = () => {
      return { left: 0, width: 100 };
    };
    const event = {
      type: 'touchMove',
      touches: [{ clientX: 1 }],
      target: { getBoundingClientRect }
    };

    wrapper.find('.sg__rating__slider').simulate('touchStart');
    wrapper.find('.sg__rating__slider').simulate('touchMove', event);
    wrapper.find('.sg__rating__slider').simulate('touchEnd');
    expect(mockFunction.called).to.be.equal(true);
    expect(mockFunction.calledWith(1));
  });

  it('must return a rating value on mouse events', () => {
    const mockFunction = sinon.spy();
    const wrapper = shallow(<Rating onRating={mockFunction} />);
    const getBoundingClientRect = () => {
      return { left: 0, width: 100 };
    };
    const event = {
      type: 'mouseMove',
      clientX: 1,
      target: { getBoundingClientRect }
    };

    wrapper.find('.sg__rating__slider').simulate('mouseMove', event);
    wrapper.find('.sg__rating__slider').simulate('mouseDown');
    wrapper.find('.sg__rating__slider').simulate('mouseMove', event);
    wrapper.find('.sg__rating__slider').simulate('mouseUp');
    expect(mockFunction.called).to.be.equal(true);
    expect(mockFunction.calledWith(1));
  });

  it('must exit if no function exists', () => {
    const mockFunction = sinon.spy();
    const wrapper = shallow(<Rating />);
    wrapper.find('.sg__rating__slider').simulate('click', { type: 'click' });
    expect(mockFunction.notCalled).to.be.equal(true);
  });

  it('do nothing if isDisabled', () => {
    const mockFunction = sinon.spy();
    const wrapper = shallow(<Rating onRating={mockFunction} isDisabled />);
    wrapper.find('.sg__rating__slider').simulate('click', { type: 'click' });
    expect(mockFunction.notCalled).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Rating id="test" />);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
