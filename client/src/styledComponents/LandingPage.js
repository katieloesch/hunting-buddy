import styled from 'styled-components';

const Wrapper = styled.section`
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: 700;
    margin-bottom: 1.5rem;

    span {
      color: var(--primary-500);
    }
  }

  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }

  .register-link {
    margin-right: 1rem;
  }

  .btn {
    padding: 0.75rem 1rem;
  }

  .main-img {
    border-radius: 13px;
    width: 100%;
  }

  @media (max-width: 992px) {
    .page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 6rem 0;
      gap: 3rem;
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .register-link {
      margin-bottom: 8px;
    }
    .main-img {
      display: block;
    }
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
  @media (min-width: 1075px) {
    .page {
      grid-template-columns: 1fr 580px;
      column-gap: 3rem;
    }
  }
  @media (max-width: 420px) {
    p {
      line-height: 1.8;
      font-size: 15px;
    }
  }
`;

export default Wrapper;
