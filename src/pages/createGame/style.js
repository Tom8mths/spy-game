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
  @media screen and (max-width: 768px) {
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
    transition: transform 0.5s;
    &:hover {
      transform: rotate(60deg);
      transition-duration: 0.7s;
    }
  }
  .title {
    flex: 1;
    color: #fff;
    h2 {
      position: relative;
      margin-top: 25px;
      font-weight: 100;
      text-transform: uppercase;
      width: 100px;
      @media screen and (max-width: 434px) {
        font-size: 20px;
        margin-top: 30px;
        width: 80px;
        text-transform: uppercase;
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

export const GamesList = styled.div`
  width: 100%;
  margin-right: 10px;
  height: 500px;
  background-color: #201d2a;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const GamesBox = styled.div`
  background-color: red;
  width: 260px;
  height: 150px;
  box-shadow: 2px 2px 8px #000;
  margin: 20px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    box-shadow: 4px 4px 8px #000;
  }
  @media screen and (max-width: 400px) {
    width: 210px;
    height: 110px;
  }
`;

export const Center = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  @media screen and (max-width: 750px) {
    display: block;
  }
`;

export const Game = styled.div`
  display: block;
  span {
    color: #fff;
    text-align: center;
  }
`;
