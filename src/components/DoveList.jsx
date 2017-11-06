import React from 'react';
import { connect } from 'react-redux';
import DoveEntry from './DoveEntry.jsx';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

const { Header, Body, Row, HeaderCell  } = Table;

const DoveList = ({doves}) => (
  <Table>
    <Body>
      {doves.map(dove => <DoveEntry key={dove.id} dove={dove} /> )}
    </Body>
  </Table>
);

const mapStateToProps = (state) => {
  return {
    doves: state.doves
  }
}

export default connect(mapStateToProps)(DoveList);
