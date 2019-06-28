import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// TODO: Refactor with "as" polymorphic prop from Styled Components 4
// https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
const Input = styled('input')`
  position: absolute !important;
  height: 1px; width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

const HiddenRadioButton = ({ id, name, value }) => (
  <Input type="radio" id={id} name={name} value={value} />
);

HiddenRadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
};

export default HiddenRadioButton;
