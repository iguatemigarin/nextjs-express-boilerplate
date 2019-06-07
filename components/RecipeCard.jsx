import React from 'react'
import styled from 'styled-components'
import RecipeCard from '../ms_ui/src/components/RecipeCard'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.large};
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 455px;
`

const StyledRecipeCard = () =>
  <Wrapper>
    <Content>
      <RecipeCard
        mealType='MEAT'
        title='The Recipe'
        subtitle='Delicious recipe'
        image={{url: "https://mscdn.freetls.fastly.net/media/recipes/15838/main_photos/medium/ID3070_web-3fe5bd2128f695215d913687d4e0e249.jpg"}} />
    </Content>
  </Wrapper>

export default StyledRecipeCard
