# vue-notes

[![CI](https://github.com/KassieIII/vue-notes/actions/workflows/ci.yml/badge.svg)](https://github.com/KassieIII/vue-notes/actions/workflows/ci.yml)

An offline-first Markdown note app built with Vue 3, Pinia, and IndexedDB.

## Why

To showcase a small but realistic Vue 3 + TypeScript SPA: composition API,
typed Pinia store, debounced autosave, sanitised Markdown rendering,
and local-only persistence (no backend).

## Features

- Create / edit / delete notes with debounced autosave
- Live Markdown preview (sanitised via DOMPurify)
- Tag parsing and full-text search
- Persistent storage with `idb-keyval` (IndexedDB)
- Hash-based router with two views

## Stack

Vue 3 · TypeScript 5 · Pinia · Vue Router · Vite · Vitest · idb-keyval · marked + DOMPurify

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Tests

```bash
npm test
```

## License

MIT
