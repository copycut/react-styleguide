import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import { spy } from 'sinon';
import Alert from './Alert';

describe('Alert', () => {
  it('must add a close icon when dismissible', () => {
    const wrapper = shallow(<Alert isDismissible>test</Alert>);
    expect(wrapper.find('Icon')).to.have.lengthOf(1);
  });

  it('must dispatch action when click', () => {
    const mockClick = spy();
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

  it('must get the color', () => {
    const wrapper = shallow(<Alert color="primary">test</Alert>);
    const props = wrapper.props();
    expect(props.className).to.include('primary');
  });

  it('overwrite style', () => {
    const wrapper = shallow(<Alert style={{ color: 'red' }}>test</Alert>);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Alert className="test">test</Alert>);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(<Alert id="test">test</Alert>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
