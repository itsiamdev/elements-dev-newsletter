import { useState } from "react";
import { renderToHtml } from "@unlayer/react-elements";
import { Row, Column, ColumnLayouts, Heading, Paragraph, Button, Divider, Image, Html, Social, Menu, Email } from '@unlayer/react-elements';
import Header from "./components/Header";
import Preview from "./components/Preview";

const socialIcons = [
  { name: 'Twitter', url: 'https://twitter.com/' },
  { name: 'GitHub', url: 'https://github.com/' },
  { name: 'LinkedIn', url: 'https://linkedin.com/' }
];

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'Articles', href: '/articles' },
  { text: 'Subscribe', href: '/subscribe' }
];

function buildTemplate() {
  return (
    <Email
      backgroundColor="#f8fafc"
      contentWidth="600px"
      contentAlign="center"
      previewText="DevPulse Weekly - Issue #47"
    >
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#0f172a" padding="40px 20px">
        <Column>
          <Heading headingType="h1" fontSize="32px" fontWeight={700} color="#ffffff" textAlign="center">
            DevPulse Weekly
          </Heading>
          <Paragraph html="Your weekly dose of developer insights" fontSize="14px" color="#94a3b8" textAlign="center" />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="40px 30px">
        <Column>
          <Row layout={ColumnLayouts.OneColumn} backgroundColor="transparent" padding="0px 0px 16px 0px">
            <Column>
              <Paragraph html="<span style='display:inline-block; background:#06bed6; color:#0f172a; font-weight:bold; padding:6px 16px; border-radius:20px; text-transform:uppercase; letter-spacing:1px; font-size:12px;'>Issue #47</span>" />
            </Column>
          </Row>
          <Heading headingType="h2" fontSize="26px" fontWeight={700} color="#0f172a" textAlign="center">
            The Future of Web Assembly and Edge Computing
          </Heading>
          <Paragraph html="This week we explore how WebAssembly is reshaping the edge, plus the latest tools every developer needs to know about." fontSize="15px" color="#475569" textAlign="center" lineHeight="1.6" />
          <Row layout={ColumnLayouts.OneColumn} backgroundColor="transparent" padding="24px 0px 0px 0px">
            <Column>
              <Button
                href="#"
                backgroundColor="#0f172a"
                color="#ffffff"
                fontSize="14px"
                fontWeight={700}
                padding="14px 32px"
                borderRadius="8px"
                textAlign="center"
              >
                Read Full Edition
              </Button>
            </Column>
          </Row>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#f8fafc" padding="30px 30px 10px">
        <Column>
          <Divider borderTopWidth="2px" borderTopColor="#06bed6" borderTopStyle="solid" textAlign="left" />
          <Heading headingType="h3" fontSize="18px" fontWeight={700} color="#0f172a" padding="8px 0px 0px 0px">
            Featured Articles
          </Heading>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="10px 30px">
        <Column>
          <Paragraph html="<span style='display:inline-block; background:#dbeafe; color:#1e40af; font-weight:bold; padding:4px 10px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px; font-size:11px;'>Performance</span>" />
          <Heading headingType="h4" fontSize="16px" fontWeight={700} color="#0f172a" padding="10px 0px 6px 0px">
            Optimizing React 20 Server Components for Production
          </Heading>
          <Paragraph html="A deep dive into streaming SSR, selective hydration, and reducing TTI by 40% in real-world apps." fontSize="14px" color="#475569" />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="10px 30px">
        <Column>
          <Paragraph html="<span style='display:inline-block; background:#dcfce7; color:#166534; font-weight:bold; padding:4px 10px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px; font-size:11px;'>AI Tools</span>" />
          <Heading headingType="h4" fontSize="16px" fontWeight={700} color="#0f172a" padding="10px 0px 6px 0px">
            Building Local-First AI Agents with WebLLM
          </Heading>
          <Paragraph html="Run LLMs directly in the browser. No API keys, no cloud dependency, full privacy for your users." fontSize="14px" color="#475569" />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="10px 30px">
        <Column>
          <Paragraph html="<span style='display:inline-block; background:#fef3c7; color:#92400e; font-weight:bold; padding:4px 10px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px; font-size:11px;'>Open Source</span>" />
          <Heading headingType="h4" fontSize="16px" fontWeight={700} color="#0f172a" padding="10px 0px 6px 0px">
            TinyBase Reaches 3.0: A Reactive Database for Local Apps
          </Heading>
          <Paragraph html="The tiny, fast, and reactive database for local-first apps just got better with new query engine and TypeScript 5 support." fontSize="14px" color="#475569" />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#f8fafc" padding="30px">
        <Column>
          <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="24px" borderRadius="12px">
            <Column>
              <Row layout={ColumnLayouts.TwoNarrowWide} backgroundColor="transparent" padding="0px">
                <Column>
                  <Image src="https://img.icons8.com/fluency/96/lightning-bolt.png" altText="Tool icon" textAlign="left" />
                </Column>
                <Column>
                  <Paragraph html="<span style='color:#64748b; font-size:12px; font-weight:bold; text-transform:uppercase; letter-spacing:1px; margin:0;'>Tool of the Week</span>" />
                  <Heading headingType="h4" fontSize="16px" fontWeight={700} color="#0f172a" padding="2px 0px 0px 0px">
                    Bun 1.2 Shell
                  </Heading>
                </Column>
              </Row>
              <Paragraph html="A blazing-fast, cross-platform shell built into Bun. Supports bash syntax, pipes, and native Node.js APIs with zero configuration." fontSize="14px" color="#475569" lineHeight="1.6" padding="16px 0px 0px 0px" />
              <Row layout={ColumnLayouts.OneColumn} backgroundColor="transparent" padding="0px">
                <Column>
                  <Button
                    href="#"
                    backgroundColor="transparent"
                    color="#06bed6"
                    fontSize="13px"
                    fontWeight={700}
                    padding="0px"
                    borderRadius="0px"
                    textAlign="left"
                  >
                    View on GitHub →
                  </Button>
                </Column>
              </Row>
            </Column>
          </Row>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="30px">
        <Column>
          <Heading headingType="h3" fontSize="18px" fontWeight={700} color="#0f172a" padding="0px 0px 16px 0px">
            Quick Tips
          </Heading>
          <Html html="<div style='margin-bottom:14px;'><p style='color:#06bed6; font-weight:bold; margin:0 0 2px 0; font-size:14px;'>01.</p><p style='color:#475569; font-size:14px; line-height:1.5; margin:0;'>Use <code style='background:#f1f5f9; padding:2px 6px; border-radius:4px; font-size:13px;'>view-transitions</code> API for smooth page transitions without a framework.</p></div><div style='margin-bottom:14px;'><p style='color:#06bed6; font-weight:bold; margin:0 0 2px 0; font-size:14px;'>02.</p><p style='color:#475569; font-size:14px; line-height:1.5; margin:0;'>Enable <code style='background:#f1f5f9; padding:2px 6px; border-radius:4px; font-size:13px;'>compilerOptions.isolatedModules</code> for faster IDE performance.</p></div><div style=''><p style='color:#06bed6; font-weight:bold; margin:0 0 2px 0; font-size:14px;'>03.</p><p style='color:#475569; font-size:14px; line-height:1.5; margin:0;'>Try <code style='background:#f1f5f9; padding:2px 6px; border-radius:4px; font-size:13px;'>ResizeObserver</code> for responsive component logic instead of window resize events.</p></div>" />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#0f172a" padding="40px 30px">
        <Column>
          <Heading headingType="h3" fontSize="20px" fontWeight={700} color="#ffffff" textAlign="center">
            Share DevPulse with your team
          </Heading>
          <Paragraph html="Forward this email or copy the link below to subscribe." fontSize="14px" color="#94a3b8" textAlign="center" padding="10px 0px 24px 0px" />
          <Row layout={ColumnLayouts.OneColumn} backgroundColor="transparent" padding="0px">
            <Column>
              <Button
                href="#"
                backgroundColor="#06bed6"
                color="#0f172a"
                fontSize="14px"
                fontWeight={700}
                padding="14px 32px"
                borderRadius="8px"
                textAlign="center"
              >
                Subscribe Now
              </Button>
            </Column>
          </Row>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#0f172a" padding="30px">
        <Column>
          <Social icons={socialIcons} iconType="circle" iconSize={32} spacing={10} align="center" />
          <Menu items={menuItems} layout="horizontal" separator="|" align="center" padding="16px 0px 0px 0px" />
          <Paragraph html="&copy; 2026 DevPulse Weekly. Built with &hearts; and Elements." fontSize="12px" color="#64748b" textAlign="center" padding="16px 0px 0px 0px" />
        </Column>
      </Row>
    </Email>
  );
}

function App() {
  const [previewHTML, setPreviewHTML] = useState("");

  function handleRender() {
    const html = renderToHtml(buildTemplate(), { title: "DevPulse Weekly" });
    setPreviewHTML(html);
  }

  function handleExport() {
    const html = renderToHtml(buildTemplate(), { title: "DevPulse Weekly" });
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
        <section className="preview-panel">
          <div className="panel-header">
            <h2>Email Template Preview</h2>
            <div className="panel-actions">
              <button onClick={handleRender} className="btn-secondary">
                Render Preview
              </button>
              <button onClick={handleExport} className="btn-primary">
                Export HTML
              </button>
            </div>
          </div>
          <Preview html={previewHTML} />
        </section>
      </main>
    </div>
  );
}

export default App;
