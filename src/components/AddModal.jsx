import React from 'react';
import AddForm from './AddForm.jsx';
import { connect } from 'react-redux';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';

const { Content, Actions } = Modal;

const AddModal = ({addDove, toggleForm, handleToggleForm}) => {
  let forminputs = {
    'active': false
  };

  const onClick = (e) => {
    forminputs['deorbit_dt'] = new Date().toISOString()
    forminputs['images_collected'] = 0;
    addDove(forminputs);
    handleToggleForm();
  }

  const onChange = ({ currentTarget }) => {
    currentTarget.id === 'form-active' ?
    forminputs[currentTarget.id] = forminputs[currentTarget.id] = !forminputs[currentTarget.id]  :
    forminputs[currentTarget.id] = currentTarget.value
  }

  return (
    <Modal size='mini' open={toggleForm} trigger={<Button>Add Dove</Button>}>
      <Header content='Add a Dove' icon='rocket' />
      <Content>
        <AddForm onChange={onChange} />
      </Content>
      <Actions>
        <Button onClick={handleToggleForm} color='red'>
          <Icon name='remove' /> Cancel
        </Button>
        <Button onClick={onClick} color='green'>
          <Icon name='checkmark' /> Add
        </Button>
      </Actions>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    doves: state.doves,
    toggleForm: state.toggleForm
  }
};

const mapDispatchToProps = (dispatch) => ({
  handleAddDove(dove) {
    dispatch({ type: 'ADD_DOVES', value: dove });
  },
  handleToggleForm() {
    dispatch({ type: 'TOGGLE_FORM' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
