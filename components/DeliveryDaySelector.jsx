import React from 'react'
import styled from 'styled-components'
import OptionGroup from '../ms_ui/src/components/OptionGroup'

const Wrapper = styled.div`
 padding: ${({ theme }) => theme.spacings.large};
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 455px;
`

const options = [
  { value: 0, label: 'Mon' },
  { value: 1, label: 'Tue' },
  { value: 2, label: 'Wed' },
  { value: 3, label: 'Thu' },
]

const DeliveryDaySelector = () =>
  <Wrapper>
    <Content>
    <OptionGroup name='deliveryDay' options={options} />
    </Content>
  </Wrapper>

export default DeliveryDaySelector
