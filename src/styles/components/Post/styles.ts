import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--gray-700);
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

export const Section = styled.section`
  padding: 1.5rem 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;