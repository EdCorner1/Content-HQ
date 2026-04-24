'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple password check - change 'clawbite2026' to whatever you want
    if (password === 'clawbite2026') {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!authenticated) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#0e0e0e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{
          background: '#161616',
          border: '1px solid #2a2a2a',
          borderRadius: '12px',
          padding: '48px',
          maxWidth: '400px',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '800',
            color: '#f2f2f2',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            <span style={{color: '#e8332a'}}>Clawbite</span> & <span style={{color: '#c8c8d0'}}>Detris</span>
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#a0a0a0',
            marginBottom: '32px'
          }}>Content Partnership Dashboard</p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#1e1e1e',
                border: '1px solid #333',
                borderRadius: '6px',
                color: '#f2f2f2',
                fontSize: '14px',
                marginBottom: '16px',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                background: '#e8332a',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: dashboardHTML }} />
  );
}

const dashboardHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Content Partnership Dashboard</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

:root {
  --bg: #0e0e0e;
  --surface: #161616;
  --surface2: #1e1e1e;
  --surface3: #242424;
  --border: #2a2a2a;
  --border2: #333333;
  --text: #f2f2f2;
  --text-2: #a0a0a0;
  --text-3: #555555;
  --claw: #e8332a;
  --claw-soft: #ff5a52;
  --claw-dim: rgba(232,51,42,0.1);
  --claw-border: rgba(232,51,42,0.25);
  --det: #c8c8d0;
  --det-soft: #e2e2ea;
  --det-dim: rgba(200,200,208,0.08);
  --det-border: rgba(200,200,208,0.2);
  --green: #3ddc84;
  --green-dim: rgba(61,220,132,0.1);
  --amber: #f5a623;
  --amber-dim: rgba(245,166,35,0.1);
  --blue: #4da6ff;
  --blue-dim: rgba(77,166,255,0.1);
}

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  line-height: 1.5;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.header {
  padding: 40px 52px 32px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-3);
  margin-bottom: 10px;
}
.title-lockup {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
}
.title-client {
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
}
.title-client.red { color: var(--claw-soft); }
.title-client.grey { color: var(--det-soft); }
.title-sep { color: var(--text-3); font-weight: 300; font-size: 30px; }
.title-sub {
  font-size: 13px;
  color: var(--text-2);
  margin-top: 8px;
  font-family: 'JetBrains Mono', monospace;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 100px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.pill-live {
  background: var(--green-dim);
  border: 1px solid rgba(61,220,132,0.3);
  color: var(--green);
}
.pulse {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse 2.2s ease-in-out infinite;
}
@keyframes pulse {
  0%,100% { opacity:1; transform:scale(1); }
  50% { opacity:0.3; transform:scale(0.8); }
}
.pill-date {
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--text-2);
}

.nav {
  display: flex;
  padding: 0 52px;
  border-bottom: 1px solid var(--border);
  overflow-x: auto;
  gap: 0;
  scrollbar-width: none;
}
.nav::-webkit-scrollbar { display:none; }
.nav-btn {
  padding: 16px 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-3);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.15s, border-color 0.15s;
  letter-spacing: 0.01em;
}
.nav-btn:hover { color: var(--text-2); }
.nav-btn.active { color: var(--text); border-bottom-color: var(--claw); }

.page { padding: 40px 52px; max-width: 1360px; margin: 0 auto; }
.panel { display: none; }
.panel.active { display: block; }

.kpi-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 40px;
}
.kpi {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 22px 24px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s;
}
.kpi:hover { border-color: var(--border2); }
.kpi-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-3);
  margin-bottom: 12px;
}
.kpi-value {
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 6px;
}
.kpi-sub {
  font-size: 12px;
  color: var(--text-3);
  font-family: 'JetBrains Mono', monospace;
}
.kpi-accent-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
}

.section-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
  margin-top: 36px;
}
.section-head:first-child { margin-top: 0; }
.section-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-3);
  white-space: nowrap;
}
.section-line {
  flex: 1;
  height: 1px;
  background: var(--border);
}

