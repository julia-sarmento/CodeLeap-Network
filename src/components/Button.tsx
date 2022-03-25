import { ButtonHTMLAttributes } from "react";

import { Container } from "../styles/components/Button/styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  color?: 'black' | 'white';
}

export function Button({ children, color = 'black', ...rest }: ButtonProps) {
  return (
    <Container color={color} {...rest}>{children}</Container>
  )
}