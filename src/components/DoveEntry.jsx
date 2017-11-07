import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Button, Label, Input, Checkbox } from 'semantic-ui-react';
const { Row, Cell } = Table;

class DoveEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      doveProps: {
        last_command: this.props.dove.last_command,
        active: this.props.dove.active
      }
    }
    this.toggleEditing = this.toggleEditing.bind(this);
    this.updateProp = this.updateProp.bind(this);
  }

  toggleEditing(target, dove) {
    if (target.className.indexOf('checkmark') >= 0 || target.id.indexOf('checkmark') >= 0) {
      let updatedDove = Object.assign({}, dove, this.state.doveProps);
      this.props.updateDove(updatedDove);
    }
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  updateProp(e) {
    let updatedDoveProps;
    if (e.currentTarget.id === 'active') {
      updatedDoveProps = Object.assign({}, this.state.doveProps, { [e.currentTarget.id]: !this.state.doveProps.active });
    } else {
      updatedDoveProps = Object.assign({}, this.state.doveProps, { [e.currentTarget.id]: e.target.textContent });
    }
    this.setState({
      doveProps: updatedDoveProps
    });
  }

  render() {
    const { dove, deleteDove } = this.props;
    let editingStyles = this.state.isEditing ? { backgroundColor: '#fff', border: '1.5pt dotted #e8e8e8', borderRadius: '10px' } : {};

    return(
      <Row>
        <Cell>
          <h4 className='mobile-show'>Active</h4>
          <Checkbox toggle id='active'
            defaultChecked={dove.active}
            disabled={!this.state.isEditing}
            onChange={this.updateProp}
            style={editingStyles}/>
        </Cell>
        <Cell>
          <h4 className='mobile-show'>ID</h4>
          <Label>
            {dove.id}
          </Label>
        </Cell>
        <Cell>
          <h4 className='mobile-show'>Images Collected</h4>
          <Label id='images_collected' contentEditable={this.state.isEditing}>
            {dove.images_collected}
          </Label>
        </Cell>
        <Cell>
          <h4 className='mobile-show'>Deorbit Date</h4>
          <Label id='deorbit_dt' contentEditable={this.state.isEditing}>
            {dove.deorbit_dt}
          </Label>
        </Cell>
        <Cell>
          <h4 className='mobile-show'>Last Command</h4>
          <Label
            id='last_command'
            style={editingStyles}
            contentEditable={this.state.isEditing}
            onInput={this.updateProp}>
            {dove.last_command}
          </Label>
        </Cell>
        <Cell>
          <h4 className='mobile-show'>Color</h4>
          <Label>
            <div style={{backgroundColor: `${dove.color}`, width: '20px', height: '20px'}}></div>
          </Label>
        </Cell>
        <Cell>
          <Button
            basic
            color='red'
            icon='trash outline'
            floated='left'
            size='small'
            id='delete'
            onClick={() => deleteDove(dove.id)} />
          <Button
            basic
            color='green'
            icon={ this.state.isEditing ? 'checkmark' : 'pencil'}
            floated='left'
            size='small'
            id={ this.state.isEditing ? 'checkmark' : 'pencil'}
            onClick={(e) => this.toggleEditing(e.target, dove)} />
        </Cell>
      </Row>
    )
  }
}

export default DoveEntry;
