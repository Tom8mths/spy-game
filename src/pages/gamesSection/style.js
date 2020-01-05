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

export const Head = styled.div`
  display: flex;
  background-color: red;
  align-items: center;
  div {
    background-color: blue;
    display: block;
    text-align: left;
    color: #ff3366;
    font-size: 20px;
    .exit {
      text-decoration: none;
      font-size: 20px;
      span {
        margin-left: 5px;
      }
    }
  }
  .right-menu {
    display: inline-block;
    float: right;
    width: auto;
    color: #ff3366;
    cursor: pointer;
    font-size: 25px;
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