.client-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
.client-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}
.client-card-head {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.client-card-head.red { background: var(--claw-dim); }
.client-card-head.grey { background: var(--det-dim); }
.client-name {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.client-name.red { color: var(--claw-soft); }
.client-name.grey { color: var(--det-soft); }
.status-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 4px;
}
.badge-catchup { background: var(--amber-dim); color: var(--amber); border: 1px solid rgba(245,166,35,0.25); }
.badge-ontarget { background: var(--green-dim); color: var(--green); border: 1px solid rgba(61,220,132,0.25); }
.badge-complete { background: var(--blue-dim); color: var(--blue); border: 1px solid rgba(77,166,255,0.25); }
.client-card-body { padding: 24px; }

.prog-block { margin-bottom: 18px; }
.prog-block:last-child { margin-bottom: 0; }
.prog-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 7px;
}
.prog-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-2);
  letter-spacing: 0.02em;
}
.prog-count {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--text-2);
}
.prog-count strong {
  color: var(--text);
  font-size: 14px;
}
.track {
  width: 100%;
  height: 5px;
  background: var(--surface3);
  border-radius: 3px;
  overflow: hidden;
}
.fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.5s ease;
}
.fill-red { background: var(--claw); }
.fill-grey { background: var(--det); }
.fill-amber { background: var(--amber); }
.fill-green { background: var(--green); }

.timeline-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}
.tl-row {
  display: grid;
  grid-template-columns: 90px 20px 1fr auto;
  gap: 0 16px;
  align-items: flex-start;
  padding: 18px 24px;
  border-bottom: 1px solid var(--border);
  position: relative;
}
.tl-row:last-child { border-bottom: none; }
.tl-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--text-3);
  padding-top: 3px;
  letter-spacing: 0.02em;
}
.tl-dot-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
}
.tl-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.tl-dot.done { background: var(--green); }
.tl-dot.active { background: var(--claw); box-shadow: 0 0 0 3px var(--claw-dim); }
.tl-dot.pending { background: var(--amber); }
.tl-dot.upcoming { background: var(--border2); border: 1px solid var(--border2); }
.tl-dot-col::after {
  content: '';
  width: 1px;
  flex: 1;
  background: var(--border);
  margin-top: 6px;
  min-height: 20px;
}
.tl-row:last-child .tl-dot-col::after { display: none; }
.tl-content { padding-top: 1px; }
.tl-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 4px;
}
.tl-desc {
  font-size: 12px;
  color: var(--text-2);
  line-height: 1.6;
}
.tl-amount {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 4px;
  white-space: nowrap;
  align-self: flex-start;
}
.amt-paid { background: var(--green-dim); color: var(--green); }
.amt-due { background: var(--amber-dim); color: var(--amber); }
.amt-info { background: var(--surface2); color: var(--text-3); }
.amt-future { background: var(--blue-dim); color: var(--blue); }
.amt-go { background: var(--claw-dim); color: var(--claw-soft); }

@media (max-width: 1024px) {
  .header, .nav, .page { padding-left: 24px; padding-right: 24px; }
  .kpi-row { grid-template-columns: repeat(2, 1fr); }
  .client-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .title-client { font-size: 26px; }
  .kpi-row { grid-template-columns: 1fr 1fr; }
  .tl-row { grid-template-columns: 72px 16px 1fr auto; gap: 0 10px; }
}
</style>
</head>
<body>

<div class="header">
  <div class="header-left">
    <div class="eyebrow">Content Partnership Dashboard</div>
    <div class="title-lockup">
      <span class="title-client red">Clawbite</span>
      <span class="title-sep">&</span>
      <span class="title-client grey">Detris</span>
    </div>
    <div class="title-sub">Ed Corner · UGC Deal · Apr 2026 · $40/video + 10% MRR</div>
  </div>
  <div class="header-right">
    <div class="pill pill-live"><div class="pulse"></div>Live</div>
    <div class="pill pill-date">Fri 24 Apr 2026</div>
  </div>
</div>

<div class="nav">
  <button class="nav-btn active" onclick="switchTab('overview',this)">Overview</button>
  <button class="nav-btn" onclick="switchTab('timeline',this)">Payment Timeline</button>
  <button class="nav-btn" onclick="switchTab('catchup',this)">Catch-Up Plan</button>
</div>

