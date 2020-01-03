import styled from "styled-components";

// @import "../../Variables.scss";

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

export const Text = styled.h5`
  margin-bottom: 15px;
  text-align: center;
  font-size: 20px;
  font-weight: 100;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 315px;
  margin: 0 auto;
  @media screen and (max-width: 345px) {
    width: 90%;
  }
`;
