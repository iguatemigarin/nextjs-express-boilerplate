import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const MealType = styled.div`
  ${({ theme, mealType }) => `
      background-image: url(${theme.mealTypeIcons[mealType]})}
      top: ${theme.spacings.mega}
      right: ${theme.spacings.mega}
      width: ${theme.iconSizes.large}
      height: ${theme.iconSizes.large}
  `}
  position: absolute
  border-radius: 50%
`;

const MealTypeIcon = ({ mealType }) => (
  <MealType mealType={mealType} />
);

MealTypeIcon.propTypes = {
  mealType: PropTypes.string.isRequired,
};

export default MealTypeIcon;