<div id="tab-overview" class="page panel active">

  <div class="kpi-row">
    <div class="kpi">
      <div class="kpi-accent-line" style="background:var(--claw)"></div>
      <div class="kpi-label">Videos Delivered</div>
      <div class="kpi-value" style="color:var(--text)">30</div>
      <div class="kpi-sub">of 42 contracted</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent-line" style="background:var(--green)"></div>
      <div class="kpi-label">Flat Rate Earned</div>
      <div class="kpi-value" style="color:var(--green)">$1,200</div>
      <div class="kpi-sub">at $40 per video</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent-line" style="background:var(--amber)"></div>
      <div class="kpi-label">Payment Outstanding</div>
      <div class="kpi-value" style="color:var(--amber)">$1,200</div>
      <div class="kpi-sub">Confirm date at 7pm call</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent-line" style="background:var(--blue)"></div>
      <div class="kpi-label">MRR Commission</div>
      <div class="kpi-value" style="color:var(--blue)">$0</div>
      <div class="kpi-sub">Growing as signups compound</div>
    </div>
  </div>

  <div class="section-head"><div class="section-title">Client Delivery Status</div><div class="section-line"></div></div>
  <div class="client-grid">

    <div class="client-card">
      <div class="client-card-head red">
        <div class="client-name red">Clawbite</div>
        <div class="status-badge badge-catchup">Catching Up</div>
      </div>
      <div class="client-card-body">
        <div class="prog-block">
          <div class="prog-row">
            <div class="prog-name">TikTok — Primary Channel</div>
            <div class="prog-count"><strong>18</strong> / 21</div>
          </div>
          <div class="track"><div class="fill fill-red" style="width:86%"></div></div>
        </div>
        <div class="prog-block">
          <div class="prog-row">
            <div class="prog-name">Instagram</div>
            <div class="prog-count"><strong>10</strong> / 21</div>
          </div>
          <div class="track"><div class="fill fill-amber" style="width:48%"></div></div>
        </div>
        <div class="prog-block">
          <div class="prog-row">
            <div class="prog-name">YouTube Shorts</div>
            <div class="prog-count"><strong>10</strong> / 21</div>
          </div>
          <div class="track"><div class="fill fill-amber" style="width:48%"></div></div>
        </div>
      </div>
    </div>

    <div class="client-card">
      <div class="client-card-head grey">
        <div class="client-name grey">Detris</div>
        <div class="status-badge badge-catchup">Catching Up</div>
      </div>
      <div class="client-card-body">
        <div class="prog-block">
          <div class="prog-row">
            <div class="prog-name">TikTok — Primary Channel</div>
            <div class="prog-count"><strong>12</strong> / 21</div>
          </div>
          <div class="track"><div class="fill fill-grey" style="width:57%"></div></div>
        </div>
        <div class="prog-block">
          <div class="prog-row">
            <div class="prog-name">Instagram</div>
            <div class="prog-count"><strong>8</strong> / 21</div>
          </div>
          <div class="track"><div class="fill fill-amber" style="width:38%"></div></div>
        </div>
        <div class="prog-block">
          <div class="prog-row">
            <div class="prog-name">YouTube Shorts</div>
            <div class="prog-count"><strong>8</strong> / 21</div>
          </div>
          <div class="track"><div class="fill fill-amber" style="width:38%"></div></div>
        </div>
      </div>
    </div>

  </div>

</div>

