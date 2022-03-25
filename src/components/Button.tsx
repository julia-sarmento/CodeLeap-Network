import { ButtonHTMLAttributes } from "react";
import { Container } from "../styles/components/Button/styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>{children}</Container>
  )
}