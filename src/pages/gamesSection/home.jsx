import React, { Component } from "react";

import Input from "../../components/input";
import BadgeAvatars from "../../components/avatar";

import { Wrapper, Container, Head, Redirect } from "./style";

import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faCogs,
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
                <BadgeAvatars></BadgeAvatars>
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
                <FontAwesomeIcon icon={faCogs} />
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
          </Wrapper>
        </Container>
      </div>
    );
  }
}

export default loginPage;
