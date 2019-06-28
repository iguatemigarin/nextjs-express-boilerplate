import { storiesOf } from '@storybook/react';
import {
  boolean,
  object,
  radios,
  select,
  text,
} from '@storybook/addon-knobs';
import React from 'react';
import styled from 'styled-components';
import RecipeCard from '.';
import { msTheme } from '../../themes/index';

const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    padding: 40px 0;
    background: ${theme.tonals.t30};
  `}
`;

const Content = styled.div`
  max-width: 455px;
`;

storiesOf('RecipeCard', module)
  .addDecorator(story => (
    <Wrapper theme={msTheme}>
      <Content>
        {story()}
      </Content>
    </Wrapper>
  ))
  .addParameters({
    info: {
      text: 'Recipe card story',
      propTablesExclude: [Wrapper, Content],
    },
  })
  .add('with text', () => {
    const img1 = { url: 'https://mscdn.freetls.fastly.net/media/recipes/15838/main_photos/medium/ID3070_web-3fe5bd2128f695215d913687d4e0e249.jpg' };
    const img2 = { url: 'https://mscdn.freetls.fastly.net/media/recipes/17636/main_photos/medium/D127_Hero_2-ab0dc0eefada26fa0d09279ea60c2950.jpg' };

    const imageKnob = select('image', { img1, img2 }, img1);
    const titleKnob = text('title', 'Just Fry It');
    const subtitleKnob = text('subtitle', 'Subtitle It');
    const isClassicKnob = boolean('isClasic', false);
    const attributesKnob = object('attributes', [
      { key: 'kid_friendly', name: 'kinderfreundlich' },
      { key: 'healthy_choice', name: 'Fit & Gesund' },
      { key: 'poultry', name: 'Geflügel' },
      { key: 'no_gluten_ingredients', name: 'glutenarm' },
    ]);
    const mealTypeKnob = radios('mealType', { meat: 'MEAT', veggie: 'VEGGIE' }, 'MEAT');

    return (
      <RecipeCard
        image={imageKnob}
        title={titleKnob}
        subtitle={subtitleKnob}
        isClassic={isClassicKnob}
        attributes={attributesKnob}
        mealType={mealTypeKnob}
      />
    );
  });
