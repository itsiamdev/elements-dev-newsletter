function Preview({ html }) {
  if (!html) {
    return (
      <section className="preview-panel">
        <div className="panel-header">
          <h2>Live Preview</h2>
        </div>
        <div className="preview-placeholder">
          <p>The template preview will appear here once rendered.</p>
          <p className="hint">Click "Render Preview" in the left panel to see the email output.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="preview-panel">
      <div className="panel-header">
        <h2>Live Preview</h2>
        <span className="live-indicator">● Live</span>
      </div>
      <div className="preview-frame">
        <iframe
          srcDoc={html}
          title="Email Preview"
          sandbox=""
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#ffffff"
          }}
        />
      </div>
    </section>
  );
}

export default Preview;
