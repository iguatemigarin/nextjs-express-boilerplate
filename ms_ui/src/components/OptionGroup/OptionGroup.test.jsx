import OptionMs from './OptionMs';
import OptionDn from './OptionDn';
import OptionGroup from './OptionGroup';

let onSelectMock;
const exampleGroup = mockFn => (
  <OptionGroup
    name="deliveryDay"
    options={[
      { value: 0, label: 'Mon' },
      { value: 1, label: 'Tue' },
      { value: 2, label: 'Wed' },
      { value: 3, label: 'Thu' },
    ]}
    onSelect={mockFn}
  />
);

describe('OptionGroup', () => {
  beforeEach(() => {
    onSelectMock = jest.fn();
  });

  it('renders correctly with ms theme', () => {
    expect(toJSON(mountWithTheme(exampleGroup(onSelectMock), msTheme))).toMatchSnapshot();
  });

  it('renders correctly with dn theme', () => {
    expect(toJSON(mountWithTheme(exampleGroup(onSelectMock), dnTheme))).toMatchSnapshot();
  });

  it('renders a radio button per option', () => {
    const wrapper = mountWithTheme(exampleGroup(onSelectMock));
    expect(wrapper.find('input[type="radio"]')).toHaveLength(4);
  });

  it('renders a radio button per option with dn theme', () => {
    const wrapper = mountWithTheme(exampleGroup(onSelectMock), dnTheme);
    expect(wrapper.find('input[type="radio"]')).toHaveLength(4);
  });

  // FIXME: I don't really like how this test works. IMO we're testing internal structure with the
  // selection of an Option component. Ideally, we would properly mount the option group and select
  // the plain HTML input and check if it's checked. But this does not work with React and they say
  // it's intentional...
  // See here https://github.com/facebook/react/issues/4950
  it('selects first option as selected default', () => {
    const wrapper = mountWithTheme(exampleGroup(onSelectMock));
    expect(wrapper.find(OptionMs).filter({ value: 0 }).prop('checked')).toBe(true);
  });

  it('selects first option as selected default with dn theme', () => {
    const wrapper = mountWithTheme(exampleGroup(onSelectMock), dnTheme);
    expect(wrapper.find(OptionDn).filter({ value: 0 }).prop('checked')).toBe(true);
  });

  describe('user interaction', () => {
    let optionGroup;

    beforeEach(() => {
      optionGroup = mountWithTheme(exampleGroup(onSelectMock));
    });

    it('changes the selected item on click of the option', () => {
      expect(optionGroup.find(OptionMs).filter({ value: 2 }).prop('checked')).toBeFalsy();
      optionGroup.find(OptionMs).filter({ value: 2 }).simulate('change');
      expect(optionGroup.find(OptionMs).filter({ value: 2 }).prop('checked')).toBeTruthy();
    });

    it('calls the event handler on change', () => {
      optionGroup.find(OptionMs).filter({ value: 2 }).simulate('change');
      expect(onSelectMock).toBeCalledWith({ value: 2, label: 'Wed' });
    });
  });

  describe('user interaction with dn theme', () => {
    let optionGroup;

    beforeEach(() => {
      optionGroup = mountWithTheme(exampleGroup(onSelectMock), dnTheme);
    });

    it('changes the selected item on click of the option', () => {
      expect(optionGroup.find(OptionDn).filter({ value: 2 }).prop('checked')).toBeFalsy();
      optionGroup.find(OptionDn).filter({ value: 2 }).simulate('change');
      expect(optionGroup.find(OptionDn).filter({ value: 2 }).prop('checked')).toBeTruthy();
    });

    it('calls the event handler on change', () => {
      optionGroup.find(OptionDn).filter({ value: 2 }).simulate('change');
      expect(onSelectMock).toBeCalledWith({ value: 2, label: 'Wed' });
    });
  });
});
