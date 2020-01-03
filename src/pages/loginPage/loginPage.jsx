import React, { Component } from "react";

import Input from "../../components/input";

import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import logo from "../../logo.svg";

import "../../App.scss";
import { Wrapper, Container, Text, Form } from "./loginStyle";

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
            <Form>
              <Input
                label="Nome de usuário ou e-mail"
                required
                maxLength={200}
                variant="outlined"
                type="text"
              />
              <Input
                label="Senha"
                required
                maxLength={200}
                variant="outlined"
                type="password"
              />
            </Form>
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
