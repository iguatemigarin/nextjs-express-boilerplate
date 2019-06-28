import PropTypes from 'prop-types';
import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import HiddenRadioButton from './HiddenRadioButton';

const Label = styled('label')`
  flex: 1;
  cursor: pointer;
  border-top: 2px solid ${props => props.theme.colors.primary};
  border-right: 2px solid ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.white};
  padding: 11px 0;
  text-align: center;
  font: ${props => props.theme.fontScale.small} ${props => props.theme.fontFamilies.regular};

  :hover, :focus {
    background-color: ${props => props.theme.colors.primary_15};
  }

  :first-child {
    border-left: 2px solid ${props => props.theme.colors.primary};
    border-top-left-radius: ${props => props.theme.borderRadius.normal};
    border-bottom-left-radius: ${props => props.theme.borderRadius.normal};
  }
  
  :last-child {
    border-top-right-radius: ${props => props.theme.borderRadius.normal};
    border-bottom-right-radius: ${props => props.theme.borderRadius.normal};
  }
  
  ${props => props.checked && css`
    background-color: ${props.theme.colors.primary_30};
    font-family: ${props.theme.fontFamilies.demi};
  `}
`;

const OptionDn = ({
  name,
  label,
  value,
  checked,
  onChecked,
}) => {
  const domId = [name, value].join('__');

  return (
    <Label htmlFor={domId} checked={checked} onChange={() => onChecked({ label, value })}>
      <HiddenRadioButton id={domId} name={name} value={value} />
      {label}
    </Label>
  );
};

OptionDn.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  checked: PropTypes.bool.isRequired,
  onChecked: PropTypes.func.isRequired,
};

export default memo(OptionDn);
