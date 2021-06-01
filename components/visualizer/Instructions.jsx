/* eslint-disable react/prop-types */
import React, { useState, useEffect, useImperativeHandle } from "react";
import {
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";

const Instructions = (props) => {
  return (
    <Flex marginLeft={5} marginRight={5} direction="column" >
      <Box marginTop={5} marginBottom={10} textColor="brand.whiteT">A <a href="https://github.com/oslabs-beta/MONARQ"> <strong>Manifest Object </strong></a>is required in order to use MONARQ. It allows you to specify which REST endpoints you would like to expose, as well as the corresponding GraphQL query/mutation operation that should be executed when a request is received at that endpoint.</Box>
      <Box marginBottom={10} textColor="brand.whiteT">Once you are done building your Manifest Object, simply add it into your repository as a manifest.js file.</Box>
      <Button onClick={() => {props.setStarted(true)}} colorScheme="orange">Get Started</Button>
    </Flex>
  )
}

export default Instructions;
