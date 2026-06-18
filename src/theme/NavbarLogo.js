import React from 'react';
import Link from '@docusaurus/Link';

export default function NavbarLogo() {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <span style={{
        fontFamily: "'Sora', sans-serif",
        fontWeight: 700,
        fontSize: '20px',
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}>
        <span style={{ color: '#000' }}>Techin</span>
        <span style={{ color: '#FF5C00' }}>Sol</span>
      </span>
    </Link>
  );
}
