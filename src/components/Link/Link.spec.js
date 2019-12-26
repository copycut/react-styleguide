import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import { spy } from 'sinon';
import Link from './Link';

describe('Link', () => {
  it('overwrite style when provided', () => {
    const wrapper = render(
      <Link href="#" style={{ color: 'red' }}>
        test
      </Link>
    );
    expect(wrapper.prop('style').color).to.be.equal('red');
  });

  it('must add className', () => {
    const wrapper = shallow(
      <Link href="#" className="test">
        test
      </Link>
    );
    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('click action is trigger', () => {
    const mockClick = spy();
    const wrapper = shallow(<Link onClick={mockClick}>test</Link>);
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(true);
  });

  it('click prevented when disabled', () => {
    const mockClick = spy();
    const wrapper = shallow(
      <Link href="#test" isDisabled onClick={mockClick}>
        test
      </Link>
    );
    wrapper.simulate('click');
    expect(mockClick.called).to.be.equal(false);
  });

  it('must add id', () => {
    const wrapper = render(<Link id="test">test</Link>);
    expect(wrapper.prop('id')).to.be.equal('test');
  });
});
