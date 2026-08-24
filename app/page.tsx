"use client";

import { useState } from "react";

type Mode = "component-encode" | "component-decode" | "uri-encode" | "uri-decode";
const MODES: Array<[Mode, string, string]> = [["component-encode", "encodeURIComponent", "query value"], ["component-decode", "decodeURIComponent", "query value"], ["uri-encode", "encodeURI", "full address"], ["uri-decode", "decodeURI", "full address"]];

async function copyText(value: string) { try { await navigator.clipboard.writeText(value); return true; } catch { return false; } }

export default function Home() {
  const [input, setInput] = useState("hello world?q=café & more"); const [output, setOutput] = useState(""); const [error, setError] = useState(""); const [mode, setMode] = useState<Mode>("component-encode"); const [copied, setCopied] = useState(false);
  const run = () => { setError(""); try { const next = mode === "component-encode" ? encodeURIComponent(input) : mode === "component-decode" ? decodeURIComponent(input) : mode === "uri-encode" ? encodeURI(input) : decodeURI(input); setOutput(next); } catch { setOutput(""); setError("Could not process input. Check the percent-encoding and try again."); } };
  const handleCopy = async () => { if (output && await copyText(output)) { setCopied(true); window.setTimeout(() => setCopied(false), 1500); } };

  return <main className="telegram-room">
    <header className="telegram-bar"><div className="telegram-mark">B/10</div><div className="telegram-name"><strong>CODED MESSAGE DESK</strong><span>CLIENT-SIDE URL UTILITY</span></div><div className="telegram-state"><i /> NO SERVER REQUIRED</div></header>
    <section className="telegram-hero"><div><p className="telegram-kicker">BOOKCHAOWALIT / MESSAGE SERVICE</p><h1>Send it in<br /><em>the right code.</em></h1><p className="hero-copy">A small telegraph desk for the characters that URLs cannot carry as-is.</p></div><div className="red-stamp"><span>PROCESSED</span><strong>10</strong><b>LOCAL DESK</b></div></section>
    <section className="message-desk" aria-label="URL encoder and decoder"><div className="mode-strip"><span>CHOOSE THE WIRE</span><div role="group" aria-label="Encoding mode">{MODES.map(([id, label]) => <button key={id} className={mode === id ? "active" : ""} onClick={() => setMode(id)}><strong>{label}</strong><small>{id.includes("component") ? "component" : "URI"} · {id.includes("encode") ? "encode" : "decode"}</small></button>)}</div></div><div className="desk-rule"><span>MESSAGE FORM / {mode}</span><span>UTF-8 TEXT</span></div><div className="message-grid"><label className="message-slip input-slip"><span>Input message</span><textarea aria-label="Input message" value={input} onChange={(event) => setInput(event.target.value)} /></label><div className="wire-column" aria-hidden="true"><i /><b>→</b><i /></div><label className="message-slip output-slip"><span>Output telegram</span><textarea aria-label="Output telegram" value={output} readOnly placeholder="Converted text will appear here" /></label></div>{error && <p className="error-line" role="alert"><i />{error}</p>}<div className="desk-actions"><button className="convert-button" onClick={run}>Convert message <b>↗</b></button><button className="copy-button" disabled={!output} onClick={handleCopy}>{copied ? "Copied" : "Copy output"}</button></div><p className="desk-note">Component encoding is for individual query values. URI encoding keeps the structure of a full address.</p></section>
    <footer className="telegram-footer"><span>BOOKCHAOWALIT / URL ENCODER</span><span>BROWSER STATE · NO MESSAGE IS SENT</span></footer>
  </main>;
}
