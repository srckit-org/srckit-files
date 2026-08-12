# srckit-files

<p align="center">
  <strong>Upload files to inspect metadata and compute cryptographic hashes.</strong>
</p>

<p align="center">
  <a href="https://files.srckit.org">Live Demo</a> ·
  <a href="https://github.com/srckit-org/srckit">SrKit Suite</a> ·
  <a href="https://github.com/srckit-org/srckit-files/issues">Report Bug</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/MUI-9-007FFF?style=flat-square&logo=mui&logoColor=white" alt="MUI 9" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind 4" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 6" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/github/license/srckit-org/srckit-files?style=flat-square" alt="License" />
</p>

---

## Overview

srckit-files lets you upload files to inspect their metadata and compute cryptographic hashes. All processing happens in your browser — files are never uploaded to a server.

## Features

### File Inspector
- **File info** — name, size, type, last modified
- **Text preview** — view content of text files
- **MIME detection** — automatic content type detection
- **Size display** — human-readable file size

### File Hasher
- **SHA-1** — 160-bit hash
- **SHA-256** — 256-bit hash (recommended)
- **SHA-384** — 384-bit hash
- **SHA-512** — 512-bit hash
- **Web Crypto API** — native browser hashing

## Getting Started

```bash
git clone https://github.com/srckit-org/srckit-files.git
cd srckit-files
npm install
npm run dev
```

## Security

- Files are processed entirely in your browser
- No file data is sent to any server
- Uses native Web Crypto API for hashing

## License

MIT © [srckit-org](https://github.com/srckit-org)
