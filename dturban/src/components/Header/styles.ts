import styled from "styled-components";

export const Container = styled.header`
  background: var(--dark-700);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    background: var(--dark-500);
    color: #fff;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.24rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover {
      filter: sepia(0.5);
    }
  }
`;
