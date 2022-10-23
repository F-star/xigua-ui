import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('Button with children', () => {
    const text = 'confirm';
    const btn = shallow(<Button>{text}</Button>);
    expect(btn.text()).toBe(text);
  });

  it('Button click', () => {
    let toggle = false;
    const btn = shallow(<Button onClick={() => { toggle = true; }} />);
    btn.simulate('click');
    expect(toggle).toBe(true);
  });

  it('Button with custom className', () => {
    const customCls = 'customBtn';
    const btn = shallow(<button className={customCls} />);
    expect(btn.hasClass(customCls)).toEqual(true);
  });
});
