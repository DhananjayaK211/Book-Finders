# Book Finder — React + Vite

A lightweight **Book Finder** web app built with React and Vite that searches the Open Library API.

## Features
- Search books by title using Open Library Search API.
- Displays cover, title, author(s), first publish year.
- Responsive grid layout and a clean UI.

## Tech
- React 18
- Vite
- Plain CSS (simple, modern UI)

## Run locally
1. Install dependencies:
```
npm install
rm -rf node_modules package-lock.json
```
2. Start development server:
```
npm run dev
```
Open http://localhost:5173

## Deploy
Build using `npm run build` and deploy the `dist` folder to any static host (CodeSandbox).

## Notes
- Uses the Open Library Search API: `https://openlibrary.org/search.json?title={title}`
- This project was scaffolded for a take-home challenge. Customize as needed.


