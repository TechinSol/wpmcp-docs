import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const features = [
  { icon: '✍️', title: 'Write & publish content', desc: 'Ask Claude to write blog posts, create pages, update copy, and publish — all in plain English.' },
  { icon: '🔍', title: 'Fix SEO automatically', desc: 'Audit every post, fill missing meta titles and descriptions, and get a prioritized fix list in seconds.' },
  { icon: '🎨', title: 'Design with words', desc: 'Change colors, fonts, and layout by describing what you want. No page builder needed.' },
  { icon: '🛒', title: 'Manage your store', desc: 'Add products, update prices, check orders, and manage inventory through simple conversation.' },
  { icon: '🏥', title: 'Diagnose site issues', desc: 'Get a full health report — PHP version, plugin conflicts, SSL, errors — in one command.' },
  { icon: '🛡️', title: 'Safe by design', desc: 'Three permission levels (READ / WRITE / DANGER), per-user profiles, and full audit logging.' },
  { icon: '🔌', title: 'Works with Claude & Codex', desc: 'Native MCP support for Claude (Cowork connector) and Codex (Companion plugin) — both live.' },
  { icon: '💬', title: '130+ tools, ready to use', desc: 'Content, media, SEO, themes, plugins, users, WooCommerce, ACF, Elementor, and more.' },
];

const steps = [
  { num: '1', title: 'Install the plugin', desc: 'Upload and activate WP-MCP on your WordPress site. Takes under a minute.' },
  { num: '2', title: 'Generate a password', desc: 'One click on the dashboard generates a connection password — no profile page needed.' },
  { num: '3', title: 'Copy & paste the prompt', desc: 'The complete connection prompt is pre-filled with your site URL, username, and password.' },
  { num: '4', title: 'Start managing your site', desc: 'Claude and Codex can now read, write, and manage everything on your WordPress site.' },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="WP-MCP — AI for WordPress" description="Connect Claude and Codex to your WordPress site. Manage content, SEO, WooCommerce, and more using plain English.">

      {/* Hero */}
      <div className="hero-banner">
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,92,0,0.15)', border: '1px solid rgba(255,92,0,0.3)', borderRadius: 999, padding: '4px 14px', marginBottom: 20 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff5c00', display: 'inline-block' }}></span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#ff5c00', letterSpacing: '.04em', textTransform: 'uppercase' }}>Works with Claude &amp; Codex</span>
          </div>
          <h1>Your WordPress site,<br /><span>controlled by AI</span></h1>
          <p>WP-MCP is the bridge between Claude or Codex and your WordPress site. Write posts, fix SEO, manage your store, and diagnose issues — just by asking.</p>
          <div className="hero-buttons">
            <Link className="hero-btn-primary" to="/getting-started/installation">
              🚀 Get started free
            </Link>
            <Link className="hero-btn-secondary" to="/prompts/library">
              💬 Browse prompts
            </Link>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#ff5c00', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>How it works</div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#000', margin: 0 }}>Connected in 4 steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{ width: 40, height: 40, background: i === 0 ? '#ff5c00' : '#f1f5f9', borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, color: i === 0 ? '#fff' : '#64748b', marginBottom: 12 }}>{s.num}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#0f172a', marginBottom: 6 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link className="hero-btn-primary" to="/getting-started/first-connection">See the full setup guide →</Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="features-section">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#ff5c00', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>Everything included</div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#0f172a', margin: 0 }}>130+ tools across every category</h2>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#000', padding: '64px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Ready to let AI manage your WordPress site?</h2>
        <p style={{ color: '#9ca3af', fontSize: 16, marginBottom: 32 }}>Follow the getting started guide — you'll be connected in under 5 minutes.</p>
        <div className="hero-buttons">
          <Link className="hero-btn-primary" to="/getting-started/installation">Read the docs →</Link>
          <a className="hero-btn-secondary" href="https://techinsol.io" target="_blank" rel="noopener noreferrer">Visit TechinSol.io</a>
        </div>
      </div>

    </Layout>
  );
}
