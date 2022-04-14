import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

const EntryForm = ({
  description,
  value,
  isExprense,
  setDescription,
  setValue,
  setIsExpense,
}) => {
  return (
    <>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          icon="dollar"
          iconPosition="left"
          width={4}
          label="Value"
          placeholder={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="is expense"
          checked={isExprense}
          onChange={() => setIsExpense((oldState) => !oldState)}
        />
      </Segment>
    </>
  );
};

export default EntryForm;
