// import { shallow, render, mount } from 'enzyme';  // eslint-disable-line
// global.shallow = shallow;
// global.render = render;
// global.mount = mount;

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};
