import React from "react";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import { GrLinkedin, GrGithub } from "react-icons/gr";

<Flex direction="column" align="center">
  <h2>Tyler Kneidl</h2>
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
