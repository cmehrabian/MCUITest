import React from 'react';
import { connect } from 'react-redux';
import DoveEntry from './DoveEntry.jsx';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

const { Header, Body, Row, HeaderCell  } = Table;

const doveToStr = (dove) => {
  var clone = Object.assign({}, dove);
  clone['active'] ? clone['active'] = 'active' : clone['active'] = '';
  return Object.values(clone).join(' ');
}

const DoveList = ({ doves, searchTerm, deleteDove, updateDove }) => (
  <Table celled id='doves-table'>
    <Header className='mobile-hide'>
      <Row>
        <HeaderCell>Active</HeaderCell>
        <HeaderCell>ID</HeaderCell>
        <HeaderCell>Images Collected</HeaderCell>
        <HeaderCell>Deorbit Date</HeaderCell>
        <HeaderCell>Last Command</HeaderCell>
        <HeaderCell>Color</HeaderCell>
        <HeaderCell>Actions</HeaderCell>
      </Row>
    </Header>

    <Body>
      {doves
        .filter(dove => `${doveToStr(dove)}`.toLowerCase()
        .indexOf(searchTerm.toLowerCase()) >= 0)
        .map((dove, idx) => {
          return (
            <DoveEntry key={idx} dove={dove} deleteDove={deleteDove} updateDove={updateDove} />
          );
        })
      }
    </Body>
  </Table>
);

const mapStateToProps = (state) => {
  return {
    doves: state.doves,
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(DoveList);
