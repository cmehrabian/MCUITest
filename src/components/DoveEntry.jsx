import React from 'react';
import { Table, Button, Label, Input } from 'semantic-ui-react';
const { Row, Cell } = Table;


const DoveEntry = ({dove}) => (
  <Row>
    <Cell>
      <Label>{dove.id}</Label>
    </Cell>
  </Row>
)

export default DoveEntry;
