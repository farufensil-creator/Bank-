// theme.js
// Shared design tokens for Horizon Bank app — matches the reference
// layout's blue-to-green gradient header, white rounded cards, and
// green accent buttons, but with fully generic branding/colors.

export const colors = {
  gradientStart: '#1E5C8F', // deep blue
  gradientEnd: '#3FA890',   // teal green
  primaryGreen: '#0FA968',
  primaryGreenDark: '#0B8753',
  white: '#FFFFFF',
  black: '#1A1A1A',
  gray: '#8A8A8A',
  lightGray: '#F2F4F5',
  border: '#D9DEE2',
  cardShadow: 'rgba(0,0,0,0.08)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 24,
  pill: 999,
};

export const typography = {
  h1: { fontSize: 26, fontWeight: '700' },
  h2: { fontSize: 20, fontWeight: '700' },
  body: { fontSize: 16, fontWeight: '400' },
  small: { fontSize: 13, fontWeight: '400' },
  button: { fontSize: 17, fontWeight: '700' },
};

export const BANK_NAME = 'Horizon Bank';
export const BANK_TAGLINE = 'Empowering Your Finances';
