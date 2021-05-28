import React from "react";
import { Button } from "@chakra-ui/react";
import { GrGraphQl, GrLinkedin, GrGithub, GrMedium } from "react-icons/gr";

const NavBar = () => {
  return (
    <div>
      <a href="https://github.com/oslabs-beta/MONARQ">
        <Button leftIcon={<GrGithub />} variant="ghost">
          Github
        </Button>
      </a>
      <a href="https://www.linkedin.com/">
        <Button leftIcon={<GrLinkedin />} variant="ghost">
          LinkedIn
        </Button>
      </a>
      <a href="https://medium.com/">
        <Button leftIcon={<GrMedium />} variant="ghost">
          Press
        </Button>
      </a>
      <a href="https://graphql.org/">
        <Button leftIcon={<GrGraphQl />} variant="ghost">
          Resources
        </Button>
      </a>
    </div>
  );
};

export default NavBar;
