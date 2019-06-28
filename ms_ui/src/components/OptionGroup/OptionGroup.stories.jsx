import { object } from '@storybook/addon-knobs';
import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { msTheme } from '../../themes/index';
import OptionGroup, { OptionGroupComponent } from '.';

// TODO: Move Storybook-only wrapper components somewhere to be reused
const Wrapper = styled.div`
  ${({ theme }) => `
    padding: 40px 0;
    background: ${theme.tonals.t30};
  `}
`;

// TODO: Replace with a CSS grid width, once available
const Content = styled.div`
  margin: 0 auto;
  max-width: 455px;
`;

const options = [
  { value: 0, label: 'Mon' },
  { value: 1, label: 'Tue' },
  { value: 2, label: 'Wed' },
  { value: 3, label: 'Thu' },
];

storiesOf('OptionGroup', module)
  .addDecorator(story => (
    <Wrapper theme={msTheme}>
      <Content>
        {story()}
      </Content>
    </Wrapper>
  ))
  .addParameters({
    info: {
      text: 'Button group component',
      propTables: [OptionGroupComponent],
      propTablesExclude: [Wrapper, Content, OptionGroup],
    },
  })
  .add('day picker', () => (
    <OptionGroup name="deliveryDay" options={object('options', options)} />
  ));
