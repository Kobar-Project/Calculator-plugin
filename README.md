<div align="center">
  <img src="https://github.com/Kobar-Project/KoBar/raw/master/build/icon.png" alt="KoBar Logo" width="120"/>
  <h1>Calculator - KoBar Plugin</h1>
  <p><em>A highly interactive mathematical and financial utility overlay.</em></p>
  
  [![KoBar Ecosystem](https://img.shields.io/badge/KoBar-Ecosystem-f4a125?style=for-the-badge&logo=electron&logoColor=white)](https://github.com/Kobar-Project)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</div>

---

KoBar is a versatile platform designed to host a rich ecosystem of plugins, seamlessly integrating powerful tools directly into your daily workflow. As a core extension for this ecosystem, the **Calculator** plugin transforms KoBar into a highly interactive mathematical and financial utility overlay.

## What is Calculator?

The Calculator is a built-in, cross-platform utility tool for KoBar. It acts as a lightweight, non-obtrusive overlay providing quick access to mathematical operations and real-time currency conversions. It lives directly inside KoBar's React frontend and seamlessly integrates with its global state, theming engine, and Electron-based APIs, ensuring a secure and fast experience without relying on external browser windows.

## Key Features

- **Three Primary Modes:**
  - **Basic:** Standard arithmetic operations for quick math.
  - **Scientific:** Advanced mathematical functions, trigonometry (DEG/RAD), parentheses evaluation, memory (MC, MR, M+, M-), and history tracking.
  - **Currency Converter:** Real-time fiat currency conversion with offline resilience.
- **Smart Currency Detection:** Automatically detects your local currency using IP geolocation or timezone heuristics.
- **Secure Calculation Engine:** Utilizes a custom deterministic, state-based incremental evaluator—no `eval()` is used, ensuring complete security.
- **Deep OS Integration:** Copies calculation results and currency conversions directly to your system clipboard and KoBar's internal multi-slot clipboard.
- **Smart Positioning:** The calculator can be fixed to the sidebar or dragged around the screen freely while staying safely within screen boundaries.
- **Global Keyboard Listeners:** Start typing your calculations instantly without needing to click, with smart filtering to prevent interfering with other text inputs.

## Configuration & Usage

1. **Installation:** Ensure the `Calculator` plugin is enabled in your KoBar plugin settings.
2. **Access:** Click the calculator icon in the KoBar sidebar to open the overlay.
3. **Switch Modes:** Use the interface to toggle between Basic, Scientific, and Currency Converter modes.
4. **Keyboard Shortcuts:** You can use standard keyboard operators (`+`, `-`, `*`, `/`, `Enter` for `=`) anytime the KoBar sidebar is active. Press `Esc` or `c` to clear the current state.

---

## ✉️ Contact

For support or inquiries, you can contact us at [hello@kobar.org](mailto:hello@kobar.org).

[KoBar.org](https://kobar.org)

---

## 💛 Sponsors & Backers

If you find KoBar useful and want to support its ongoing development, consider backing the project through any of the platforms below:

<p align="center">
  <a href="https://www.patreon.com/kobarproject" target="_blank">
    <img src="https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white" alt="Become a Patron" />
  </a>
  <a href="https://opencollective.com/kobar" target="_blank">
    <img src="https://img.shields.io/badge/Open_Collective-7FADF2?style=for-the-badge&logo=open-collective&logoColor=white" alt="Open Collective" />
  </a>
</p>