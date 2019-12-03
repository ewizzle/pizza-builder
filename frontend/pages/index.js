import styled from 'styled-components';

const StyledHome = styled.div`
  @media (max-width: 768px) {
    img {
      height: 400px;
    }
  }
`;

const HomePage = () => (
  <StyledHome>
    <div>Hello</div>
  </StyledHome>
);

export default HomePage;
