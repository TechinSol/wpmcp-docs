import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.badge}>● WP-MCP — Now Available</div>
        <h1 className={styles.heroTitle}>
          Connect AI to Your<br />
          <span className={styles.orange}>WordPress Site</span>
        </h1>
        <p className={styles.heroSub}>
          WP-MCP lets Claude and Codex control your WordPress site using plain English —
          manage content, SEO, WooCommerce, users, and more. No coding required.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.btnPrimary} to="/getting-started/installation">
            Get Started →
          </Link>
          <Link className={styles.btnSecondary} to="/tools/overview">
            Explore Tools —
          </Link>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: '✦',
    title: 'Content & Pages',
    desc: 'Create, edit, and publish posts and pages using plain English commands.',
  },
  {
    icon: '✦',
    title: 'SEO Optimization',
    desc: 'Update meta titles, descriptions, and SEO settings across your site instantly.',
  },
  {
    icon: '✦',
    title: 'WooCommerce',
    desc: 'Manage products, orders, inventory, and pricing through natural language.',
  },
  {
    icon: '✦',
    title: 'Media Library',
    desc: 'Upload, organize, and manage your WordPress media with AI assistance.',
  },
  {
    icon: '✦',
    title: 'User Management',
    desc: 'Create users, assign roles, and manage permissions effortlessly.',
  },
  {
    icon: '✦',
    title: 'Site Health',
    desc: 'Monitor plugins, run diagnostics, and keep your site in top shape.',
  },
];

function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.featuresInner}>
        <p className={styles.sectionLabel}>— WHAT YOU CAN DO</p>
        <h2 className={styles.sectionTitle}>Everything Your WordPress Site Needs</h2>
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.cardIcon}>{f.icon}</span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Ready to supercharge your WordPress?</h2>
        <p className={styles.ctaSub}>Install WP-MCP and connect your AI assistant in minutes.</p>
        <div className={styles.heroActions}>
          <Link className={styles.btnPrimary} to="/getting-started/installation">
            Install Now →
          </Link>
          <Link className={styles.btnSecondaryLight} to="/prompts/library">
            Browse Prompt Library —
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="WP-MCP Docs" description="Connect Claude and Codex to your WordPress site">
      <Hero />
      <Features />
      <CTA />
    </Layout>
  );
}