<div id="tab-timeline" class="page panel">

  <div class="section-head"><div class="section-title">Payment History & Schedule</div><div class="section-line"></div></div>
  <div class="timeline-card">
    <div class="tl-row">
      <div class="tl-date">Apr 6</div>
      <div class="tl-dot-col"><div class="tl-dot done"></div></div>
      <div class="tl-content">
        <div class="tl-title">Instalment 1 — Paid ✓</div>
        <div class="tl-desc">First fortnightly payment received · Both clients · On time</div>
      </div>
      <div class="tl-amount amt-paid">$1,200 paid</div>
    </div>
    <div class="tl-row">
      <div class="tl-date">Apr 20</div>
      <div class="tl-dot-col"><div class="tl-dot pending"></div></div>
      <div class="tl-content">
        <div class="tl-title">Instalment 2 — Postponed</div>
        <div class="tl-desc">Deferred due to Instagram hack & scheduling issues · Date to be confirmed in today's call</div>
      </div>
      <div class="tl-amount amt-due">$1,200 due</div>
    </div>
    <div class="tl-row">
      <div class="tl-date">Apr 24</div>
      <div class="tl-dot-col"><div class="tl-dot active"></div></div>
      <div class="tl-content">
        <div class="tl-title">Client Call — 7pm Today</div>
        <div class="tl-desc">Confirm instalment 2 date · Present tracker · Show catch-up plan · Discuss vlog format upgrade</div>
      </div>
      <div class="tl-amount amt-go">Today 7pm</div>
    </div>
    <div class="tl-row">
      <div class="tl-date">Apr 27</div>
      <div class="tl-dot-col"><div class="tl-dot upcoming"></div></div>
      <div class="tl-content">
        <div class="tl-title">TikTok Milestone — Fully Caught Up</div>
        <div class="tl-desc">21/21 on TikTok for Clawbite & Detris · Instagram in progress</div>
      </div>
      <div class="tl-amount amt-future">Monday</div>
    </div>
    <div class="tl-row">
      <div class="tl-date">May 4</div>
      <div class="tl-dot-col"><div class="tl-dot upcoming"></div></div>
      <div class="tl-content">
        <div class="tl-title">Instalment 3</div>
        <div class="tl-desc">Next fortnightly payment · Vlog format in full swing</div>
      </div>
      <div class="tl-amount amt-future">$1,200</div>
    </div>
  </div>

</div>

<div id="tab-catchup" class="page panel">

  <div class="section-head"><div class="section-title">Catch-Up Timeline — Fri 24 → Mon 27 Apr</div><div class="section-line"></div></div>
  <div class="timeline-card">
    <div class="tl-row">
      <div class="tl-date">Fri 24 Apr</div>
      <div class="tl-dot-col"><div class="tl-dot active"></div></div>
      <div class="tl-content">
        <div class="tl-title">Clawbite +3 · Detris +3 · Today</div>
        <div class="tl-desc">Clawbite posts 19–21 filmed & posted — deal complete ✓ · Detris posts 13–15</div>
      </div>
      <div class="tl-amount amt-go">Today</div>
    </div>
    <div class="tl-row">
      <div class="tl-date">Sat 25 Apr</div>
      <div class="tl-dot-col"><div class="tl-dot pending"></div></div>
      <div class="tl-content">
        <div class="tl-title">Clawbite +3 banked · Detris +3</div>
        <div class="tl-desc">Clawbite posts 22–24 banked ahead for scheduling buffer · Detris posts 16–18</div>
      </div>
      <div class="tl-amount amt-info">Tomorrow</div>
    </div>
    <div class="tl-row">
      <div class="tl-date">Sun 26 Apr</div>
      <div class="tl-dot-col"><div class="tl-dot upcoming"></div></div>
      <div class="tl-content">
        <div class="tl-title">Clawbite +3 banked · Detris 21/21 ✓</div>
        <div class="tl-desc">Both TikTok accounts at 21/21 · Instagram cross-reference begins</div>
      </div>
      <div class="tl-amount amt-info">Sunday</div>
    </div>
    <div class="tl-row">
      <div class="tl-date">Mon 27 Apr</div>
      <div class="tl-dot-col"><div class="tl-dot upcoming"></div></div>
      <div class="tl-content">
        <div class="tl-title">TikTok fully caught up — both clients</div>
        <div class="tl-desc">Instagram scheduling in progress · Payment 2 confirmed</div>
      </div>
      <div class="tl-amount amt-future">Milestone</div>
    </div>
    <div class="tl-row">
      <div class="tl-date">Tue 28 Apr</div>
      <div class="tl-dot-col"><div class="tl-dot upcoming"></div></div>
      <div class="tl-content">
        <div class="tl-title">Daily vlog format begins 🎬</div>
        <div class="tl-desc">1 vlog/day → Clawbite cut + Detris cut → TikTok, Shorts, Reels, LinkedIn</div>
      </div>
      <div class="tl-amount amt-future">Next phase</div>
    </div>
  </div>

</div>

<script>
  function switchTab(id, btn) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    btn.classList.add('active');
  }
</script>
</body>
</html>
`;
