# Horizon Bank App (React Native / Expo)

Generic mobile-banking app: same overall layout/flow and blue-to-green
gradient color scheme as your reference screenshots, but with original
branding (no real bank name/logo).

## Screens included
- **Login** — mobile number + password, remember me, fingerprint login button, quick-links row
- **Home** — account card with balance, transaction summary buttons, 12-item services grid, bottom tab bar
- **Payment** — "Paying To" card, from-account selector, amount + remarks, Proceed/Cancel
- **QR Scan** — Scan/Share toggle, live camera QR scanner, caption

## Setup

```bash
npm install -g expo-cli   # if you don't have it
cd HorizonBankApp
npm install
npx expo start
```

Then scan the QR code with the **Expo Go** app on your phone (Android/iOS),
or press `a` / `i` in the terminal for an emulator.

## Notes / next steps
- All balances, names and account numbers are placeholder text — wire up
  your real backend/API calls where marked (`// Replace with real auth call`
  in `LoginScreen.js`, etc.).
- Icons come from `@expo/vector-icons` (Ionicons + MaterialCommunityIcons) —
  free, no extra setup needed.
- `expo-camera`'s `CameraView` handles the QR scanning; test on a physical
  device or the Expo Go app since emulator cameras vary.
- Swap `theme.js` colors/`BANK_NAME` to restyle the whole app from one place.
