import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import Button from '../../components/Button';
import ButtonGroup from '../ButtonGroup';

describe('ButtonGroup', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(
      <ButtonGroup style={{ backgroundColor: 'red' }}>
        <Button>test</Button>
      </ButtonGroup>
    );
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('background-color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = shallow(
      <ButtonGroup className="test">
        <Button>test</Button>
      </ButtonGroup>
    );
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must render the right amount of children when isBlock', () => {
    const wrapper = shallow(
      <ButtonGroup isBlock>
        {null}
        {undefined}
        {false}
        {''}
        {0}
        <Button isBlock>test1</Button>
        <Button isBlock>test2</Button>
        {0}
        {''}
        {false}
        {undefined}
        {null}
      </ButtonGroup>
    );
    expect(wrapper.hasClass('sg__buttonGroup--block--2')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = render(
      <ButtonGroup id="test">
        <Button>test</Button>
      </ButtonGroup>
    );
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
