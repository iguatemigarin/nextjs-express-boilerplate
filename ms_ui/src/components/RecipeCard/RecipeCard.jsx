// can we scope down what we require e.g. React.Component only
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import RecipeImage from './RecipeImage';
import MealAttributeList from './MealAttributeList';

const Card = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius.normal};
`;

const RecipeInfo = styled('div')`
  padding: ${props => props.theme.spacings.large}
  background-color: ${props => props.theme.colors.white}
`;

const RecipeTitle = styled('h2')`
  color: ${props => props.theme.colors.black}
  font: ${props => props.theme.fontStyle.h5}
`;

const RecipeSubtitle = styled('div')`
  font: ${props => props.theme.fontStyle.body}
  margin: 0 0 15px
  color: ${props => props.theme.tonals.t10}
`;

class RecipeCard extends React.Component {
  constructor(...args) {
    super(...args);
    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick() {
    const { onCardClick } = this.props;
    onCardClick();
  }

  render() {
    const {
      image,
      mealType,
      title,
      subtitle,
      attributes,
    } = this.props;

    return (
      <Card onClick={this.onCardClick}>
        <RecipeImage src={image.url} mealType={mealType} alt={title} />
        <RecipeInfo>
          <RecipeTitle>{title}</RecipeTitle>
          <RecipeSubtitle>{subtitle}</RecipeSubtitle>
          <MealAttributeList attributes={attributes} />
        </RecipeInfo>
      </Card>
    );
  }
}

// Why pass an image object? This could just be imageUrl
RecipeCard.propTypes = {
  onCardClick: PropTypes.func,
  image: PropTypes.shape({ url: PropTypes.string }).isRequired,
  mealType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

RecipeCard.defaultProps = {
  onCardClick: () => {},
  attributes: [],
};

export default RecipeCard;
