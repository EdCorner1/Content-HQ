'use client';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'clawbite2026') {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (!authenticated) {
    return <LoginScreen password={password} setPassword={setPassword} onSubmit={handleSubmit} error={error} />;
  }

  return (
    <div style={styles.page}>
      <Header />
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      <main style={styles.main}>
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'daily' && <DailyContentTab />}
        {activeTab === 'delivery' && <DeliveryTab />}
        {activeTab === 'payments' && <PaymentsTab />}
        {activeTab === 'timeline' && <TimelineTab />}
        {activeTab === 'mrr' && <MRRTab />}
        {activeTab === 'settings' && <SettingsTab />}
      </main>
      <Footer />
    </div>
  );
}

// ═══════════ LOGIN SCREEN ═══════════
function LoginScreen({ password, setPassword, onSubmit, error }) {
  return (
    <div style={styles.loginPage}>
      <div style={styles.loginCard}>
        <div style={styles.loginLogo}>
          <span style={{ color: '#dc2626' }}>Clawbite</span>
          <span style={{ color: '#94a3b8' }}> & </span>
          <span style={{ color: '#64748b' }}>Detris</span>
        </div>
        <div style={styles.loginSub}>Content Partnership Dashboard</div>
        <form onSubmit={onSubmit} style={{ marginTop: 32 }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter access password"
            style={styles.loginInput}
            autoFocus
          />
          {error && <div style={styles.loginError}>{error}</div>}
          <button type="submit" style={styles.loginBtn}>
            Access Dashboard →
          </button>
        </form>
      </div>
    </div>
  );
}

// ═══════════ HEADER ═══════════
function Header() {
  return (
    <header style={styles.header}>
      <div>
        <div style={styles.eyebrow}>Content Partnership Dashboard</div>
        <h1 style={styles.h1}>
          <span style={{ color: '#dc2626' }}>Clawbite</span>
          <span style={{ color: '#94a3b8', fontWeight: 300 }}> & </span>
          <span style={{ color: '#64748b' }}>Detris</span>
        </h1>
        <div style={styles.subtitle}>Ed Corner · UGC Partnership · April 2026</div>
      </div>
      <div style={styles.headerRight}>
        <div style={styles.livePill}>
          <span style={styles.liveDot}></span>
          Live Tracker
        </div>
        <div style={styles.datePill}>Updated Fri 24 Apr 2026</div>
      </div>
    </header>
  );
}

// ═══════════ NAV ═══════════
function Nav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'daily', label: 'Today\'s Content' },
    { id: 'delivery', label: 'Content Delivery' },
    { id: 'payments', label: 'Payments' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'mrr', label: 'MRR Upside' },
    { id: 'settings', label: 'Settings' }
  ];
  return (
    <nav style={styles.nav}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={{
            ...styles.navBtn,
            ...(activeTab === tab.id ? styles.navBtnActive : {})
          }}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

// ═══════════ TODAY'S SCRIPTS ═══════════
function TodayScripts() {
  const scripts = [
    {
      client: 'Clawbite',
      post: '#19',
      hook: '"I used to spend my entire Monday morning just figuring out what I was supposed to be doing. Clawbite fixed that in four days."',
      script: 'So I\'m a digital nomad in Las Palmas, running a content business across multiple clients. And the biggest drain on my time wasn\'t the work — it was the admin around the work. Scheduling, prioritising, figuring out what was urgent and what could wait. It was chaos. Then I started using Clawbite as my AI calendar and workflow agent. And I want to show you something. [Show screen — Clawbite dashboard] This is my week, laid out automatically. It\'s already prioritised my client deadlines, blocked focus time, and flagged three things I would have completely forgotten. I didn\'t set any of this up this morning. Clawbite did it overnight. This is what it looks like when your calendar actually works for you instead of against you.',
      cta: '"If your mornings feel like chaos, link in bio — Clawbite changed mine. Follow for the daily breakdown of how it\'s running my entire business."',
      duration: '45–60 sec',
      color: '#dc2626'
    },
    {
      client: 'Clawbite',
      post: '#20',
      hook: '"What if you could clone your brain and just let it manage your schedule? That\'s basically what Clawbite is — and I\'m not even joking."',
      script: 'Okay so hear me out. I\'ve got multiple clients, a YouTube channel, a newsletter, a product I\'m building — and until recently my task management was a mess of sticky notes and vibes. [Pause. Look at camera.] Vibes. That was my system. Then Clawbite came in. It\'s an AI agent that actually learns how you work. It knows which clients are high priority, it knows when I do my best creative work — mornings, for me — and it protects that time. [Show screen] Right here, you can see it\'s blocked my 9 to 11 slot every day as deep work. No meetings allowed in there. It did that based on how I\'d been working, not because I told it to. That\'s the thing — it doesn\'t need constant instructions. It just figures it out.',
      cta: '"Drop a comment — what\'s the most chaotic part of your work week? Because Clawbite probably has a fix for it. And follow — I\'m documenting this whole experiment daily."',
      duration: '50–65 sec',
      color: '#dc2626'
    },
    {
      client: 'Clawbite',
      post: '#21 ✓',
      hook: '"I just got an hour back in my day and I didn\'t have to do anything to get it. Clawbite found the dead time in my schedule and eliminated it."',
      script: 'So one thing I didn\'t expect when I started using Clawbite was this — it doesn\'t just organise what\'s already there. It actively finds inefficiencies. It spotted that I had three separate admin tasks I was doing at different times of day that could all be batched into one 30-minute slot. [Show screen] It moved them. It rescheduled them. It freed up an hour that I was wasting on context switching. And context switching is one of those silent productivity killers nobody talks about. Every time you jump between tasks, your brain needs time to refocus. Clawbite eliminated that problem without me asking it to. I now have a full extra hour every single day. That\'s five hours a week. Twenty hours a month. Just from one AI agent making smarter decisions about my time than I was.',
      cta: '"Link in bio if you want to try Clawbite. And follow — I\'m handing it more control every week and it keeps surprising me."',
      duration: '55–70 sec',
      color: '#dc2626'
    },
    {
      client: 'Detris',
      post: '#13',
      hook: '"I woke up this morning to 11 new leads in my inbox. I didn\'t send a single message yesterday. My AI agent did it while I slept."',
      script: 'This is Detris. It\'s an AI agent that handles my lead generation completely autonomously. And when I first heard about this I was sceptical — because lead gen is relationship building, right? It needs to feel human. How is an AI going to do that? [Pause] But here\'s the thing. Detris doesn\'t spam. It doesn\'t send generic copy-paste pitches. It researches the brand, understands their content needs, and sends a personalised outreach that reads like I wrote it. [Show screen — Detris dashboard or inbox] These 11 leads came in overnight. Look at this one — it mentions a specific campaign the brand ran, their content style, their upcoming product. That\'s not a template. That\'s real research. My pipeline is growing while I sleep. I still can\'t quite believe it.',
      cta: '"Link in bio for Detris — if you\'re a creator trying to land brand deals, this is the cheat code. Follow for the daily numbers."',
      duration: '55–70 sec',
      color: '#64748b'
    },
    {
      client: 'Detris',
      post: '#14',
      hook: '"Most UGC creators spend 10 hours a week on outreach. I spend zero. Let me show you what I use instead."',
      script: 'If you\'re a UGC creator you know the grind. You make the content, you edit it, you deliver it — and then somewhere in between you\'re supposed to be pitching new clients. Cold emails, DMs, portfolio links — it\'s exhausting. And most people are doing it wrong, sending the same generic message to a hundred brands and getting ignored. Detris changed this for me completely. It handles all of my outreach. It finds brands actively looking for UGC creators — in my niche, at my price point — and sends personalised pitches on my behalf. [Show Detris dashboard or lead list] This week alone: 34 outreach messages sent, 8 opened, 3 replies, 1 call booked. I didn\'t write a single one. What I did do was film great content for clients. That\'s the swap — I focus purely on the creative work while Detris handles the business development side.',
      cta: '"Want to stop doing cold outreach and start getting clients on autopilot? Link in bio. And follow — I\'m sharing the exact numbers every single day."',
      duration: '60–75 sec',
      color: '#64748b'
    },
    {
      client: 'Detris',
      post: '#15',
      hook: '"I asked my AI agent to write a cold pitch for a brand deal. Then I rewrote it myself. Then I compared them. The AI won. I\'m not even a little embarrassed."',
      script: 'I want to be honest about something. I\'ve been doing UGC for a while. I know how to write a pitch. So when I started using Detris I thought — fine, it\'ll save me time, but I\'ll probably write better outreach than it does. So I tested it. Same brand, my pitch vs Detris\'s pitch. [Show both or read them] Mine was fine. Professional. Solid. Detris\'s version mentioned a specific campaign the brand had run three months ago. It referenced their UGC style. It opened with a question about their next product launch. It felt like someone had done their homework. Because they had — Detris had researched them and I hadn\'t made the time. That\'s the gap. I know how to write. Detris knows how to research. Together? A different level entirely.',
      cta: '"Detris is in the bio — go check it out. And if you\'re a creator trying to level up your outreach, follow because this series is for you."',
      duration: '55–70 sec',
      color: '#64748b'
    }
  ];

  return (
    <div style={styles.scriptGrid}>
      {scripts.map((s, i) => (
        <ScriptCardDisplay key={i} script={s} />
      ))}
    </div>
  );
}

function ScriptCardDisplay({ script }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const full = `HOOK:\n${script.hook}\n\nSCRIPT:\n${script.script}\n\nCTA:\n${script.cta}`;
    navigator.clipboard.writeText(full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.clientCard}>
      <div style={{ ...styles.clientHead, background: script.color === '#dc2626' ? '#fef2f2' : '#f8fafc' }}>
        <div style={{ ...styles.clientName, color: script.color }}>
          {script.client} — {script.post}
        </div>
        <div style={{ fontSize: 11, color: '#64748b', fontWeight: 500 }}>{script.duration}</div>
      </div>
      <div style={styles.clientBody}>
        <div style={{ marginBottom: 14 }}>
          <div style={styles.progName}>Hook</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a', lineHeight: 1.6 }}>
            {script.hook}
          </div>
        </div>
        <div style={{ marginBottom: 14 }}>
          <div style={styles.progName}>Script</div>
          <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.6 }}>
            {script.script}
          </div>
        </div>
        <div style={{ marginBottom: 14 }}>
          <div style={styles.progName}>CTA</div>
          <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.6 }}>
            {script.cta}
          </div>
        </div>
        <button
          onClick={copyToClipboard}
          style={{
            ...styles.loginBtn,
            width: '100%',
            marginTop: 12,
            background: copied ? '#16a34a' : script.color
          }}
        >
          {copied ? '✓ Copied' : 'Copy Full Script'}
        </button>
      </div>
    </div>
  );
}

