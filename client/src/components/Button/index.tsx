import { FC } from 'react';
import { children } from '../../types';

import './Button.scss'

interface ButtonProps {
  click: () => void,
  children: children,
  mode?: 'primary' | 'secondary',
}

const Button: FC<ButtonProps> = ({ click, mode = 'primary', children, }) => {
  return (
    <button className={`Button Button-${mode}`} onClick={click}>
      {children}
    </button>
  )
}

export default Button
