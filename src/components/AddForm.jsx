import React from 'react';
import { Button, Form } from 'semantic-ui-react';
const { Group, Input, Checkbox } = Form;

const AddForm = ({onChange}) => (
  <Form>
    <Input id='id' onChange={onChange} placeholder='ID' />
    <Input id='last_command' onChange={onChange} placeholder='Command' />
    <Input id='color' onChange={onChange} placeholder='Color' />
    <Checkbox toggle
      label='Active?'
      id='form-active'
      onChange={onChange} />
  </Form>
);

export default AddForm;