// ═══════════ DAILY CONTENT TAB ═══════════
function DailyContentTab() {
  const [clawbiteData, setClawbiteData] = useState(null);
  const [detrisData, setDetrisData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setLoading(true);
    setError('');
    try {
      // Fetch Clawbite content
      const clawbiteRes = await fetch('/api/content?account=ed.clawbite&platform=tiktok');
      const clawbite = clawbiteRes.ok ? await clawbiteRes.json() : null;
      setClawbiteData(clawbite);

      // Fetch Detris content
      const detrisRes = await fetch('/api/content?account=Ed.detris&platform=tiktok');
      const detris = detrisRes.ok ? await detrisRes.json() : null;
      setDetrisData(detris);
    } catch (err) {
      setError('Failed to load content. Check API connection.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SectionHeading>Today's Scripts (Fri 24 Apr)</SectionHeading>
      <TodayScripts />

      <SectionHeading style={{ marginTop: 48 }}>Today's Content</SectionHeading>
      
      {loading && (
        <div style={styles.infoCard}>
          <div style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>
            Loading today's content from social accounts...
          </div>
        </div>
      )}

      {error && (
        <div style={{ ...styles.infoCard, background: '#fef2f2', borderColor: '#fca5a5' }}>
          <div style={{ padding: '16px', color: '#dc2626' }}>⚠️ {error}</div>
        </div>
      )}

      {!loading && !error && (
        <>
          <div style={styles.clientGrid}>
            <ContentCard
              name="Clawbite"
              color="#dc2626"
              bgLight="#fef2f2"
              data={clawbiteData}
            />
            <ContentCard
              name="Detris"
              color="#64748b"
              bgLight="#f8fafc"
              data={detrisData}
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: 24, color: '#94a3b8', fontSize: 13 }}>
            Last updated: {new Date().toLocaleTimeString()} · Auto-refreshes every 30 minutes
          </div>
        </>
      )}
    </div>
  );
}

