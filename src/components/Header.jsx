import React from 'react';
import AddModal from './AddModal.jsx';
import { connect } from 'react-redux';
import { Container, Menu, Image, Icon } from 'semantic-ui-react';

const Header = ({addDove, handleToggleForm}) => (
  <Menu inverted>
    <Container>
      <Menu.Item as='a' header href='/'>
        <Image style={{width: '75px'}} src='https://www.planet.com/assets/logos/logo.svg'/>
      </Menu.Item>
      <Menu.Item as='a' href='https://github.com/'>
        <Icon name='github'/>
      </Menu.Item>
      <Menu.Item position='right' onClick={handleToggleForm}>
        <AddModal addDove={addDove} />
      </Menu.Item>
    </Container>
  </Menu>
);

const mapStateToProps = (state) => {
  return {
    toggleForm: state.toggleForm
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleToggleForm() {
    dispatch({ type: 'TOGGLE_FORM' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
