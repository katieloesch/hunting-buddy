import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;

  button {
    background: transparent;
    border: 1px solid rgba(85, 140, 203, 0.75);
    margin-top: 1.1rem;
    padding: 5px 8px;
    border-radius: var(--border-radius);
    color: var(--primary-500);
    font-size: 1rem;
    cursor: pointer;
  }

  h4 {
    text-align: center;
    margin-bottom: 0.6rem;
  }
`;

export default Wrapper;