function ContentCard({ name, color, bgLight, data }) {
  if (!data) {
    return (
      <div style={styles.clientCard}>
        <div style={{ ...styles.clientHead, background: bgLight }}>
          <div style={{ ...styles.clientName, color }}>{name}</div>
        </div>
        <div style={styles.clientBody}>
          <div style={{ color: '#94a3b8', fontSize: 13 }}>No content available yet</div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.clientCard}>
      <div style={{ ...styles.clientHead, background: bgLight }}>
        <div style={{ ...styles.clientName, color }}>{name}</div>
      </div>
      <div style={styles.clientBody}>
        <div style={{ marginBottom: 16 }}>
          <div style={styles.progName}>Latest TikTok Video</div>
          <a href={data.url} target="_blank" rel="noopener noreferrer" style={{
            color: '#2563eb',
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4
          }}>
            View on TikTok →
          </a>
        </div>
        <div style={{ ...styles.infoRow, borderBottom: 'none' }}>
          <span style={styles.infoLabel}>Views</span>
          <span style={{ ...styles.infoValue, color }}>{data.views?.toLocaleString() || '—'}</span>
        </div>
        <div style={{ ...styles.infoRow, borderBottom: 'none' }}>
          <span style={styles.infoLabel}>Likes</span>
          <span style={{ ...styles.infoValue, color }}>{data.likes?.toLocaleString() || '—'}</span>
        </div>
        <div style={{ ...styles.infoRow, borderBottom: 'none' }}>
          <span style={styles.infoLabel}>Comments</span>
          <span style={{ ...styles.infoValue, color }}>{data.comments?.toLocaleString() || '—'}</span>
        </div>
        <div style={{ ...styles.infoRow, borderBottom: 'none' }}>
          <span style={styles.infoLabel}>Posted</span>
          <span style={styles.infoValue}>{data.timestamp || '—'}</span>
        </div>
      </div>
    </div>
  );
}

