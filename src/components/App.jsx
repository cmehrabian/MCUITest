import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from './Header.jsx';
import Main from './Main.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.requestDoves = this.requestDoves.bind(this);
    this.addDove = this.addDove.bind(this);
    this.deleteDove = this.deleteDove.bind(this);
    this.updateDove = this.updateDove.bind(this);
  }
  componentDidMount() {
    this.requestDoves();
  }
  requestDoves() {
    axios.get('/doves')
      .then(results => {
        this.props.handleSetDoves(results.data);
      });
  }
  addDove(dove) {
    axios.post('/doves', dove)
      .then(results => {
        this.props.handleAddDove(results.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }
  deleteDove(id) {
    axios.delete(`/doves/${id}`)
      .then(results => {
        this.props.handleRemoveDove(id);
      })
      .catch(error => {
        console.log('error', error);
      });
  }
  updateDove(dove) {
    axios.put(`/doves/${dove.id}`, dove)
      .then(results => {
        console.log(`${results.data.id} updated`)
      })
      .catch(error => {
        console.log('error', error);
      })
  }
  render() {
    return (
      <div>
        <Header addDove={this.addDove} />
        <Main deleteDove={this.deleteDove} updateDove={this.updateDove} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    doves: state.doves
  }
};

const mapDispatchToProps = (dispatch) => ({
  handleSetDoves(doves = []) {
    dispatch({ type: 'SET_DOVES', value: doves });
  },
  handleAddDove(dove) {
    dispatch({ type: 'ADD_DOVE', value: dove });
  },
  handleRemoveDove(id) {
    dispatch({ type: 'REMOVE_DOVE', value: id });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
