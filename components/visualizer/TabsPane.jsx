/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Spinner,
} from "@chakra-ui/react";

const TabsPane = (props) => {
  const { currentTab, operations, setOperation, isLoaded } = props;

  const [value, setValue] = useState("");

  useEffect(() => {}, [currentTab]);
  useEffect(() => {
    setOperation(value);
  }, [value]);

  const operationsObject = {};

  operations.forEach((el) => {
    if (el) operationsObject[el.name] = el.fields;
  });

  const displayArray = [];
  const display = () => {
    if (isLoaded === false)
      return (
        <Center>
          {" "}
          <Spinner />{" "}
        </Center>
      );
    if (isLoaded === true) return displayArray;
    return <p><i>Enter GraphQL URL above to view operations</i></p>;
  };

  Object.keys(operationsObject).forEach((key) => {
    if (key === currentTab) {
      displayArray.push(
        operationsObject[key].forEach((operation) => {
          if (key === currentTab)
            displayArray.push(
              <Radio
                id={`${key}`}
                value={`${operation.name}`}
                name="operation"
                key={`${operation.name}Select`}
                marginRight={5}
              >
                {`[${operation.name}]`}
              </Radio>
            );
        })
      );
    }
  });
  return (
    <Flex>
    <Box overflowY="scroll" maxH="200px">
      <RadioGroup onChange={setValue} value={value}>
        {display()}
      </RadioGroup>
    </Box>
    </Flex>
  );
};

export default TabsPane;
