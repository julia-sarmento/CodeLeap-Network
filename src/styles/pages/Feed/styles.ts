import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;

  main {
    background: var(--white);
    padding: 2rem 1.5rem;
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  @media (min-width: 640px) {
    main {
      padding: 2.75rem 2.25rem;
    }
  }
`;

export const Form = styled.form`
  border: 1px solid var(--gray-700);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.375rem;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-top: 1.875rem;
    gap: 0.5rem;

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

    textarea {
      padding: 0.5rem 1rem;
      color: var(--gray-800);
      border: 1px solid var(--gray-800);
      border-radius: 0.25rem;
      height: 5rem;
      resize: none;

      ::placeholder {
        font-size: 0.875rem;
        color: var(--gray-600);
      }
    }
  }
`;

export const PostList = styled.section`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2.75rem;
`;