import RecipeCard from './RecipeCard';

const onCardClickMock = jest.fn();
const exampleCard = (
  <RecipeCard
    image={{ url: 'https://mscdn.freetls.fastly.net/media/recipes/12295/main_photos/medium/ID0723_web-cc638b0227eefd29aab6c0e71a930475.jpg' }}
    title="Just Fry It MS"
    subtitle="Subtitle for MS"
    isClassic={false}
    attributes={[
      { key: 'kid_friendly', name: 'kinderfreundlich' },
      { key: 'healthy_choice', name: 'Fit & Gesund' },
      { key: 'poultry', name: 'Geflügel' },
      { key: 'no_gluten_ingredients', name: 'glutenarm' },
    ]}
    mealType="MEAT"
    onCardClick={onCardClickMock}
  />
);

describe('RecipeCard', () => {
  it('renders correctly with ms theme', () => {
    expect(toJSON(mountWithTheme(exampleCard, msTheme))).toMatchSnapshot();
  });

  it('renders correctly with dn theme', () => {
    expect(toJSON(mountWithTheme(exampleCard, dnTheme))).toMatchSnapshot();
  });

  it('it calls the correct event handler when clicking the card', () => {
    shallow(exampleCard).simulate('click');
    expect(onCardClickMock).toHaveBeenCalledTimes(1);
  });
});
