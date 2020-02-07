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
  .title-info {
    flex: 0.61;
    color: #fff;
    h2 {
      position: relative;
      margin-top: 25px;
      font-weight: 100;
      text-transform: uppercase;
      width: 200px;
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;
  margin-right: 10px;
  background-color: #201d2a;
  overflow-y: scroll;
  height: 500px;
  @media screen and (max-width: 750px) {
    margin-right: 0;
    height: 250px;
    margin-top: 20px;
    width: 100%;
  }
`;

export const RoomInfo = styled.div`
  width: 50%;
  margin-left: 10px;
  height: 500px;
  background-color: #201d2a;
  color: #373247;
  h1 {
    text-transform: uppercase;
    font-weight: 500;
    margin: 20px;
  }
  .icon {
    margin: 20px;
    width: 100px;
    height: 100px;
  }
  p {
    margin: 20px;
    font-size: 25px;
  }
  .information {
    margin-top: 70px;
  }

  @media screen and (max-width: 750px) {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
    height: 250px;
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

export const Room = styled.div`
  background-color: #ff3366;
  width: 161px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  color: #fff;
  height: 100px;
  cursor: pointer;
  user-select: none;
  .test {
    display: block;
  }
  .test2 {
    display: flex;
    justify-content: space-around;
  }
  span {
    background-color: grey;
    width: 80%;
    border: 2px solid grey;
    border-radius: 12px;
    margin: 0 auto;
  }
`;
