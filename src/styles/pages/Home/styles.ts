import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  background: var(--white);
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 31.25rem;

  h1 {
    font-size: 1.375rem;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-top: 1.875rem;
    gap: 1rem;

    input {
      padding: 0.5rem 1rem;
      color: var(--gray-800);
      border: 1px solid var(--gray-800);
      border-radius: 0.25rem;

      ::placeholder {
        font-size: 0.875rem;
        color: var(--gray-600);
      }
    }
  }

  button {
    margin-top: 1.25rem;
    width: fit-content;
    align-self: end;
    padding: 0.5rem 2rem;
    background: var(--black);
    color: var(--white);
    font-weight: 700;
    border: none;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`;