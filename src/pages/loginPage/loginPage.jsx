import React, { Component } from "react";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import logo from "../../logo.svg";

import "../../App.scss";
import { Wrapper, Container, Text } from "./loginStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

class loginPage extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Container>
          <Wrapper>
            <img src={logo} className="App-logo" alt="logo" />
            <Text>Já tem uma conta?</Text>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />
            </form>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
          </Wrapper>
        </Container>
      </div>
    );
  }
}

export default loginPage;
