export const brand = 'dn';

export const fontFamilies = {
  regular: '"Galano Grotesque Regular", sans-serif;',
  medium: '"Galano Grotesque Medium", sans-serif;',
  demi: '"Galano Grotesque Medium", sans-serif;',
  oldDemi: '"Dunbar Tall Medium", sans-serif;',
};

export const fontScale = {
  tiny: '10px/1.5',
  small: '14px/1.5',
  body: '16px/1.5',
  h1: '44px/1',
  h2: '32px/1.3',
  h3: '24px/1',
  h4: '24px/1.5',
  h5: '24px/0',
};

export const fontStyle = {
  tiny: `10px/1.5 ${fontFamilies.medium}`,
  small: `14px/1.5 ${fontFamilies.regular}`,
  body: `16px/1.5 ${fontFamilies.regular}`,
  h1: `44px/1 ${fontFamilies.demi}`,
  h2: `32px/1.3 ${fontFamilies.demi}`,
  h3: `24px/1 ${fontFamilies.demi}`,
  h4: `24px/1.5 ${fontFamilies.regular}`,
  h5: `24px/0 ${fontFamilies.medium}`,
};

export const colors = {
  black: '#3a3a3a',
  white: '#ffffff',
  mint_green: '#47d7ac',
  pepper_black_35: '#b1adab',
  pepper_black_15: '#dadad9',
  primary: '#21bbb1',
  primary_15: '#def5f4',
  primary_30: '#bceae7',
};

export const tonals = {
  t10: '#747475',
  t20: '#b9b9ba',
  t30: '#f4f2f9',
};

export const spacings = {
  small: '5px',
  medium: '10px',
  large: '15px',
  mega: '20px',
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
  MEAT: '/images/dn/meat.svg',
  FISH: '/images/dn/fish.svg',
  VEGGIE: '/images/dn/veggie.svg',
};

export const mealAttribute = {
  margin: `0 ${spacings.medium} ${spacings.medium} 0`,
  color: `${colors.black}`,
};

export const pill = {
  borderRadius: '100px',
};
