import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDoves } from '../store/actions';
import axios from 'axios';
import Header from './Header.jsx';
import Main from './Main.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.requestDoves = this.requestDoves.bind(this);
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
  render() {
    return (
      <div>
        <Header />
        <Main />
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
    dispatch({type: 'SET_DOVES', value: doves});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
