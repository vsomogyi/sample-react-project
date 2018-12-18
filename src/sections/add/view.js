import React from 'react';
import { Field } from 'redux-form';

export default ({ handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <Field name="title" component="input" type="text" />
      <label htmlFor="body">Description</label>
      <Field name="body" component="input" type="text" />
      <button type="submit">Add</button>
    </form>
  </div>
);
