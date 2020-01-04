import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  height: inherit;
`;

export const Title = styled.h5`
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  color: #ff3366;
`;

export const Text = styled.h5`
  margin: 15px 0;
  text-align: left;
  font-size: 15px;
  font-weight: 100;
  color: #707070;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0 auto;
  @media screen and (max-width: 345px) {
    width: 90%;
  }
`;

export const Link = styled.h5`
  margin: 15px 0;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #afafaf;
  cursor: pointer;
`;
