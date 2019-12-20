
import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import Icon from './Icon';

describe('Icon', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(<Icon icon="star" style={{ fill: 'red' }} />);
    const stylesArray = wrapper.children()[0].attribs.style.split(';');
    expect(stylesArray.indexOf('fill:red')).to.be.not.equal(-1);
  });

  it('do not render if no icon prop provided', () => {
    const wrapper = shallow(<Icon />);
    expect(wrapper.type()).to.be.equal(null);
  });

  it('must add className', () => {
    const wrapper = mount(<Icon className="test" icon="star" />);
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('must render inline svg', () => {
    const triangle =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">' +
      '<path d="M0 5h25L12.5 20.106"/>' +
      '</svg>';
    const wrapper = mount(<Icon icon={triangle} className="test" />);
    expect(
      wrapper
        .render()
        .find('.test')
        .html()
        .trim()
    ).to.be.equal(
      '<div><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 25 25">' +
        '<path d="M0 5h25L12.5 20.106"/></svg></div>'
    );
  });

  it('must render custom icons from path', () => {
    const square = 'M50,50 L100,100';
    const wrapper = mount(<Icon path={square} />);
    expect(wrapper.find('path').props().d).to.be.equal(square);
  });

  it('must add id', () => {
    const wrapper = render(<Icon icon="star" id="test" />);
    expect(wrapper.children()[0].attribs.id).to.be.equal('test');
  });
});
