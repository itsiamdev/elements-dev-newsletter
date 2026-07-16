import { useEffect } from "react";

const templateDesign = {
  body: {
    rows: [
      {
        id: "header",
        type: "header",
        background: {
          color: "#0f172a"
        },
        columns: [
          {
            id: "header-col",
            contents: [
              {
                type: "text",
                text: `<div style="text-align:center; padding: 40px 20px;">
                  <h1 style="color:#ffffff; font-family:Arial,sans-serif; font-size:32px; font-weight:bold; margin:0 0 8px 0; letter-spacing:-0.5px;">DevPulse Weekly</h1>
                  <p style="color:#94a3b8; font-family:Arial,sans-serif; font-size:14px; margin:0;">Your weekly dose of developer insights</p>
                </div>`
              }
            ]
          }
        ]
      },
      {
        id: "hero",
        type: "section",
        background: {
          color: "#ffffff"
        },
        columns: [
          {
            id: "hero-col",
            contents: [
              {
                type: "text",
                text: `<div style="text-align:center; padding: 40px 30px;">
                  <span style="display:inline-block; background:#06bed6; color:#0f172a; font-family:Arial,sans-serif; font-size:12px; font-weight:bold; padding:6px 16px; border-radius:20px; text-transform:uppercase; letter-spacing:1px;">Issue #47</span>
                  <h2 style="color:#0f172a; font-family:Arial,sans-serif; font-size:26px; font-weight:bold; margin:20px 0 12px 0; line-height:1.3;">The Future of Web Assembly and Edge Computing</h2>
                  <p style="color:#475569; font-family:Arial,sans-serif; font-size:15px; line-height:1.6; margin:0 0 24px 0;">This week we explore how WebAssembly is reshaping the edge, plus the latest tools every developer needs to know about.</p>
                  <a href="#" style="display:inline-block; background:#0f172a; color:#ffffff; font-family:Arial,sans-serif; font-size:14px; font-weight:bold; padding:14px 32px; border-radius:8px; text-decoration:none;">Read Full Edition</a>
                </div>`
              }
            ]
          }
        ]
      },
      {
        id: "articles-divider",
        type: "divider",
        background: {
          color: "#f8fafc"
        },
        columns: [
          {
            id: "divider-col",
            contents: [
              {
                type: "text",
                text: `<div style="padding: 30px 30px 10px;">
                  <h3 style="color:#0f172a; font-family:Arial,sans-serif; font-size:18px; font-weight:bold; margin:0 0 20px 0; border-bottom:2px solid #06bed6; padding-bottom:8px; display:inline-block;">Featured Articles</h3>
                </div>`
              }
            ]
          }
        ]
      },
      {
        id: "article1",
        type: "section",
        background: {
          color: "#ffffff"
        },
        columns: [
          {
            id: "article1-col",
            contents: [
              {
                type: "text",
                text: `<div style="padding: 10px 30px;">
                  <div style="display:inline-block; background:#dbeafe; color:#1e40af; font-family:Arial,sans-serif; font-size:11px; font-weight:bold; padding:4px 10px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">Performance</div>
                  <h4 style="color:#0f172a; font-family:Arial,sans-serif; font-size:16px; font-weight:bold; margin:10px 0 6px 0; line-height:1.4;">Optimizing React 20 Server Components for Production</h4>
                  <p style="color:#475569; font-family:Arial,sans-serif; font-size:14px; line-height:1.5; margin:0;">A deep dive into streaming SSR, selective hydration, and reducing TTI by 40% in real-world apps.</p>
                </div>`
              }
            ]
          }
        ]
      },
      {
        id: "article2",
        type: "section",
        background: {
          color: "#ffffff"
        },
        columns: [
          {
            id: "article2-col",
            contents: [
              {
                type: "text",
                text: `<div style="padding: 10px 30px;">
                  <div style="display:inline-block; background:#dcfce7; color:#166534; font-family:Arial,sans-serif; font-size:11px; font-weight:bold; padding:4px 10px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">AI Tools</div>
                  <h4 style="color:#0f172a; font-family:Arial,sans-serif; font-size:16px; font-weight:bold; margin:10px 0 6px 0; line-height:1.4;">Building Local-First AI Agents with WebLLM</h4>
                  <p style="color:#475569; font-family:Arial,sans-serif; font-size:14px; line-height:1.5; margin:0;">Run LLMs directly in the browser. No API keys, no cloud dependency, full privacy for your users.</p>
                </div>`
              }
            ]
          }
        ]
      },
      {
        id: "article3",
        type: "section",
        background: {
          color: "#ffffff"
        },
        columns: [
          {
            id: "article3-col",
            contents: [
              {
                type: "text",
                text: `<div style="padding: 10px 30px;">
                  <div style="display:inline-block; background:#fef3c7; color:#92400e; font-family:Arial,sans-serif; font-size:11px; font-weight:bold; padding:4px 10px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">Open Source</div>
                  <h4 style="color:#0f172a; font-family:Arial,sans-serif; font-size:16px; font-weight:bold; margin:10px 0 6px 0; line-height:1.4;">TinyBase Reaches 3.0: A Reactive Database for Local Apps</h4>
                  <p style="color:#475569; font-family:Arial,sans-serif; font-size:14px; line-height:1.5; margin:0;">The tiny, fast, and reactive database for local-first apps just got better with new query engine and TypeScript 5 support.</p>
                </div>`
              }
            ]
          }
        ]
      },
      {
        id: "tool-spotlight",
        type: "section",
        background: {
          color: "#f8fafc"
        },
        columns: [
          {
            id: "tool-spotlight-col",
            contents: [
              {
                type: "text",
                text: `<div style="padding: 30px;">
                  <div style="background:#ffffff; border-radius:12px; padding:24px; box-shadow:0 2px 8px rgba(0,0,0,0.06);">
                    <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
                      <div style="width:40px; height:40px; background:#0f172a; border-radius:10px; display:flex; align-items:center; justify-content:center;">
                        <span style="color:#06bed6; font-size:20px;">⚡</span>
                      </div>
                      <div>
                        <p style="color:#64748b; font-family:Arial,sans-serif; font-size:12px; font-weight:bold; text-transform:uppercase; letter-spacing:1px; margin:0;">Tool of the Week</p>
                        <h4 style="color:#0f172a; font-family:Arial,sans-serif; font-size:16px; font-weight:bold; margin:2px 0 0 0;">Bun 1.2 Shell</h4>
                      </div>
                    </div>
                    <p style="color:#475569; font-family:Arial,sans-serif; font-size:14px; line-height:1.6; margin:0 0 16px 0;">A blazing-fast, cross-platform shell built into Bun. Supports bash syntax, pipes, and native Node.js APIs with zero configuration.</p>
                    <a href="#" style="display:inline-block; color:#06bed6; font-family:Arial,sans-serif; font-size:13px; font-weight:bold; text-decoration:none; border-bottom:2px solid #06bed6;">View on GitHub →</a>
                  </div>
                </div>`
              }
            ]
          }
        ]
      },
      {
        id: "tips",
        type: "section",
        background: {
          color: "#ffffff"
        },
        columns: [
          {
            id: "tips-col",
            contents: [
              {
                type: "text",
                text: `<div style="padding: 30px;">
                  <h3 style="color:#0f172a; font-family:Arial,sans-serif; font-size:18px; font-weight:bold; margin:0 0 16px 0;">Quick Tips</h3>
                  <div style="margin-bottom:14px;">
                    <p style="color:#06bed6; font-family:Arial,sans-serif; font-size:14px; font-weight:bold; margin:0 0 2px 0;">01.</p>
                    <p style="color:#475569; font-family:Arial,sans-serif; font-size:14px; line-height:1.5; margin:0;">Use <code style="background:#f1f5f9; padding:2px 6px; border-radius:4px; font-size:13px;">view-transitions</code> API for smooth page transitions without a framework.</p>
                  </div>
                  <div style="margin-bottom:14px;">
                    <p style="color:#06bed6; font-family:Arial,sans-serif; font-size:14px; font-weight:bold; margin:0 0 2px 0;">02.</p>
                    <p style="color:#475569; font-family:Arial,sans-serif; font-size:14px; line-height:1.5; margin:0;">Enable <code style="background:#f1f5f9; padding:2px 6px; border-radius:4px; font-size:13px;">compilerOptions.isolatedModules</code> for faster IDE performance.</p>
                  </div>
                  <div>
                    <p style="color:#06bed6; font-family:Arial,sans-serif; font-size:14px; font-weight:bold; margin:0 0 2px 0;">03.</p>
                    <p style="color:#475569; font-family:Arial,sans-serif; font-size:14px; line-height:1.5; margin:0;">Try <code style="background:#f1f5f9; padding:2px 6px; border-radius:4px; font-size:13px;">ResizeObserver</code> for responsive component logic instead of window resize events.</p>
                  </div>
                </div>`
              }
            ]
          }
        ]
      },
      {
        id: "cta",
        type: "section",
        background: {
          color: "#0f172a"
        },
        columns: [
          {
            id: "cta-col",
            contents: [
              {
                type: "text",
                text: `<div style="text-align:center; padding: 40px 30px;">
                  <h3 style="color:#ffffff; font-family:Arial,sans-serif; font-size:20px; font-weight:bold; margin:0 0 10px 0;">Share DevPulse with your team</h3>
                  <p style="color:#94a3b8; font-family:Arial,sans-serif; font-size:14px; margin:0 0 24px 0;">Forward this email or copy the link below to subscribe.</p>
                  <a href="#" style="display:inline-block; background:#06bed6; color:#0f172a; font-family:Arial,sans-serif; font-size:14px; font-weight:bold; padding:14px 32px; border-radius:8px; text-decoration:none;">Subscribe Now</a>
                </div>`
              }
            ]
          }
        ]
      },
      {
        id: "footer",
        type: "footer",
        background: {
          color: "#0f172a"
        },
        columns: [
          {
            id: "footer-col",
            contents: [
              {
                type: "text",
                text: `<div style="text-align:center; padding: 30px;">
                  <div style="margin-bottom:16px;">
                    <a href="#" style="color:#94a3b8; font-family:Arial,sans-serif; font-size:13px; text-decoration:none; margin:0 8px;">Twitter</a>
                    <a href="#" style="color:#94a3b8; font-family:Arial,sans-serif; font-size:13px; text-decoration:none; margin:0 8px;">GitHub</a>
                    <a href="#" style="color:#94a3b8; font-family:Arial,sans-serif; font-size:13px; text-decoration:none; margin:0 8px;">LinkedIn</a>
                  </div>
                  <p style="color:#64748b; font-family:Arial,sans-serif; font-size:12px; margin:0;">© 2026 DevPulse Weekly. Built with ❤️ and Elements.</p>
                </div>`
              }
            ]
          }
        ]
      }
    ]
  }
};

