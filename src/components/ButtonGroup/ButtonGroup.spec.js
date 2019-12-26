import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '../../components/Button';
import ButtonGroup from '../ButtonGroup';

describe('ButtonGroup', () => {
  it('overwrite style when provided', () => {
    const wrapper = shallow(
      <ButtonGroup style={{ color: 'red' }}>
        <Button>test</Button>
      </ButtonGroup>
    );
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(
      <ButtonGroup className="test">
        <Button>test</Button>
      </ButtonGroup>
    );
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must add id', () => {
    const wrapper = shallow(
      <ButtonGroup id="test">
        <Button>test</Button>
      </ButtonGroup>
    );
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
