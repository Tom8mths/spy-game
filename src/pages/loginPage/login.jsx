import React, { Component } from "react";

import Input from "../../components/input";
import StyledButton from "../../components/buttons";

import logo from "../../logo.svg";

import "../../App.scss";
import {
  Wrapper,
  Container,
  Title,
  Form,
  Redirect,
  MiniWrapper,
  Text
} from "./loginStyle";

class loginPage extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Container>
          <Wrapper>
            <img src={logo} className="App-logo" alt="logo" />
            <Form>
              <Title>Já tem uma conta?</Title>
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
              <StyledButton variant="contained" text="Entrar"></StyledButton>
              <MiniWrapper>
                <Redirect to="/signup">Não tem uma conta? Cadastre-se</Redirect>
                <Redirect to="/forgot_password">Esqueci minha senha</Redirect>
              </MiniWrapper>
              <Text>ou acesse como</Text>
              <StyledButton
                variant="contained"
                to="/"
                text="Visitante"
              ></StyledButton>
            </Form>
          </Wrapper>
        </Container>
      </div>
    );
  }
}

export default loginPage;