function Editor({ setPreviewHTML }) {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://editor.unlayer.com/embed.js";
    script.onload = () => {
      window.unlayer.init({
        id: "editor",
        projectId: "YOUR_PROJECT_ID",
        displayMode: "email",
        appearance: {
          theme: "modern_dark"
        },
        safeHtml: true
      });

      window.unlayer.loadDesign(templateDesign);

      window.unlayer.addEventListener("design:loaded", () => {
        const html = window.unlayer.exportHtml({
          format: "html"
        });
        if (html) {
          setPreviewHTML(html.html);
        }
      });

      window.unlayer.addEventListener("design:updated", () => {
        const html = window.unlayer.exportHtml({
          format: "html"
        });
        if (html) {
          setPreviewHTML(html.html);
        }
      });

      window.unlayer.addEventListener("design:export", (data) => {
        if (data && data.html) {
          setPreviewHTML(data.html);
        }
      });
    };
    document.body.appendChild(script);

    return () => {
      if (window.unlayer) {
        window.unlayer.removeEventListener("design:loaded");
        window.unlayer.removeEventListener("design:updated");
        window.unlayer.removeEventListener("design:export");
      }
    };
  }, []);

  function exportHTML() {
    if (window.unlayer) {
      window.unlayer.exportHtml((data) => {
        setPreviewHTML(data.html);
        
        const blob = new Blob([data.html], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "devpulse-weekly-template.html";
        a.click();
        URL.revokeObjectURL(url);
      });
    }
  }

  function resetTemplate() {
    if (window.unlayer) {
      window.unlayer.loadDesign(templateDesign);
    }
  }

  return (
    <section className="editor-panel">
      <div className="panel-header">
        <h2>Template Editor</h2>
        <div className="panel-actions">
          <button onClick={resetTemplate} className="btn-secondary">
            Reset Template
          </button>
          <button onClick={exportHTML} className="btn-primary">
            Export HTML
          </button>
        </div>
      </div>
      <div id="editor" style={{ height: "100%", minHeight: "600px" }} />
    </section>
  );
}

export default Editor;
