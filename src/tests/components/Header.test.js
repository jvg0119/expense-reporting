import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme'; 
// import toJson from 'enzyme-to-json';
import Header from '../../components/Header';

test('should render Header properly', () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // console.log('renderer >>> ', renderer.getRenderOutput());
  // expect(renderer.getRenderOutput()).toMatchSnapshot();

  const wrapper = shallow(<Header />)
  // expect(wrapper).toMatchSnapshot();
  // expect(toJson(wrapper)).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();
})
