import Header from "./components/Header";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { useCallback, useState } from "react";

function App() {
  const [previewHTML, setPreviewHTML] = useState("");

  const handlePreviewHTML = useCallback((html) => {
    setPreviewHTML(html);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Editor setPreviewHTML={handlePreviewHTML} />
        <Preview html={previewHTML} />
      </main>
    </div>
  );
}

export default App;
