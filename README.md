# HealthTrack

A personal wellness tracker built with React for CSCI426 (Advanced Web Programming). Log meals, workouts and water, and watch your daily progress bars fill up. There is no backend or database: data is saved in the browser's localStorage.

## Features
- 7 pages: Home, Features, Dashboard, Log, Workout detail (dynamic route `/workouts/:id`), About, Contact
- Responsive layout with a mobile menu
- Core React only: function components, props, `useState`, `useEffect`, React Router (including `useParams` for the dynamic page), controlled forms, and array methods (`map`, `filter`, `reduce`)

## Setup
```bash
npm install
npm run dev      # development server
npm run build    # production build in /dist
```

## Deploy
Vercel or Netlify: import the GitHub repo (build command `npm run build`, output `dist`). The app uses HashRouter, so it also works on GitHub Pages.

## Screenshots
Add screenshots of Home, Dashboard and mobile view here.

## Authors
Your name and Hasan Bazzel
