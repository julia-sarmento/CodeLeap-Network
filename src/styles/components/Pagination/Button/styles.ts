import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  background: var(--black);
  color: var(--white);
  padding: 0.5rem;
  border-radius: 0.25rem;

  :disabled {
    background: transparent;
    color: var(--black);
  }
`;
