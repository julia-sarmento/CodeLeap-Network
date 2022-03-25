import styled, { css } from 'styled-components';

type ButtonProps = {
  color: 'black' | 'white';
}

export const Container = styled.button<ButtonProps>`
  margin-top: 1.25rem;
  width: fit-content;
  align-self: end;
  padding: 0.5rem 2rem;
  background: ${props => props.color === 'black' ? 'var(--black)' : 'transparent'};
  color: ${props => props.color === 'black' ? 'var(--white)' : 'var(--black)'}; ;
  font-weight: 700;
  border: none;
  min-width: 7rem;

  ${props => props.color === 'white' && css`
    border: 1px solid var(--black);
  `}

  transition: all 0.2s;

  :hover:not(:disabled) {
    filter: brightness(0.5);
  }

  :disabled {
    cursor: default;
    opacity: 0.5;
  }
`;