// ═══════════ OVERVIEW TAB ═══════════
function OverviewTab() {
  return (
    <div>
      <SectionHeading>At a Glance</SectionHeading>
      <div style={styles.kpiRow}>
        <KPI label="Videos Delivered" value="30" sub="of 42 contracted" color="#0f172a" accent="#dc2626" />
        <KPI label="Total Earned" value="$1,200" sub="at $40 per video" color="#16a34a" accent="#16a34a" />
        <KPI label="Payment Outstanding" value="$1,200" sub="Instalment 2 — due date to confirm" color="#d97706" accent="#d97706" />
        <KPI label="MRR Commission" value="$0" sub="Growing with signups" color="#2563eb" accent="#2563eb" />
      </div>

      <SectionHeading>Client Delivery Status</SectionHeading>
      <div style={styles.clientGrid}>
        <ClientCard
          name="Clawbite"
          color="#dc2626"
          bgLight="#fef2f2"
          status="Catching Up"
          platforms={[
            { name: 'TikTok (Primary)', done: 18, total: 21, primary: true },
            { name: 'Instagram', done: 10, total: 21 },
            { name: 'YouTube Shorts', done: 10, total: 21 }
          ]}
        />
        <ClientCard
          name="Detris"
          color="#64748b"
          bgLight="#f8fafc"
          status="Catching Up"
          platforms={[
            { name: 'TikTok (Primary)', done: 12, total: 21, primary: true },
            { name: 'Instagram', done: 8, total: 21 },
            { name: 'YouTube Shorts', done: 8, total: 21 }
          ]}
        />
      </div>

      <SectionHeading>Deal Structure</SectionHeading>
      <div style={styles.infoCard}>
        <div style={styles.infoGrid}>
          <InfoRow label="Monthly Value" value="$2,400" highlight="#16a34a" />
          <InfoRow label="Rate Per Video" value="$40" />
          <InfoRow label="Videos Per Client" value="21 / month" />
          <InfoRow label="Payment Schedule" value="Fortnightly" />
          <InfoRow label="MRR Commission" value="10% of signups" highlight="#2563eb" />
          <InfoRow label="Contract Start" value="Apr 6, 2026" />
        </div>
      </div>
    </div>
  );
}

// ═══════════ DELIVERY TAB ═══════════
function DeliveryTab() {
  return (
    <div>
      <SectionHeading>Clawbite — Post-by-Post Status</SectionHeading>
      <div style={styles.deliveryCard}>
        <div style={{ ...styles.deliveryHead, background: '#fef2f2' }}>
          <div style={{ ...styles.deliveryName, color: '#dc2626' }}>Clawbite — 21 videos contracted</div>
          <div style={styles.statusBadgeCatchup}>18 / 21 delivered</div>
        </div>
        <div style={styles.deliveryBody}>
          <DeliveryRow status="done" posts="Posts 1–18" note="Live on TikTok" />
          <DeliveryRow status="today" posts="Post 19" note="Filming & posting today (Fri 24 Apr)" />
          <DeliveryRow status="tomorrow" posts="Post 20" note="Filming & posting Sat 25 Apr" />
          <DeliveryRow status="sunday" posts="Post 21" note="Filming & posting Sun 26 Apr — deal complete ✓" />
          <DeliveryRow status="banked" posts="Posts 22–27" note="6 additional videos banked ahead as scheduling buffer" />
        </div>
      </div>

      <SectionHeading>Detris — Post-by-Post Status</SectionHeading>
      <div style={styles.deliveryCard}>
        <div style={{ ...styles.deliveryHead, background: '#f8fafc' }}>
          <div style={{ ...styles.deliveryName, color: '#475569' }}>Detris — 21 videos contracted</div>
          <div style={styles.statusBadgeCatchup}>12 / 21 delivered</div>
        </div>
        <div style={styles.deliveryBody}>
          <DeliveryRow status="done" posts="Posts 1–12" note="Live on TikTok" />
          <DeliveryRow status="today" posts="Posts 13–15" note="Filming & posting today (Fri 24 Apr)" />
          <DeliveryRow status="tomorrow" posts="Posts 16–18" note="Filming & posting Sat 25 Apr" />
          <DeliveryRow status="sunday" posts="Posts 19–21" note="Filming & posting Sun 26 Apr — deal complete ✓" />
        </div>
      </div>

      <SectionHeading>Instagram Catch-Up Process</SectionHeading>
      <div style={styles.processCard}>
        <ProcessStep n="1" title="Download TikTok content" desc="Pull all videos from both Clawbite and Detris TikTok accounts" />
        <ProcessStep n="2" title="Cross-reference Instagram" desc="Compare against what's currently live on each Instagram account" />
        <ProcessStep n="3" title="Schedule missing posts" desc="Fill gaps to match TikTok → Instagram parity" />
        <ProcessStep n="4" title="Target completion" desc="Instagram fully caught up by end of week commencing Mon 27 Apr" highlight />
      </div>
    </div>
  );
}

// ═══════════ PAYMENTS TAB ═══════════
function PaymentsTab() {
  return (
    <div>
      <SectionHeading>Payment Summary</SectionHeading>
      <div style={styles.kpiRow}>
        <KPI label="Contract Value" value="$2,400" sub="Per month · both clients" color="#0f172a" accent="#0f172a" />
        <KPI label="Received" value="$1,200" sub="Instalment 1 · Apr 6" color="#16a34a" accent="#16a34a" />
        <KPI label="Outstanding" value="$1,200" sub="Instalment 2 · postponed" color="#d97706" accent="#d97706" />
        <KPI label="Next Due" value="May 4" sub="Instalment 3 (planned)" color="#2563eb" accent="#2563eb" />
      </div>

      <SectionHeading>Payment Breakdown Per Client</SectionHeading>
      <div style={styles.earningsGrid}>
        <EarningsCard
          name="Clawbite"
          color="#dc2626"
          bgLight="#fef2f2"
          delivered={18}
          rate={40}
          paid={600}
        />
        <EarningsCard
          name="Detris"
          color="#64748b"
          bgLight="#f8fafc"
          delivered={12}
          rate={40}
          paid={600}
        />
      </div>
    </div>
  );
}

