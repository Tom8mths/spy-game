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
  .line {
    border-bottom: 0.1px solid #474358;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: flex-start;
  .left {
    display: flex;
    flex: 1;
    align-items: center;
  }
  div {
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
    color: #ff3366;
    cursor: pointer;
    font-size: 25px;
  }
  .title {
    flex: 1;
    color: #fff;
    h2 {
      position: relative;
      margin-top: 22px;
      font-weight: 100;
      text-transform: uppercase;
      width: 100px;
      @media screen and (max-width: 434px) {
        font-size: 20px;
        margin-top: 35px;
        width: 80px;
      }
      &::after {
        content: "";
        border-bottom: 1px solid #fff;
        display: block;
        width: 100%;
        height: auto;
        background: white;
        position: absolute;
      }
    }
  }
  .search {
    display: flex;
    align-items: center;
    font-size: 25px;
    .icon {
      margin: 15px 10px 0 0;
    }
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
