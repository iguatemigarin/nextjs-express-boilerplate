import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Attribute = styled.li`
  ${({ theme }) => `
    background-color: ${theme.tonals.t30}
    border-radius: ${theme.pill.borderRadius}
    color: ${theme.tonals.black}
    font: ${theme.fontStyle.tiny}
    margin-top: 0
    margin-bottom: ${theme.spacings.small}
    margin-left: 0
    margin-right: ${theme.brand === 'ms' ? theme.spacings.small : theme.spacings.medium}
    padding-top: ${theme.spacings.small}
    padding-bottom: ${theme.spacings.small}
    padding-right: ${theme.brand === 'ms' ? theme.spacings.small : theme.spacings.medium}
    padding-left: ${theme.brand === 'ms' ? theme.spacings.small : theme.spacings.medium}
  `}
  display: inline-block
  text-transform: uppercase
  letter-spacing: 1px
  line-height: 1.5
`;

const AttributesList = styled.ul`
  padding-left: 0
  margin: 0
`;

const MealAttributeList = ({ attributes }) => (
  <AttributesList>
    {attributes.map(({ key, name }) => <Attribute key={key}>{name}</Attribute>)}
  </AttributesList>
);

MealAttributeList.propTypes = {
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

MealAttributeList.defaultProps = {
  attributes: [],
};

export default MealAttributeList;
