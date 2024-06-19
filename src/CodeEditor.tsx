import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  const [textComingFromTextArea, setTextComingFromTextArea] =
    useState(`import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}   
ReactDOM.render(<App />, document.getElementById("root"));`);

  return (
    <div>
      <h2 className="font-montserrat font-semibold text-3xl text-center">
        Code-Editor-Highlighter
      </h2>
      <h3 className="text-sm text-center mt-4 font-montserrat">
        A simple code editor for syntax highlighting
      </h3>
      <a
        href="https://github.com/seetaramanjaneyulu217/code_editor_highlighter"
        target="_blank"
        rel="noreferrer"
        className="border border-black bg-black text-white px-5 py-2 rounded-xl flex justify-center text-xl mt-7 w-2/5 mx-auto"
      >
        Github
      </a>

      <Editor className="my-5" height="30vh" defaultLanguage="javascript" defaultValue={textComingFromTextArea} />

      <div className="flex items-center gap-x-5">
        <div>
          <textarea
            defaultValue={textComingFromTextArea}
            onChange={(e) => setTextComingFromTextArea(e.target.value)}
            className="border border-gray-100 bg-gray-100 flex justify-center rounded-lg mt-7 outline-none py-2 px-4 min-h-56 min-w-96 text-sm"
          ></textarea>
        </div>

        <div className="text-sm px-4 py-2 border border-gray-100 bg-gray-100 rounded-lg">
          <Highlight
            theme={themes.github}
            code={textComingFromTextArea}
            language="tsx"
          >
            {({ tokens, getLineProps, getTokenProps }) => (
              <pre className="text-gray-100">
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
