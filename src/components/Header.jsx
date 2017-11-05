import React from 'react';
import { Container, Menu, Image, Icon } from 'semantic-ui-react';

const Header = () => (
  <Menu inverted>
    <Container>
      <Menu.Item as='a' header href='/'>
        <Image style={{width: '75px'}} src='https://www.planet.com/assets/logos/logo.svg'/>
      </Menu.Item>
      <Menu.Item as='a' href='https://github.com/'>
        <Icon name='github'/>
      </Menu.Item>
    </Container>
  </Menu>
);

export default Header;
