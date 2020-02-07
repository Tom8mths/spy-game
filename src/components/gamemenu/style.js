import Styled from "styled-components";

import { Link } from "react-router-dom";

export const Menu = Styled.div`
width: 300px;
`;

export const GameBox = Styled.div`
  width: 260px;
  height: 150px;
  background-image: url('http://www.birds.com/wp-content/uploads/home/bird4.jpg');
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

export const Redirect = Styled(Link)`
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
