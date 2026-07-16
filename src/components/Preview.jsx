function Preview({ html }) {
  if (!html) {
    return (
      <section className="preview-panel">
        <div className="panel-header">
          <h2>Live Preview</h2>
        </div>
        <div className="preview-placeholder">
          <p>The template preview will appear here once the editor loads.</p>
          <p className="hint">Start editing in the panel to see changes in real-time.</p>
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
