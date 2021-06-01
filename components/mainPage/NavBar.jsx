import React from "react";
import { Button } from "@chakra-ui/react";
import { GrGraphQl, GrLinkedin, GrGithub, GrMedium } from "react-icons/gr";

const NavBar = () => {
  return (
    <div color="brand.whiteT">
      <a href="https://github.com/oslabs-beta/MONARQ">
        <Button leftIcon={<GrGithub />} variant="link" color="brand.whiteT" size="sm" marginRight={5}>
          Github
        </Button>
      </a>
      <a href="https://www.linkedin.com/">
        <Button leftIcon={<GrLinkedin />} variant="link" color="brand.whiteT" size="sm" marginRight={5}>
          LinkedIn
        </Button>
      </a>
      <a href="https://medium.com/">
        <Button leftIcon={<GrMedium />} variant="link" color="brand.whiteT" size="sm" marginRight={5}>
          Press
        </Button>
      </a>
      <a href="https://graphql.org/">
        <Button leftIcon={<GrGraphQl />} variant="link" color="brand.whiteT" size="sm" marginRight={5}>
          Resources
        </Button>
      </a>
    </div>
  );
};

export default NavBar;
