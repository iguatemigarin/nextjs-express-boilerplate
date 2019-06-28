import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import MealTypeIcon from './MealTypeIcon';

const RecipeImageContainer = styled.div`
  position: relative
  height: auto
`;

const Image = styled.img`
  display: block
`;

const RecipeImage = ({ alt, mealType, src }) => (
  <RecipeImageContainer>
    <MealTypeIcon mealType={mealType} />
    <Image src={src} alt={alt} />
  </RecipeImageContainer>
);

RecipeImage.propTypes = {
  alt: PropTypes.string.isRequired,
  mealType: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default RecipeImage;
