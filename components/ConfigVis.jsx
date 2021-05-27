/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import "../public/highlight.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

const ConfigVis = (props) => {
  const { configString } = props;
  const outputArray = [
    `export const manifest ={
      ${configString}
  }`,
  ];
  useEffect(() => {
    hljs.highlightAll();
  }, [configString]);

  return (
    <pre>
      <code
        colorscheme="whiteAlpha"
        display="block"
        whitespace="pre"
        className="hljs"
      >
        {outputArray[0]}
      </code>
    </pre>
  );
};
export default ConfigVis;
