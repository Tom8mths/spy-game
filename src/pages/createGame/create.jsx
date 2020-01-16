import React, { Component } from 'react'

import Input from '../../components/input'
import StyledButton from '../../components/buttons'
import BadgeAvatars from '../../components/avatar'
import MenuDropdown from '../../components/gamemenu'

import {
  Wrapper,
  Container,
  Head,
  Redirect,
  GamesList,
  GamesBox,
  Center,
  Game
} from './style'

import { makeStyles } from '@material-ui/core/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSignOutAlt,
  faCog,
  faSearch
} from '@fortawesome/free-solid-svg-icons'

class loginPage extends Component {
  state = {}

  render () {
    return (
      <div className='App'>
        <Container>
          <Wrapper>
            <Head>
              <div className='left'>
                <BadgeAvatars className='avatar'></BadgeAvatars>
                <div>
                  <Input
                    autoComplete='off'
                    variant='standard'
                    type='text'
                    defaultValue='Hello world'
                    inputProps={{ 'aria-label': 'description' }}
                  />
                  <Redirect className='exit' to='/login'>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Sair</span>
                  </Redirect>
                </div>
              </div>
              <div className='right-menu'>
                <FontAwesomeIcon icon={faCog} />
              </div>
            </Head>
            <Head className='line'>
              <div className='title'>
                <h2>Jogos</h2>
              </div>
              <div className='search'>
                <FontAwesomeIcon className='icon' icon={faSearch} />
                <Input
                  noValidate
                  autoComplete='off'
                  label='Procurar'
                  variant='standard'
                  type='search'
                />
              </div>
            </Head>
            <Center>
              <GamesList>
                <Game>
                  <MenuDropdown></MenuDropdown>
                  <span>Título do jogo</span>
                </Game>
                <Game>
                  <MenuDropdown></MenuDropdown>
                  <span>Título do jogo</span>
                </Game>
                <Game>
                  <MenuDropdown></MenuDropdown>
                  <span>Título do jogo</span>
                </Game>
                <Game>
                  <MenuDropdown></MenuDropdown>
                  <span>Título do jogo</span>
                </Game>
                <Game>
                  <MenuDropdown></MenuDropdown>
                  <span>Título do jogo</span>
                </Game>
              </GamesList>
            </Center>
          </Wrapper>
        </Container>
      </div>
    )
  }
}

export default loginPage
