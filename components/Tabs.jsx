/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "@chakra-ui/react";

const Tabs = (props) => {
  const { types } = props;
  const { setCurrentTab } = props;
  const tabsArray = [];
  const handleClick = (id) => {
    setCurrentTab(id);
  };

  Object.values(types).forEach((type) => {
    if (type) {
      tabsArray.push(
        <Button
          key={type.toString().toLowerCase()}
          id={type}
          onClick={(e) => handleClick(e.currentTarget.id)}
        >
          {Object.values(type)}
        </Button>
      );
    }
  });

  return <div>{tabsArray}</div>;
};

export default Tabs;
