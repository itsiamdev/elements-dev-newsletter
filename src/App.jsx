import { useState } from "react";
import { renderToHtml } from "@unlayer/react-elements";
import DevPulseTemplate from "./components/DevPulseTemplate";
import Header from "./components/Header";
import Preview from "./components/Preview";

function App() {
  const [previewHTML, setPreviewHTML] = useState("");

  function handleRender() {
    const html = renderToHtml(<DevPulseTemplate />, {
      title: "DevPulse Weekly"
    });
    setPreviewHTML(html);
  }

  function handleExport() {
    const html = renderToHtml(<DevPulseTemplate />, {
      title: "DevPulse Weekly"
    });
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "devpulse-weekly-template.html";
    a.click();
    URL.revokeObjectURL(url);
    setPreviewHTML(html);
  }

  return (
    <div className="app">
      <Header />
      <main>
        <section className="code-panel">
          <div className="panel-header">
            <h2>Elements Template</h2>
            <div className="panel-actions">
              <button onClick={handleRender} className="btn-secondary">
                Render Preview
              </button>
              <button onClick={handleExport} className="btn-primary">
                Export HTML
              </button>
            </div>
          </div>
          <div className="code-block">
            <p>Template built with @unlayer/react-elements components:</p>
            <code>{`<Email>`}</code>
            <code>{`  <Row layout={ColumnLayouts.OneColumn}>`}</code>
            <code>{`    <Column>`}</code>
            <code>{`      <Heading>...</Heading>`}</code>
            <code>{`      <Paragraph>...</Paragraph>`}</code>
            <code>{`      <Button>...</Button>`}</code>
            <code>{`    </Column>`}</code>
            <code>{`  </Row>`}</code>
            <code>{`</Email>`}</code>
            <p className="hint">Click "Render Preview" to see the email output.</p>
          </div>
        </section>
        <Preview html={previewHTML} />
      </main>
    </div>
  );
}

export default App;
