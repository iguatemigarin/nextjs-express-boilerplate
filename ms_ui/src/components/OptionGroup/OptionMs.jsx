import PropTypes from 'prop-types';
import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import HiddenRadioButton from './HiddenRadioButton';

const Label = styled('label')`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.pepper_black_35};
  border-right: none;
  border-top: 6px solid ${props => props.theme.colors.pepper_black_15};
  box-shadow: 0 -1px 0 ${props => props.theme.colors.pepper_black_35};
  cursor: pointer;
  flex: 1;
  font: ${props => props.theme.fontScale.small} ${props => props.theme.fontFamilies.regular}
  margin: 0 0 25px;
  padding: 15px 0;
  text-align: center;

  ${props => props.checked && css`
    border-top-color: ${props.theme.colors.primary};
    font-family: ${props.theme.fontFamilies.demi};
  `}

  :first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  :last-child {
    border-right: 1px solid ${props => props.theme.colors.pepper_black_35};
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

const Option = ({
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

Option.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  checked: PropTypes.bool.isRequired,
  onChecked: PropTypes.func.isRequired,
};

export default memo(Option);
