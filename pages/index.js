import React, { Component } from 'react'
import styled from 'styled-components'
import RecipeCard from '../ms_ui/src/components/RecipeCard'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.pepper_black_35};
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 50px;
  text-align: center;
`

export default class Index extends Component {
  render () {
    console.log(this.props)

    return (
      <>
        <Title>Hello World!</Title>
        <RecipeCard image={{url: "https://mscdn.freetls.fastly.net/media/recipes/21160/main_photos/large/SKU1861_hero_BADGE-c744491a85d29f308b963ef36e1a0173.jpg"}} />
      </>
    )
  }
}
