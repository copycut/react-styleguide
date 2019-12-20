
import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import sinon from 'sinon';
import Dropdown from '../Dropdown';
import MenuItem from '../MenuItem';
import Link from '../Link';

describe('Dropdown', () => {
  it('can be open by click', () => {
    const wrapper = mount(<Dropdown label="test" />);
    expect(wrapper.state().isOpen).to.be.equal(false);
    expect(wrapper.find('.sg__dropdown--open').length).to.be.equal(0);

    wrapper.find('Button').simulate('click');
    expect(wrapper.state().isOpen).to.be.equal(true);
    expect(wrapper.find('.sg__dropdown--open').length).to.be.equal(1);
  });

  it('can be disabled', () => {
    const wrapper = mount(<Dropdown isDisabled label="test" />);
    expect(wrapper.state().isOpen).to.be.equal(false);
    wrapper.find('Button').simulate('click');
    expect(wrapper.state().isOpen).to.be.equal(false);
  });

  it('can be open by default', () => {
    const wrapper = mount(<Dropdown label="test" isOpen />);
    expect(wrapper.state().isOpen).to.be.equal(true);
    expect(wrapper.find('.sg__dropdown--open').length).to.be.equal(1);
  });

  it('can be close by click', () => {
    const wrapper = mount(<Dropdown label="test" isOpen />);
    wrapper.find('Button').simulate('click');
    expect(wrapper.state().isOpen).to.be.equal(false);
    expect(wrapper.find('.sg__dropdown--open').length).to.be.equal(0);
  });

  it('stay open after click when isKeptOpen provided', () => {
    const wrapper = mount(
      <Dropdown label="test" isKeptOpen isOpen>
        <MenuItem>test</MenuItem>
      </Dropdown>
    );
    wrapper.find('MenuItem').simulate('click');
    expect(wrapper.state().isOpen).to.be.equal(true);
  });

  it('overwrite style', () => {
    const wrapper = render(
      <Dropdown label="test" style={{ backgroundColor: 'red' }} />
    );
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('background-color:red')).to.be.not.equal(-1);
  });

  it('must add className', () => {
    const wrapper = mount(<Dropdown className="test" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must render child component', () => {
    const wrapper = mount(
      <Dropdown isOpen>
        <div className="test">test1</div>
      </Dropdown>
    );
    return expect(wrapper.find('.test')).to.exist;
  });

  it('must render string as menuItem with isHeader', () => {
    const wrapper = mount(<Dropdown isOpen>test</Dropdown>);
    expect(wrapper.find('MenuItem').length).to.be.equal(1);
  });

  it('must not render null children', () => {
    const wrapper = mount(<Dropdown isOpen>{null}</Dropdown>);
    expect(wrapper.find('MenuItem').length).to.be.equal(0);
  });

  it('must render multiples levels child components', () => {
    const wrapper = mount(
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
    const mockClick = sinon.spy();
    const wrapper = mount(
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
    const wrapper = mount(<Dropdown isOpen />);
    wrapper.simulate('keydown', { which: 27 });
    expect(wrapper.state().isOpen).to.be.equal(false);
  });

  it('must add id', () => {
    const wrapper = render(<Dropdown id="test">test</Dropdown>);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
