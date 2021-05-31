/* eslint-disable react/prop-types */
import React, { useState, useEffect, useImperativeHandle } from "react";

import Tabs from "./Tabs";
import TabsPane from "./TabsPane";

const Operations = (props) => {
  const { setOperation, gqlURL, passedRef, isLoaded, setIsLoaded } = props;
  const introspectionQuery = {
    query:
      // "{__schema {queryType {name fields {name}}mutationType {name fields {name}}}}",
      "{__schema {queryType {name fields {name type {name kind ofType {name kind}}}}mutationType {name fields {name}}}}",
  };
  const [introspectedTypes, setIntrospectedTypes] = useState({});
  const [currentTab, setCurrentTab] = useState("");

  const getIntrospection = async () => {
    setIsLoaded(false);
    const rawResponse = await fetch(`${gqlURL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(introspectionQuery),
    });
    const response = await rawResponse.json();
    setIsLoaded(true);
    console.log('introspection data raw', response.data);
    // eslint-disable-next-line no-underscore-dangle
    setIntrospectedTypes(response.data.__schema);
  };

  useImperativeHandle(passedRef, () => ({
    getIntrospection,
  }));

  useEffect(() => {}, [currentTab, isLoaded]);

  // useEffect(() => {
  //   getIntrospection();
  // }, [gqlURL]);

  const types = [];
  // for (const key in introspectedTypes) {
  //   types.push(introspectedTypes[key].name);
  // }
  Object.keys(introspectedTypes).forEach((key) => {
    if (introspectedTypes[key]) types.push(introspectedTypes[key].name);
  });
  const operations = Object.values(introspectedTypes);

  return (
    <div>
      <Tabs setCurrentTab={setCurrentTab} types={types} />
      <TabsPane
        isLoaded={isLoaded}
        currentTab={currentTab}
        operations={operations}
        setOperation={setOperation}
      />
    </div>
  );
};

export default Operations;
