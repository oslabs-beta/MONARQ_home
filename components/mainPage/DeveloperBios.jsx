import { Flex } from "@chakra-ui/react";
import React from "react";
import Bio from "./Bio";

const DeveloperBios = () => {
  const outputBios = [];

  const developer = [
    {
      name: "Peter Baniuszewicz",
      title: "Fullstack Engineer",
      linkedIn: "https://www.linkedin.com/in/peterbaniuszewicz/",
      github: "https://github.com/Peter-Ba",
    },

    {
      name: "Amy Chen",
      title: "Fullstack Engineer",
      linkedIn: "https://www.linkedin.com/in/amyechen",
      github: "https://github.com/designal46",
    },

    {
      name: "Tyler Kneidl",
      title: "Fullstack Engineer",
      linkedIn: "https://www.linkedin.com/in/tylerkneidl/",
      github: "https://github.com/tylerkneidl",
    },

    {
      name: "Helen Regula",
      title: "Fullstack Engineer",
      linkedIn: "https://www.linkedin.com/in/helen-regula/",
      github: "https://github.com/helenregula",
    },
  ];

  developer.forEach((person) => {
    outputBios.push(
      <Bio
        name={person.name}
        title={person.title}
        linkedIn={person.linkedIn}
        github={person.github}
      />
    );
  });

  return (
    <Flex alignItems="center" justifyContent="space-evenly" width="100%" marginBottom="50px">
      {outputBios}
    </Flex>
  );
};

export default DeveloperBios;
