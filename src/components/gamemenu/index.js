import React, { Component } from "react";
import { Menu, GameBox } from "./style";
import StyledButton from "../../components/buttons";

class MenuDropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <Menu>
        <GameBox onClick={this.showMenu}>
          {this.state.showMenu ? (
            <div
              className="menu"
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              <StyledButton
                variant="contained"
                to="/"
                text="Jogar"
              ></StyledButton>
              <StyledButton
                variant="contained"
                to="/"
                text="Criar Sala"
              ></StyledButton>
              <StyledButton
                variant="contained"
                to="/"
                text="Salas"
              ></StyledButton>
              <StyledButton variant="contained" to="/" text="?"></StyledButton>
            </div>
          ) : null}
        </GameBox>
      </Menu>
    );
  }
}

export default MenuDropdown;
