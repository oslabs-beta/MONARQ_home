/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
import React, { useState, useRef, useEffect } from "react";
import useUndo from "use-undo";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";
import Operations from "./Operations";
import EndpointInput from "./EndpointInput";
import ConfigVis from "./ConfigVis";
import Instructions from "./Instructions";

const Visualizer = () => {
  const [operation, setOperation] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [method, setMethod] = useState("");
  const [configString, setConfigString] = useState([]);
  const [gqlURL, setGqlURL] = useState("");
  const [defaultParams, setDefaultParams] = useState("");
  const [error, setError] = useState(false);
  const [configArray, { set: setConfigArray, undo: undoConfigArray, canUndo }] =
    useUndo([]);
  const { present: presentConfigArray } = configArray;
  const [isLoaded, setIsLoaded] = useState();
  const [getStarted, setStarted] = useState(false);

  const getSchema = useRef(null);

  const configArrayBuilder = () => {
    if (!endpoint || !method || !operation) return setError(true);
    const newConfigArray = [...presentConfigArray];
    if (newConfigArray.some((el) => el[0].endpoint === endpoint)) {
      const idx = newConfigArray.findIndex((el) => el[0].endpoint === endpoint);
      newConfigArray[idx][0].method.push([
        method,
        { operation, defaultParams },
      ]);
      setConfigArray(newConfigArray);
    } else {
      newConfigArray.push([
        { endpoint, method: [[method, { operation, defaultParams }]] },
      ]);
      setConfigArray(newConfigArray);
    }
  };
  const configStringBuilder = () => {
    const newConfigString = [];
    presentConfigArray.forEach((point) => {
      newConfigString.push(`\n\t'${point[0].endpoint}': {`);
      point[0].method.forEach((meth) => {
        if (defaultParams !== "") {
          newConfigString.push(`
              ${meth[0]}: {
                operation: ${operation},
                defaultParams: {${defaultParams}}
              }
            },
            `);
        } else {
          newConfigString.push(`            
          ${meth[0]}: {
            operation: ${operation},
            },
          },
        `);
        }
      });
    });
    const joinedConfigString = newConfigString.join("");
    setConfigString(joinedConfigString);
  };
  const errorBox = () => {
      return (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Missing Form Information</AlertTitle>
          <AlertDescription mr={1}>
            Endpoints, methods, and operations are required fields.
          </AlertDescription>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => {
              setError(false);
            }}
          />
        </Alert>
      );
  };

  useEffect(() => {
    if (configArray.length !== 0) {
      configStringBuilder();
    }
  }, [configArray]);
  useEffect(() => {}, [error]);



  return (
    <Grid templateColumns="2fr 3fr" templateRows="50px 1fr" gap={2}>
      {error
        ? <GridItem colSpan={3}>{errorBox()}</GridItem> 
        : <GridItem colSpan={1} rowSpan={1}>
            <Heading marginLeft={5}>Manifest Builder</Heading>
          </GridItem>
      }
      <GridItem colStart={1} colEnd={2} rowStart={2}>
        {!getStarted
        ? <Instructions setStarted={setStarted}/>
        :
        <Flex marginLeft={5} direction="column">
          <Box marginBottom={10}>
            <Box marginBottom={3}><strong>Step 1:</strong> Enter your GraphQL URL to access the schema</Box>
            <HStack>
                <Input
                  placeholder="(ex: https://rickandmortyapi.com/graphql)"
                  type="text"
                  id="gqlURL"
                  onChange={(e) => setGqlURL(e.target.value)}
                />
                <Button
                  type="button"
                  onClick={() => {
                    getSchema.current.getIntrospection();
                  }}
                >
                  Load Schema
                </Button>
              </HStack>
            </Box>
            <Box marginBottom={10}>
              <Box marginBottom={3}><strong>Step 2:</strong> Enter a desired REST API endpoint</Box>
              <EndpointInput setMethod={setMethod} setEndpoint={setEndpoint} />
            </Box>
          
          <Flex direction="column">
            <Box marginBottom={3}><strong>Step 3:</strong> Select the GraphQL operation to be executed for requests received at the endpoint</Box>
            <Operations
              passedRef={getSchema}
              gqlURL={gqlURL}
              setOperation={setOperation}
              isLoaded={isLoaded}
              setIsLoaded={setIsLoaded}
            />
            {isLoaded
              ? <Box>
              <Input
              placeholder="Enter Default Parameters (Optional)"
              type="text"
              id="gqlURL"
              onChange={(e) => setDefaultParams(e.target.value)}
            />
            <Button type="button" onClick={() => configArrayBuilder()}>
              add to config
            </Button>
            <Button type="button" onClick={undoConfigArray} disabled={!canUndo}>
              undo
            </Button>
            </Box>
              : <Box></Box>
            }
          </Flex>
        </Flex>
        }
      </GridItem>

      <GridItem colStart={2} colSpan={1} rowStart={2} rowSpan={1}>
        <Box h={500} bg="#282b2e" borderRadius={9}>
          {" "}
          ;
          <ConfigVis configString={configString} />
        </Box>
      </GridItem>
    </Grid>
  );
};
export default Visualizer;
