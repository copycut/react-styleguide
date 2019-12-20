import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import sinon from 'sinon';
import Alert from './Alert';

describe('Alert', () => {
  it('must add a close icon when dismissible', () => {
    const wrapper = shallow(<Alert isDismissible>test</Alert>);
    expect(wrapper.find('Icon')).to.have.length(1);
  });

  it('must dispatch action when click', () => {
    const mockClick = sinon.spy();
    const wrapper = shallow(
      <Alert isDismissible onDismiss={mockClick}>
        test
      </Alert>
    );
    wrapper.find('Button').simulate('click');
    expect(mockClick.calledOnce).to.be.equal(true);
  });

  it('must render icon', () => {
    const wrapper = shallow(<Alert icon="pin">test</Alert>);
    expect(wrapper.find('Icon')).to.have.length(1);
  });

  it('must get the color className', () => {
    const wrapper = shallow(<Alert color="primary">test</Alert>);
    expect(wrapper.node.props.className).to.include('primary');
  });

  it('overwrite style when provided', () => {
    const wrapper = render(<Alert style={{ color: 'red' }}>test</Alert>);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(<Alert className="test">test</Alert>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Alert id="test">test</Alert>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
