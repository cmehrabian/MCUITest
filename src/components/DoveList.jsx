import React from 'react';
import DoveEntry from './DoveEntry.jsx';
import db from '../../db.json';

const DoveList = () => (
  <div>
    Dove List
    {db.doves.map(dove => <DoveEntry key={dove.id} dove={dove} /> )}
  </div>
);

export default DoveList;
