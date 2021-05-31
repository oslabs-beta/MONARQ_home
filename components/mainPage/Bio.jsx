/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { GrLinkedin, GrGithub } from "react-icons/gr";

const Bio = (props) => {
  return (
    <Flex direction="column" textColor="brand.gray">
      <h2>{props.name}</h2>
      <h2>{props.title}</h2>
      <a href={props.linkedIn}>
        <Button leftIcon={<GrLinkedin />} variant="ghost">
          LinkedIn
        </Button>
      </a>
      <a href={props.github}>
        <Button leftIcon={<GrGithub />} variant="ghost">
          Github
        </Button>
      </a>
    </Flex>
  );
};

export default Bio;
