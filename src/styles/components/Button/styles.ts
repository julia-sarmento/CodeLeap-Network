import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 1.25rem;
  width: fit-content;
  align-self: end;
  padding: 0.5rem 2rem;
  background: var(--black);
  color: var(--white);
  font-weight: 700;
  border: none;

  transition: all 0.2s;

  :hover:not(:disabled) {
    filter: brightness(0.5);
  }

  :disabled {
    cursor: default;
    opacity: 0.5;
  }
`;
