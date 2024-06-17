import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

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
      <h2 className="font-montserrat font-semibold text-3xl">
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
      <textarea
        defaultValue={textComingFromTextArea}
        onChange={(e) => setTextComingFromTextArea(e.target.value)}
        className="border border-gray-100 bg-gray-100 flex justify-center rounded-lg w-full mt-7 outline-none py-2 px-4 min-h-56 text-sm"
      ></textarea>

      <div>
        <Highlight
          theme={themes.nightOwl}
          code={textComingFromTextArea}
          language="tsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre style={style}>
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
  );
};

export default CodeEditor;
