import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

function App() {
  const [text, setText] = useState(
    `# *By [Mukul Sharma](https://www.linkedin.com/in/mukul98s/)*`
  );

  return (
    <div className="App">
      <h1>Markdown Preview</h1>
      <textarea
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        id="editor"
      />
      <article id="preview">
        <ReactMarkdown remarkPlugins={[gfm]} children={text} />
      </article>
    </div>
  );
}

export default App;
