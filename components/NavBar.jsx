import React from "react";
import { Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <div>
      <a href="https://github.com/oslabs-beta/MONARQ">
        <Button>Github</Button>
      </a>
      <a href="https://medium.com/">
        <Button>Press</Button>
      </a>
      <a href="https://www.linkedin.com/">
        <Button>LinkedIn</Button>
      </a>
      <a href="https://graphql.org/">
        <Button>Resources</Button>
      </a>
    </div>
  );
};

export default NavBar;
