import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .job-icon {
    font-size: 1.25rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;

    svg {
      color: var(--text-secondary-color);
    }
  }

  .job-txt {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
`;
export default Wrapper;
