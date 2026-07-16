import { useEffect, useRef } from "react";

function Editor() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.src = "https://editor.unlayer.com/embed.js";
    script.async = true;

    script.onload = () => {
      window.unlayer.init({
        id: "editor"
      });
    };

    document.body.appendChild(script);
  }, []);

  function exportHTML() {
    if (!window.unlayer) return;

    window.unlayer.exportHtml((data) => {
      console.log(data.html);
      alert("Merge!");
    });
  }

  return (
    <div>
      <div id="editor" style={{ height: "600px" }} />
      <button onClick={exportHTML}>Export</button>
    </div>
  );
}

export default Editor;