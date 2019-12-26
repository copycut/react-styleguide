import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import Dropdown from '../Dropdown';
import MenuItem from '../MenuItem';
import Link from '../Link';

describe('Dropdown', () => {
  it('can be open by click', () => {
    const wrapper = shallow(<Dropdown label="test" />);
    expect(wrapper.state().isOpen).to.be.equal(false);
    wrapper.find('Button').simulate('click');
    expect(wrapper.state().isOpen).to.be.equal(true);
  });

  it('can be disabled', () => {
    const wrapper = shallow(<Dropdown isDisabled label="test" />);
    wrapper.find('Button').simulate('click');
    expect(wrapper.state().isOpen).to.be.equal(false);
  });

  it('can be open by default', () => {
    const wrapper = shallow(<Dropdown label="test" isOpen />);
    expect(wrapper.state().isOpen).to.be.equal(true);
  });

  it('can be close by click', () => {
    const wrapper = shallow(<Dropdown label="test" isOpen />);
    wrapper.find('Button').simulate('click');
    expect(wrapper.state().isOpen).to.be.equal(false);
  });

  it('stay open after click when isKeptOpen provided', () => {
    const wrapper = shallow(
      <Dropdown label="test" isKeptOpen isOpen>
        <MenuItem>test</MenuItem>
      </Dropdown>
    );
    wrapper.find('MenuItem').simulate('click');
    expect(wrapper.state().isOpen).to.be.equal(true);
  });

  it('overwrite style', () => {
    const wrapper = shallow(<Dropdown label="test" style={{ color: 'red' }} />);
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(<Dropdown className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must render child component', () => {
    const wrapper = shallow(
      <Dropdown isOpen>
        <div className="test">test1</div>
      </Dropdown>
    );
    return expect(wrapper.find('.test')).to.exist;
  });

  it('must not render null children', () => {
    const wrapper = shallow(<Dropdown isOpen>{null}</Dropdown>);
    expect(wrapper.find('MenuItem').length).to.be.equal(0);
  });

  it('must render multiples levels child components', () => {
    const wrapper = shallow(
      <Dropdown isOpen>
        <MenuItem isHeader>test title</MenuItem>
        <MenuItem>
          <Link className="test" href="#">
            test1
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="test" href="#">
            test2
          </Link>
        </MenuItem>
      </Dropdown>
    );
    expect(wrapper.find('.test').length).to.be.equal(2);
  });

  it('can bind onClick function', () => {
    const mockClick = spy();
    const wrapper = shallow(
      <Dropdown isOpen label="label">
        <MenuItem className="test" onClick={mockClick}>
          item
        </MenuItem>
      </Dropdown>
    );
    wrapper.find('.test').simulate('click');
    expect(mockClick.calledOnce).to.be.equal(true);
  });

  it('click outside close the dropdown', () => {
    const wrapper = mount(<Dropdown isOpen />);
    const event = new window.Event('click');
    document.dispatchEvent(event);
    expect(wrapper.state().isOpen).to.be.equal(false);
    wrapper.unmount();
  });

  it('press Escape close the dropdown', () => {
    const wrapper = shallow(<Dropdown isOpen />);
    wrapper.simulate('keydown', { which: 27, preventDefault: () => {} });
    expect(wrapper.state().isOpen).to.be.equal(false);
  });

  it('must add id', () => {
    const wrapper = shallow(<Dropdown id="test">test</Dropdown>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
