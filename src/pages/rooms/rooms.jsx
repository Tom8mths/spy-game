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
  Center,
  Room
} from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faCog,
  faSearch,
  faUsers,
  faBook,
  faUndoAlt,
  faLock,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";

class Rooms extends Component {
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
                <h2>Salas</h2>
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
              <GamesList>
                <Room>
                  <h3>Sala 123</h3>
                  <div className="test2">
                    <div className="test">
                      <Tooltip title="Add" placement="top">
                        <FontAwesomeIcon className="icon" icon={faUsers} />
                      </Tooltip>
                      <p>10/10</p>
                    </div>
                    <div className="test">
                      <FontAwesomeIcon className="icon" icon={faBook} />
                      <p>10</p>
                    </div>
                    <div className="test">
                      <FontAwesomeIcon className="icon" icon={faUndoAlt} />
                      <p>10/10</p>
                    </div>
                  </div>
                  <span>
                    {" "}
                    <FontAwesomeIcon className="icon" icon={faLock} /> com senha
                  </span>
                </Room>
                <Room></Room>
                <Room></Room>
                <Room></Room>
                <Room></Room>
                <Room></Room>
                <Room></Room>
                <Room></Room>
                <Room></Room>
                <Room></Room>
                <Room></Room>
                <Room></Room>
                <Room></Room>
              </GamesList>
              <RoomInfo>
                <div className="information">
                  <h1>Informações da Sala</h1>
                  <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                  <p>
                    Selecione uma das salas ao lado para vizualizar suas
                    informações
                  </p>
                </div>
              </RoomInfo>
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

export default Rooms;
