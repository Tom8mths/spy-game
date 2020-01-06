import React, { Component } from "react";

import Input from "../../components/input";
import StyledButton from "../../components/buttons";
import BadgeAvatars from "../../components/avatar";

import {
  Wrapper,
  Container,
  Head,
  Redirect,
  GamesList,
  RoomInfo,
  Center
} from "./style";

import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faCog,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

class loginPage extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Container>
          <Wrapper>
            <Head>
              <div className="left">
                <BadgeAvatars className="avatar"></BadgeAvatars>
                <div>
                  <Input
                    autoComplete="off"
                    variant="standard"
                    type="text"
                    defaultValue="Hello world"
                    inputProps={{ "aria-label": "description" }}
                  />
                  <Redirect className="exit" to="/login">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Sair</span>
                  </Redirect>
                </div>
              </div>
              <div className="right-menu">
                <FontAwesomeIcon icon={faCog} />
              </div>
            </Head>
            <Head className="line">
              <div className="title">
                <h2>Jogos</h2>
              </div>
              <div className="search">
                <FontAwesomeIcon className="icon" icon={faSearch} />
                <Input
                  noValidate
                  autoComplete="off"
                  label="Procurar"
                  variant="standard"
                  type="search"
                />
              </div>
            </Head>
            <Center>
              <GamesList></GamesList>
              <RoomInfo></RoomInfo>
            </Center>
            <Center>
              <StyledButton
                variant="contained"
                to="/"
                text="Criar Sala"
              ></StyledButton>
              <StyledButton
                variant="contained"
                to="/"
                text="Entrar"
              ></StyledButton>
            </Center>
          </Wrapper>
        </Container>
      </div>
    );
  }
}

export default loginPage;
