import React from "react";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import { GrLinkedin, GrGithub } from "react-icons/gr";

const Bio = () => {
  return (
    <Flex>
      <Spacer />
      <Flex direction="column">
        <h2>Peter Baniuszewicz</h2>
        <h2>FullStack Engineer</h2>
        <a href="https://www.linkedin.com/in/peterbaniuszewicz/">
          <Button leftIcon={<GrLinkedin />} variant="ghost">
            LinkedIn
          </Button>
        </a>
        <a href="https://github.com/Peter-Ba">
          <Button leftIcon={<GrGithub />} variant="ghost">
            Github
          </Button>
        </a>
      </Flex>
      <Spacer />
      <Flex direction="column">
        <h2>Amy Chen</h2>
        <h2>FullStack Engineer</h2>
        <a href="https://www.linkedin.com/in/amyechen">
          <Button leftIcon={<GrLinkedin />} variant="ghost">
            LinkedIn
          </Button>
        </a>
        <a href="https://github.com/designal46">
          <Button leftIcon={<GrGithub />} variant="ghost">
            Github
          </Button>
        </a>
      </Flex>
      <Spacer />
      <Flex direction="column" align="center">
        <h2>Tyler Kneidl</h2>
        <h2>FullStack Engineer</h2>
        <a href="https://www.linkedin.com/in/tylerkneidl/">
          <Button leftIcon={<GrLinkedin />} variant="ghost">
            LinkedIn
          </Button>
        </a>
        <a href="https://github.com/tylerkneidl">
          <Button leftIcon={<GrGithub />} variant="ghost">
            Github
          </Button>
        </a>
      </Flex>
      <Spacer />
      <Flex direction="column">
        <h2>Helen Regula</h2>
        <h2>FullStack Engineer</h2>
        <a href="https://www.linkedin.com/in/helen-regula/">
          <Button leftIcon={<GrLinkedin />} variant="ghost">
            LinkedIn
          </Button>
        </a>
        <a href="https://github.com/helenregula">
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
