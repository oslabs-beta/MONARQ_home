import React from "react";
import { Link } from "react-router-dom";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import { GrLinkedin, GrGithub } from "react-icons/gr";


const HomePage = () => {
  return (
    <Flex>
      <Link to="/manifest">Manifest Creation</Link>
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
      <Flex direction="column">
        <h2>Helen Regula</h2>
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
    </Flex>
  );
};

export default HomePage;