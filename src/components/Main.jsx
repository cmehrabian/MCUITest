import React from 'react';
import DoveList from './DoveList.jsx';
import Search from './Search.jsx';
import { Container } from 'semantic-ui-react';


const Main = ({ deleteDove, updateDove }) => (
  <Container>
    <Search />
    <DoveList deleteDove={deleteDove} updateDove={updateDove} />
  </Container>
);

export default Main;
