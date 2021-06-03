import React from "react";
import { Button } from "@chakra-ui/react";
import { GrLinkedin, GrGithub, GrMedium } from "react-icons/gr";
import { ImNpm } from "react-icons/im";


const NavBar = () => {
  return (
    <div color='brand.whiteT'>
      <a href='https://github.com/oslabs-beta/MONARQ'>
        <Button
          leftIcon={<GrGithub />}
          variant='link'
          color='brand.whiteT'
          size='sm'
          marginRight={5}
        >
          Github
        </Button>
      </a>
      <a href='https://www.linkedin.com/'>
        <Button
          leftIcon={<GrLinkedin />}
          variant='link'
          color='brand.whiteT'
          size='sm'
          marginRight={5}
        >
          LinkedIn
        </Button>
      </a>
      <a href='https://pete-ba.medium.com/monarq-rest-to-graphql-f4fb38b1bdc8'>
        <Button
          leftIcon={<GrMedium />}
          variant='link'
          color='brand.whiteT'
          size='sm'
          marginRight={5}
        >
          Press
        </Button>
      </a>
      <a href='https://www.npmjs.com/package/monarq'>
        <Button
          leftIcon={<ImNpm />}
          variant='link'
          color='brand.whiteT'
          size='sm'
          marginRight={5}
        >
          NPM
        </Button>
      </a>
    </div>
  );
};

export default NavBar;
