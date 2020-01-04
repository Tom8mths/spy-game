import React, { Component } from "react";

import Input from "../../components/input";
import BadgeAvatars from "../../components/avatar";

import { Wrapper, Container } from "./style";

class loginPage extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Container>
          <Wrapper>
            <BadgeAvatars></BadgeAvatars>
            <Input
              noValidate
              autoComplete="off"
              label="Visitante123"
              required
              variant="standard"
              type="text"
            />
          </Wrapper>
        </Container>
      </div>
    );
  }
}

export default loginPage;
