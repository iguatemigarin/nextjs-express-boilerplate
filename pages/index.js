import React, { Component } from 'react'
import styled from 'styled-components'
import DeliveryDaySelector from '../components/DeliveryDaySelector'
import RecipeCard from '../components/RecipeCard'

const Wrapper = styled.div`
  margin: auto;
  padding: ${({ theme }) => theme.spacings.large};
  background: ${({ theme }) => theme.tonals.t30};
`

const Title = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font: ${({ theme }) => theme.fontStyle.h1};
  text-align: center;
`

export default class Index extends Component {
  render () {
    console.log(this.props)

    return (
      <Wrapper>
        <Title>This is a recipe card</Title>
        <DeliveryDaySelector />
        <RecipeCard />

      </Wrapper>
    )
  }
}
