import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  height: inherit;
  padding: 40px;
  background-color: #262332;
  width: 70%;
  margin: 0 auto;
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;
