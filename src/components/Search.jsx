import React from 'react';
import { connect } from 'react-redux';
import { Input, Icon } from 'semantic-ui-react';

const Search = ({handleSetSearchTerm}) => (
  <Input onChange={(e) => handleSetSearchTerm(e.target.value)} icon placeholder='Search...' style={{width: '100%'}}>
    <input />
    <Icon name='search' />
  </Input>
);


const mapStateToProps = (state) => {
  return {
    'searchTerm': state.searchTerm
  }
};

const mapDispatchToProps = (dispatch) => ({
  handleSetSearchTerm(searchTerm) {
    dispatch({ type: 'SET_SEARCH_TERM', value: searchTerm })
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);