// ═══════════ TIMELINE TAB ═══════════
function TimelineTab() {
  return (
    <div>
      <SectionHeading>Payment & Delivery Timeline</SectionHeading>
      <div style={styles.timelineCard}>
        <TimelineRow date="Apr 6" state="done" title="Instalment 1 received" desc="First fortnightly payment · both clients" amount="$1,200 paid" amountColor="#16a34a" amountBg="#f0fdf4" />
        <TimelineRow date="Apr 20" state="pending" title="Instalment 2 postponed" desc="Deferred due to Instagram account issues — date being confirmed" amount="$1,200 due" amountColor="#d97706" amountBg="#fffbeb" />
        <TimelineRow date="Apr 24" state="active" title="Client review call — 7pm" desc="Confirm payment 2 date · present catch-up plan · discuss vlog format phase 2" amount="Today" amountColor="#dc2626" amountBg="#fef2f2" />
        <TimelineRow date="Apr 27" state="upcoming" title="TikTok milestone — fully caught up" desc="21/21 on TikTok for both clients · Instagram in progress" amount="Monday" amountColor="#2563eb" amountBg="#eff6ff" />
        <TimelineRow date="Apr 28" state="upcoming" title="Daily vlog format begins" desc="1 vlog per day → cut for both Clawbite & Detris → multi-platform distribution" amount="Phase 2" amountColor="#2563eb" amountBg="#eff6ff" />
        <TimelineRow date="May 4" state="upcoming" title="Instalment 3" desc="Next fortnightly payment · vlog format in full swing" amount="$1,200" amountColor="#64748b" amountBg="#f8fafc" last />
      </div>
    </div>
  );
}

