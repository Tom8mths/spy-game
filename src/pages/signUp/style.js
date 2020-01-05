import styled from "styled-components";

import { Link } from "react-router-dom";

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

export const MiniWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #3d384e;
  margin-top: 10px;
`;

export const Title = styled.h5`
  margin-bottom: 15px;
  text-align: left;
  font-size: 20px;
  font-weight: 100;
  color: #fff;
`;

export const Text = styled.h5`
  margin: 15px 0;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #fff;
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

export const Redirect = styled(Link)`
  color: #ff3366;
  cursor: pointer;
  font-size: 14px;
  font-weight: 100;
  margin-bottom: 10px;
  &:hover {
    color: #c93058;
    transition: 250ms all;
  }
`;
