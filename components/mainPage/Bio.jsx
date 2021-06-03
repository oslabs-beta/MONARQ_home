/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { GrLinkedin, GrGithub } from "react-icons/gr";

const Bio = (props) => {
  return (
    <Flex direction="column" align="center" textColor="brand.whiteT">
      <h2><strong>{props.name}</strong></h2>
      <h2>{props.title}</h2>
      <a href={props.linkedIn}>
        <Button leftIcon={<GrLinkedin />} colorScheme="linkedin" variant="link">
          LinkedIn
        </Button>
      </a>
      <a href={props.github}>
        <Button leftIcon={<GrGithub />} variant="link">
          Github
        </Button>
      </a>
    </Flex>
  );
};

export default Bio;
