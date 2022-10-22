import { CSSProperties, forwardRef, MouseEvent } from 'react';
import classNames from 'classnames';
import './style.scss';

const clsPrefix = 'xigua-ui-btn';

export type ButtonProps = {
  type?: 'primary' | 'default'
  size?: 'large' | 'middle' | 'small';
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (event: MouseEvent) => void;
  style?: CSSProperties;
  className?: string;
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const {
    type = 'default',
    size = 'middle',
    loading = false,
    disabled = false,
    children,
    onClick,
    style,
    className,
  } = props;

  const mixedClassName = classNames(
    clsPrefix,
    `${clsPrefix}-${type}`,
    `${clsPrefix}-${size}`,
    className
  );

  return (
    <button
      ref={ref as any}
      style={style}
      className={mixedClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Button = forwardRef<unknown, ButtonProps>(InternalButton);

export default Button;
