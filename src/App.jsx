import Header from "./components/Header";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { useState } from "react";

function App() {
  const [previewHTML, setPreviewHTML] = useState("");

  return (
    <div className="app">
      <Header />
      <main>
        <Editor setPreviewHTML={setPreviewHTML} />
        <Preview html={previewHTML} />
      </main>
    </div>
  );
}

export default App;
