import { addDecorator, configure } from '@storybook/react';
import { msTheme, dnTheme } from '../src/themes/index';
import { select, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withInfo } from '@storybook/addon-info';

// configure info and knobs addons globally
addDecorator(withInfo);
addDecorator(withKnobs({
  escapeHTML: false
}));

// global theme decorator which makes it easier to swich between ms and dn themes
addDecorator(story => (
  <ThemeProvider theme={select('themes', { msTheme, dnTheme }, msTheme)}>
    {story()}
  </ThemeProvider>
));

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
