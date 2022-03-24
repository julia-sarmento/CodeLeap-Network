import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--gray-700);
  
  section {
    padding: 1.5rem 2rem;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  strong, span {
    color: var(--gray-800);
    font-size: 1.125rem;
  }
`;