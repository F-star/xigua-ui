import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../button';

describe('Button', () => {
  it('Button with children', () => {
    const text = 'confirm Btn';
    render(<Button>{text}</Button>);
    expect(screen.getByRole('button').innerHTML).toBe(text);
  });

  it('Button click', () => {
    let toggle = false;
    render(<Button onClick={() => { toggle = true; }} />);
    fireEvent.click(screen.getByRole('button'));
    expect(toggle).toBe(true);
  });

  it('Button with custom className', () => {
    const customCls = 'customBtn';
    render(<button className={customCls} />);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass(customCls);
  });
});
