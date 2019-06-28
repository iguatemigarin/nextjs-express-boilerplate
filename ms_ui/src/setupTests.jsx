import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { msTheme, dnTheme } from './themes/index';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

const mountWithTheme = (tree, theme = msTheme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return mount(tree, {
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  });
};

// Make functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.mountWithTheme = mountWithTheme;
global.toJSON = toJSON;
global.msTheme = msTheme;
global.dnTheme = dnTheme;

// Override .memo() to make test suite work, we don't care about internal usage of HOC
React.memo = component => component;
