import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../button';

describe('Button', () => {
  test('Button with children', () => {
    const text = 'confirm Btn';
    render(<Button>{text}</Button>);

    const BtnElement = screen.getByText(text);
    expect(BtnElement).toBeInTheDocument();
  });

  test('Button click', () => {
    let toggle = false;
    render(<Button onClick={() => { toggle = true; }} />);
    fireEvent.click(screen.getByRole('button'));
    expect(toggle).toBe(true);
  });

  test('Button with custom className', () => {
    const customCls = 'customBtn';
    render(<button className={customCls} />);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass(customCls);
  });
});
