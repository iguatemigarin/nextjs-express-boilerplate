export const brand = 'ms';

export const fontFamilies = {
  regular: '"Avenir Regular", sans-serif;',
  medium: '"Avenir Medium", sans-serif;',
  demi: '"Avenir Demi", sans-serif;',
};

export const fontScale = {
  tiny: '10px/1.5',
  small: '14px/1.5',
  body: '16px/1.5',
  h1: '36px/1.5',
  h2: '32px/1.5',
  h3: '28px/1',
  h4: '24px/1.5',
  h5: '20px/0',
};

export const fontStyle = {
  tiny: `10px/1.5 ${fontFamilies.demi}`,
  small: `14px/1.5 ${fontFamilies.regular}`,
  body: `16px/1.5 ${fontFamilies.regular}`,
  h1: `36px/1.5 ${fontFamilies.medium}`,
  h2: `32px/1.5 ${fontFamilies.regular}`,
  h3: `28px/1 ${fontFamilies.medium}`,
  h4: `24px/1.5 ${fontFamilies.regular}`,
  h5: `20px/0 ${fontFamilies.medium}`,
};

export const colors = {
  black: '#2d2926',
  white: '#ffffff',
  mint_green: '#47d7ac',
  pepper_black_35: '#b1adab',
  pepper_black_15: '#dadad9',

  primary: '#47d7ac',
};

export const tonals = {
  t10: '#413b38',
  t20: '#716d6a',
  t30: '#f6f6f6',
};

export const spacings = {
  small: '5px',
  medium: '10px',
  large: '15px',
  mega: '15px',
};

export const borderRadius = {
  small: '4px',
  normal: '8px',
};

export const iconSizes = {
  small: '22px',
  large: '37px',
};

export const mealTypeIcons = {
  MEAT: '/images/ms/meat.svg',
  FISH: '/images/ms/fish.svg',
  VEGGIE: '/images/ms/veggie.svg',
};

export const pill = {
  borderRadius: 'none',
};
