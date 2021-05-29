import React from "react";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import { GrLinkedin, GrGithub } from "react-icons/gr";

const Bio = props => {
  return (
    <Flex>
      <Spacer />
      <Flex direction="column">
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
      <Spacer />
    </Flex>
  );
};

export default Bio;