// ═══════════ MRR TAB ═══════════
function MRRTab() {
  const [signups, setSignups] = useState(0);
  const [planValue, setPlanValue] = useState(75);
  const commission = signups * planValue * 0.10;
  const annual = commission * 12;

  return (
    <div>
      <SectionHeading>MRR Upside — The Long Game</SectionHeading>
      <div style={styles.mrrIntro}>
        <p style={styles.mrrIntroText}>
          The flat rate covers production. The <strong style={{ color: '#2563eb' }}>10% MRR commission</strong> aligns incentives —
          Ed earns recurring revenue from every user the content drives to sign up. The videos are permanent assets
          that compound over time.
        </p>
      </div>

      <SectionHeading>Revenue Scenarios</SectionHeading>
      <div style={styles.scenarioGrid}>
        <ScenarioCard label="Conservative" signups="50" mrr="$375/mo" annual="$4,500/yr" />
        <ScenarioCard label="Traction" signups="200" mrr="$1,500/mo" annual="$18,000/yr" />
        <ScenarioCard label="Solid Month" signups="500" mrr="$3,750/mo" annual="$45,000/yr" />
        <ScenarioCard label="Viral Video" signups="1,000" mrr="$7,500/mo" annual="$90,000/yr" highlight />
        <ScenarioCard label="1M Views/mo" signups="3,000+" mrr="$22,500+/mo" annual="Transformative" highlight />
      </div>

      <SectionHeading>Live Calculator</SectionHeading>
      <div style={styles.calcCard}>
        <div style={styles.calcGrid}>
          <div style={styles.calcField}>
            <label style={styles.calcLabel}>Active signups</label>
            <input
              type="number"
              value={signups}
              onChange={(e) => setSignups(Number(e.target.value) || 0)}
              style={styles.calcInput}
              min="0"
            />
          </div>
          <div style={styles.calcField}>
            <label style={styles.calcLabel}>Avg plan value ($)</label>
            <input
              type="number"
              value={planValue}
              onChange={(e) => setPlanValue(Number(e.target.value) || 0)}
              style={styles.calcInput}
              min="0"
            />
          </div>
        </div>
        <div style={styles.calcResult}>
          <div style={styles.calcResultRow}>
            <span style={styles.calcResultLabel}>Monthly commission (10%):</span>
            <span style={{ ...styles.calcResultValue, color: '#16a34a' }}>${commission.toFixed(2)}</span>
          </div>
          <div style={styles.calcResultRow}>
            <span style={styles.calcResultLabel}>Annualised:</span>
            <span style={{ ...styles.calcResultValue, color: '#2563eb' }}>${annual.toFixed(0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════ HELPERS ═══════════
function SectionHeading({ children }) {
  return (
    <div style={styles.sectionHeading}>
      <div style={styles.sectionLine}></div>
      <h2 style={styles.sectionTitle}>{children}</h2>
      <div style={styles.sectionLine}></div>
    </div>
  );
}

function KPI({ label, value, sub, color, accent }) {
  return (
    <div style={styles.kpiCard}>
      <div style={{ ...styles.kpiAccent, background: accent }}></div>
      <div style={styles.kpiLabel}>{label}</div>
      <div style={{ ...styles.kpiValue, color }}>{value}</div>
      <div style={styles.kpiSub}>{sub}</div>
    </div>
  );
}

function ClientCard({ name, color, bgLight, status, platforms }) {
  return (
    <div style={styles.clientCard}>
      <div style={{ ...styles.clientHead, background: bgLight }}>
        <div style={{ ...styles.clientName, color }}>{name}</div>
        <div style={styles.statusBadgeCatchup}>{status}</div>
      </div>
      <div style={styles.clientBody}>
        {platforms.map(p => (
          <div key={p.name} style={styles.progBlock}>
            <div style={styles.progMeta}>
              <span style={styles.progName}>
                {p.name}
                {p.primary && <span style={styles.primaryTag}>primary</span>}
              </span>
              <span style={styles.progCount}>
                <strong>{p.done}</strong> / {p.total}
              </span>
            </div>
            <div style={styles.track}>
              <div style={{
                ...styles.trackFill,
                width: `${(p.done / p.total) * 100}%`,
                background: p.primary ? color : '#f59e0b'
              }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoRow({ label, value, highlight }) {
  return (
    <div style={styles.infoRow}>
      <span style={styles.infoLabel}>{label}</span>
      <span style={{ ...styles.infoValue, color: highlight || '#0f172a' }}>{value}</span>
    </div>
  );
}

function DeliveryRow({ status, posts, note }) {
  const statusMap = {
    done: { label: 'Done ✓', bg: '#f0fdf4', color: '#16a34a' },
    today: { label: 'Today', bg: '#fef2f2', color: '#dc2626' },
    tomorrow: { label: 'Tomorrow', bg: '#fffbeb', color: '#d97706' },
    sunday: { label: 'Sunday', bg: '#fffbeb', color: '#d97706' },
    banked: { label: 'Banked', bg: '#eff6ff', color: '#2563eb' }
  };
  const s = statusMap[status];
  return (
    <div style={styles.deliveryRow}>
      <div style={{ ...styles.deliveryStatus, background: s.bg, color: s.color }}>{s.label}</div>
      <div style={styles.deliveryPosts}>{posts}</div>
      <div style={styles.deliveryNote}>{note}</div>
    </div>
  );
}

function ProcessStep({ n, title, desc, highlight }) {
  return (
    <div style={styles.processStep}>
      <div style={{
        ...styles.processNum,
        background: highlight ? '#16a34a' : '#dc2626'
      }}>{n}</div>
      <div>
        <div style={styles.processTitle}>{title}</div>
        <div style={styles.processDesc}>{desc}</div>
      </div>
    </div>
  );
}

function EarningsCard({ name, color, bgLight, delivered, rate, paid }) {
  const earned = delivered * rate;
  const balance = earned - paid;
  return (
    <div style={styles.earningsCard}>
      <div style={{ ...styles.earningsHead, background: bgLight }}>
        <div style={{ ...styles.earningsName, color }}>{name}</div>
      </div>
      <div style={styles.earningsBody}>
        <InfoRow label="Videos delivered" value={delivered} />
        <InfoRow label="Rate per video" value={`$${rate}`} />
        <InfoRow label="Total earned" value={`$${earned}`} highlight="#16a34a" />
        <InfoRow label="Received (Apr 6)" value={`$${paid}`} highlight="#16a34a" />
        <InfoRow label="Balance" value={balance > 0 ? `$${balance}` : `— (credit)`} highlight={balance > 0 ? "#d97706" : "#64748b"} />
      </div>
    </div>
  );
}

function TimelineRow({ date, state, title, desc, amount, amountColor, amountBg, last }) {
  const dotColors = {
    done: '#16a34a',
    pending: '#d97706',
    active: '#dc2626',
    upcoming: '#cbd5e1'
  };
  return (
    <div style={{ ...styles.timelineRow, borderBottom: last ? 'none' : '1px solid #e2e8f0' }}>
      <div style={styles.timelineDate}>{date}</div>
      <div style={styles.timelineDotCol}>
        <div style={{
          ...styles.timelineDot,
          background: dotColors[state],
          boxShadow: state === 'active' ? '0 0 0 4px #fee2e2' : 'none'
        }}></div>
        {!last && <div style={styles.timelineLine}></div>}
      </div>
      <div style={styles.timelineContent}>
        <div style={styles.timelineTitle}>{title}</div>
        <div style={styles.timelineDesc}>{desc}</div>
      </div>
      <div style={{ ...styles.timelineAmount, background: amountBg, color: amountColor }}>
        {amount}
      </div>
    </div>
  );
}

function ScenarioCard({ label, signups, mrr, annual, highlight }) {
  return (
    <div style={{
      ...styles.scenarioCard,
      background: highlight ? '#f0fdf4' : '#fff',
      borderColor: highlight ? '#16a34a' : '#e2e8f0'
    }}>
      <div style={styles.scenarioLabel}>{label}</div>
      <div style={styles.scenarioSignups}>{signups}</div>
      <div style={{ ...styles.scenarioMRR, color: highlight ? '#16a34a' : '#2563eb' }}>{mrr}</div>
      <div style={styles.scenarioAnnual}>{annual}</div>
    </div>
  );
}

// ═══════════ SETTINGS TAB ═══════════
function SettingsTab() {
  const [profile, setProfile] = useState({
    name: 'Ed Corner',
    email: 'ed@edcorner.co.uk',
    notes: 'UGC Creator & AI Agent Tester'
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    localStorage.setItem('dashboardProfile', JSON.stringify(profile));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <SectionHeading>Profile Settings</SectionHeading>
      <div style={styles.settingsCard}>
        <div style={styles.settingsField}>
          <label style={styles.settingsLabel}>Full Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({...profile, name: e.target.value})}
            style={styles.settingsInput}
          />
        </div>
        <div style={styles.settingsField}>
          <label style={styles.settingsLabel}>Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({...profile, email: e.target.value})}
            style={styles.settingsInput}
          />
        </div>
        <div style={styles.settingsField}>
          <label style={styles.settingsLabel}>Notes / Bio</label>
          <textarea
            value={profile.notes}
            onChange={(e) => setProfile({...profile, notes: e.target.value})}
            style={{...styles.settingsInput, minHeight: 100, resize: 'vertical'}}
          />
        </div>
        <button
          onClick={handleSave}
          style={{
            ...styles.loginBtn,
            width: '100%',
            marginTop: 16,
            background: saved ? '#16a34a' : '#dc2626'
          }}
        >
          {saved ? '✓ Settings Saved' : 'Save Settings'}
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        Content Partnership Dashboard · Last updated Fri 24 Apr 2026 · Live tracker updates weekly
      </div>
    </footer>
  );
}

// ═══════════ STYLES ═══════════
const styles = {
  page: {
    minHeight: '100vh',
    background: '#f8fafc',
    color: '#0f172a',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 15,
    lineHeight: 1.5,
    WebkitFontSmoothing: 'antialiased'
  },

  // LOGIN
  loginPage: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fef2f2 0%, #f8fafc 50%, #eff6ff 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    fontFamily: "'Inter', -apple-system, sans-serif"
  },
  loginCard: {
    background: '#fff',
    borderRadius: 16,
    padding: '48px 40px',
    maxWidth: 420,
    width: '100%',
    boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0'
  },
  loginLogo: {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: '-0.03em',
    marginBottom: 4
  },
  loginSub: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: 500
  },
  loginInput: {
    width: '100%',
    padding: '14px 16px',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: 10,
    color: '#0f172a',
    fontSize: 15,
    outline: 'none',
    marginBottom: 12,
    fontFamily: 'inherit'
  },
  loginError: {
    color: '#dc2626',
    fontSize: 13,
    marginBottom: 12,
    fontWeight: 500
  },
  loginBtn: {
    width: '100%',
    padding: '14px',
    background: '#dc2626',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: 'inherit',
    letterSpacing: '-0.01em'
  },

  // HEADER
  header: {
    padding: '40px 48px 32px',
    background: '#fff',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 24,
    flexWrap: 'wrap'
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#94a3b8',
    marginBottom: 10
  },
  h1: {
    fontSize: 40,
    fontWeight: 800,
    letterSpacing: '-0.035em',
    lineHeight: 1,
    margin: 0
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 10,
    fontWeight: 500
  },
  headerRight: {
    display: 'flex',
    gap: 10,
    alignItems: 'center'
  },
  livePill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '7px 14px',
    borderRadius: 100,
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    fontSize: 12,
    fontWeight: 600,
    color: '#15803d',
    letterSpacing: '0.02em'
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#16a34a',
    animation: 'pulse 2s infinite'
  },
  datePill: {
    padding: '7px 14px',
    borderRadius: 100,
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    fontSize: 12,
    fontWeight: 500,
    color: '#475569'
  },

  // NAV
  nav: {
    background: '#fff',
    borderBottom: '1px solid #e2e8f0',
    padding: '0 48px',
    display: 'flex',
    gap: 4,
    overflowX: 'auto'
  },
  navBtn: {
    padding: '16px 20px',
    fontSize: 14,
    fontWeight: 600,
    color: '#64748b',
    background: 'none',
    border: 'none',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
    transition: 'color 0.15s, border-color 0.15s'
  },
  navBtnActive: {
    color: '#dc2626',
    borderBottomColor: '#dc2626'
  },

  // MAIN
  main: {
    padding: '40px 48px',
    maxWidth: 1320,
    margin: '0 auto'
  },

  // SECTION
  sectionHeading: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginTop: 40,
    marginBottom: 20
  },
  sectionLine: {
    flex: '0 1 24px',
    height: 1,
    background: '#cbd5e1'
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#64748b',
    margin: 0,
    whiteSpace: 'nowrap'
  },

  // KPI
  kpiRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 14
  },
  kpiCard: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: '22px 24px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
  },
  kpiAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3
  },
  kpiLabel: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#64748b',
    marginBottom: 14
  },
  kpiValue: {
    fontSize: 34,
    fontWeight: 800,
    letterSpacing: '-0.035em',
    lineHeight: 1,
    marginBottom: 8
  },
  kpiSub: {
    fontSize: 13,
    color: '#64748b',
    fontWeight: 500
  },

  // CLIENT
  clientGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
    gap: 16
  },
  clientCard: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
  },
  clientHead: {
    padding: '18px 24px',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  clientName: {
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: '-0.02em'
  },
  clientBody: {
    padding: 24
  },
  statusBadgeCatchup: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: '5px 12px',
    borderRadius: 6,
    background: '#fffbeb',
    color: '#b45309',
    border: '1px solid #fde68a'
  },

  // PROGRESS
  progBlock: {
    marginBottom: 18
  },
  progMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 8
  },
  progName: {
    fontSize: 13,
    fontWeight: 600,
    color: '#334155',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8
  },
  primaryTag: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: '2px 6px',
    borderRadius: 3,
    background: '#f1f5f9',
    color: '#64748b'
  },
  progCount: {
    fontSize: 13,
    color: '#64748b',
    fontWeight: 500
  },
  track: {
    width: '100%',
    height: 8,
    background: '#f1f5f9',
    borderRadius: 4,
    overflow: 'hidden'
  },
  trackFill: {
    height: '100%',
    borderRadius: 4,
    transition: 'width 0.5s ease'
  },

  // INFO
  infoCard: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: '8px 24px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '0 32px'
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 0',
    borderBottom: '1px solid #f1f5f9',
    fontSize: 14
  },
  infoLabel: {
    color: '#64748b',
    fontWeight: 500
  },
  infoValue: {
    fontWeight: 700,
    color: '#0f172a'
  },

  // DELIVERY
  deliveryCard: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
    marginBottom: 8
  },
  deliveryHead: {
    padding: '18px 24px',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  deliveryName: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: '-0.01em'
  },
  deliveryBody: {
    padding: '8px 24px'
  },
  deliveryRow: {
    display: 'grid',
    gridTemplateColumns: '110px 140px 1fr',
    gap: 16,
    alignItems: 'center',
    padding: '14px 0',
    borderBottom: '1px solid #f1f5f9',
    fontSize: 14
  },
  deliveryStatus: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: '5px 10px',
    borderRadius: 5,
    textAlign: 'center'
  },
  deliveryPosts: {
    fontWeight: 700,
    color: '#0f172a'
  },
  deliveryNote: {
    color: '#64748b'
  },

  // PROCESS
  processCard: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: '24px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
  },
  processStep: {
    display: 'flex',
    gap: 16,
    alignItems: 'flex-start',
    padding: '14px 0',
    borderBottom: '1px solid #f1f5f9'
  },
  processNum: {
    width: 32,
    height: 32,
    borderRadius: 8,
    color: '#fff',
    fontSize: 14,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  processTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: 3
  },
  processDesc: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 1.6
  },

  // EARNINGS
  earningsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
    gap: 16
  },
  earningsCard: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
  },
  earningsHead: {
    padding: '16px 24px',
    borderBottom: '1px solid #e2e8f0'
  },
  earningsName: {
    fontSize: 18,
    fontWeight: 800,
    letterSpacing: '-0.02em'
  },
  earningsBody: {
    padding: '8px 24px'
  },

  // TIMELINE
  timelineCard: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
  },
  timelineRow: {
    display: 'grid',
    gridTemplateColumns: '90px 24px 1fr auto',
    gap: 16,
    alignItems: 'flex-start',
    padding: '20px 24px'
  },
  timelineDate: {
    fontSize: 12,
    fontWeight: 600,
    color: '#94a3b8',
    paddingTop: 4,
    letterSpacing: '0.02em'
  },
  timelineDotCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 6
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    flexShrink: 0
  },
  timelineLine: {
    width: 1,
    flex: 1,
    background: '#e2e8f0',
    marginTop: 8,
    minHeight: 30
  },
  timelineContent: {
    paddingTop: 2
  },
  timelineTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: 4
  },
  timelineDesc: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 1.6
  },
  timelineAmount: {
    fontSize: 12,
    fontWeight: 700,
    padding: '5px 12px',
    borderRadius: 6,
    whiteSpace: 'nowrap',
    alignSelf: 'flex-start'
  },

  // MRR
  mrrIntro: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: '28px 32px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
    marginBottom: 8
  },
  mrrIntroText: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 1.7,
    margin: 0
  },
  scenarioGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 12
  },
  scenarioCard: {
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: '22px 20px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
  },
  scenarioLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#64748b',
    marginBottom: 10
  },
  scenarioSignups: {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: '-0.03em',
    color: '#0f172a',
    marginBottom: 4
  },
  scenarioMRR: {
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 4
  },
  scenarioAnnual: {
    fontSize: 13,
    color: '#64748b'
  },
  calcCard: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: '28px 32px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
  },
  calcGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 16,
    marginBottom: 20
  },
  calcField: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  },
  calcLabel: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: '#64748b'
  },
  calcInput: {
    padding: '12px 16px',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: 8,
    fontSize: 16,
    fontWeight: 600,
    color: '#0f172a',
    outline: 'none',
    fontFamily: 'inherit',
    width: '100%'
  },
  calcResult: {
    padding: '20px 24px',
    background: '#f8fafc',
    borderRadius: 10,
    border: '1px solid #e2e8f0'
  },
  calcResultRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 0'
  },
  calcResultLabel: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: 500
  },
  calcResultValue: {
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: '-0.02em'
  },

  // FOOTER
  footer: {
    padding: '32px 48px',
    borderTop: '1px solid #e2e8f0',
    background: '#fff',
    marginTop: 60
  },
  footerContent: {
    fontSize: 13,
    color: '#94a3b8',
    textAlign: 'center',
    fontWeight: 500
  }
};

  // SETTINGS
  settingsCard: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: '28px 32px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
    maxWidth: 520
  },
  settingsField: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginBottom: 20
  },
  settingsLabel: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: '#64748b'
  },
  settingsInput: {
    padding: '12px 16px',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 500,
    color: '#0f172a',
    outline: 'none',
    fontFamily: 'inherit',
    width: '100%'
  }
