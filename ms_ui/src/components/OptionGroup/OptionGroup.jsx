import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import OptionMs from './OptionMs';
import OptionDn from './OptionDn';

const Wrapper = styled.div`
  display: flex;
`;

function selectDefaultOption(options = []) {
  return options.length > 0 ? options[0] : null;
}

function OptionGroup({
  name,
  options,
  onSelect,
  theme,
}) {
  const [selected, setSelected] = useState(selectDefaultOption(options));

  function onChecked(option) {
    setSelected(option);
    onSelect(option);
  }

  const Option = theme.brand === 'ms' ? OptionMs : OptionDn;

  return (
    <Wrapper>
      {
        options.map((option) => {
          const checked = selected.value === option.value;
          return (
            <Option
              key={option.value}
              name={name}
              checked={checked}
              onChecked={onChecked}
              {...option}
            />
          );
        })
      }
    </Wrapper>
  );
}

OptionGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.node.isRequired,
  })),
  onSelect: PropTypes.func,
  theme: PropTypes.shape({ brand: PropTypes.string }).isRequired,
};

OptionGroup.defaultProps = {
  options: [],
  onSelect: () => {},
};

export const OptionGroupComponent = OptionGroup;
export default withTheme(OptionGroup);
