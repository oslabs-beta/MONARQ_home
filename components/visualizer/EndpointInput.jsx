/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
import React from "react";
import { Input, Select } from "@chakra-ui/react";

const EndpointInput = (props) => {
  const { setMethod } = props;
  const { setEndpoint } = props;
  const methodHandler = (evt) => {
    setMethod(evt.target.value);
  };
  const endpointHandler = (evt) => {
    setEndpoint(evt.target.value);
  };
  return (
    <div>
      <Input
        placeholder="(ex: /characters)"
        type="text"
        onChange={(evt) => endpointHandler(evt)}
      />
      <Select
        placeholder="Choose HTTP Method"
        name="method"
        id="method"
        onChange={(evt) => methodHandler(evt)}
      >
        <option value="get">GET</option>
        <option value="post">POST</option>
        <option value="put">PUT</option>
        <option value="delete">DELETE</option>
        <option value="patch">PATCH</option>
      </Select>
    </div>
  );
};
export default EndpointInput;
