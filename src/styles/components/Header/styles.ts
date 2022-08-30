import styled from 'styled-components';

export const Container = styled.div`
  background: var(--black);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  h1 {
    color: var(--white);
    font-size: 1.375rem;
  }

  button {
    background: transparent;
    border: 0;

    svg {
      color: var(--white);
      width: 1.5rem;
      height: 1.5rem;
    }

    transition: filter 0.2;

    :hover {
      filter: brightness(0.8);
    }
  }

  > div {
    display: flex;
    gap: 1rem;

    button {
      border: 0;
      background: transparent;

      svg {
        color: var(--white);
        width: 1.5rem;
        height: 1.5rem;
      }

      transition: filter 0.2s;

      :hover {
        filter: brightness(0.5);
      }
    }
  }
`;
