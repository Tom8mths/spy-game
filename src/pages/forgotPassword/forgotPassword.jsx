import React, { Component } from "react";

import Input from "../../components/input";
import StyledButton from "../../components/buttons";

import logo from "../../logo.svg";

import "../../App.scss";
import { Wrapper, Container, Title, Form, Link, Text } from "./style";

class loginPage extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Container>
          <Wrapper>
            <img src={logo} className="App-logo" alt="logo" />
            <Form>
              <Title>Esqueceu sua senha?</Title>
              <Text>
                Digite o email que você usou para registrar e nós te enviaremos
                um email com as instruções para recuperar sua senha.
              </Text>
              <Input
                label="Digite seu e-mail"
                required
                maxLength={200}
                variant="outlined"
                type="text"
              />
              <StyledButton variant="contained" text="Enviar"></StyledButton>
              <Link>Já tenho uma conta</Link>
            </Form>
          </Wrapper>
        </Container>
      </div>
    );
  }
}

export default loginPage;
