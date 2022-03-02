import React from 'react';
import './Button.scss';

interface IButtonProps {
  children: React.ReactNode,
  className?: string,
  loading?: boolean,
  click?: () => void,
  disabled?: boolean,
  type?: string,
  min?: boolean | undefined,
  large?: boolean | undefined,
  block?: boolean | undefined,
  outlined?: boolean | undefined,
  text?: boolean | undefined,
}

function Button(props: IButtonProps) {
  const {children, className, loading, click, disabled, type = 'primary', min, large, block, outlined, text} = props;

  function createClassName(props: any []): string {
    const propsName = ['disabled', 'min', 'large', 'block', 'outlined', 'text']
    let classList = `button button_${type} ${className}`;
    props.forEach((arg, i) => {
      if (arg) {
        classList = classList + ` button_${propsName[i]}`
      }
    })
    return classList;
  }

  return (
    <button
      type="button"
      className={createClassName([disabled, min, large, block, outlined, text])}
      onClick={click}
    >
      <span className={loading ? 'children_hide' : ''}>
        {children}
      </span>
      <span className={loading ? 'button__loader': ''}>
      </span>
    </button>
  );
}

export default Button;
