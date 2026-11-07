# HealthTrack

A personal wellness tracker built with **React** for **CSCI426: Advanced Web Programming** (Project Phase 1, Fall 2026).
Log your meals, workouts and water, and watch your daily progress fill up. There is no backend or database: everything is saved in your browser's `localStorage`, so your data stays on your device.

**Live site:** https://csci426-healthtrack-app.vercel.app
**Repository:** https://github.com/DevHasan-MD/csci426-healthtrack-app

## Screenshots

| Home | Features |
| --- | --- |
| ![Home page](screenshots/home.jpg) | ![Features page](screenshots/features.jpg) |

| Dashboard | Workout detail (dynamic page) |
| --- | --- |
| ![Dashboard page](screenshots/dashboard.jpg) | ![Workout detail page](screenshots/workout.jpg) |

## Features

- **7 pages:** Home, Features, Dashboard, Log, Workout detail (dynamic route `/workouts/:id`), About, Contact
- **Daily goals:** progress bars for calories, exercise minutes and water, with goals you can edit
- **Log page:** add meals, workouts or water with form validation, and delete entries
- **Workout library:** search by name, filter by level, and open a detail page for each routine
- **Weekly chart:** exercise minutes for the last 7 days (built with plain CSS, no chart library)
- **Responsive design:** works on desktop and phone, with a mobile menu
- **Auto-save:** all data is saved to `localStorage` whenever it changes

## Built with

- [React 18](https://react.dev/) (function components and hooks)
- [React Router v6](https://reactrouter.com/) (`HashRouter`, `Routes`, `NavLink`, `useParams`, `useNavigate`)
- [Vite](https://vitejs.dev/) (development server and build tool)
- CSS3 (custom properties, grid, flexbox, media queries). No UI framework and no pre-built templates.
- Fonts from Google Fonts: Bricolage Grotesque and Source Sans 3

## React concepts used

`useState`, `useEffect`, props, lifting state up, controlled inputs, conditional rendering, lists with `key`, dynamic routing with `useParams`, and the array methods `map`, `filter` and `reduce`.

## Getting started

You need [Node.js](https://nodejs.org/) (version 18 or newer).

```bash
# 1. Clone the repository
git clone https://github.com/DevHasan-MD/csci426-healthtrack-app.git
cd csci426-healthtrack-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the address printed in the terminal (usually http://localhost:5173).

Other commands:

```bash
npm run build     # create the production build in /dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  main.jsx            starts React and the router
  App.jsx             app state, localStorage saving and routes
  utils.js            date helper functions
  styles.css          all styling and responsive rules
  data/workouts.js    the workout library
  components/         Navbar.jsx, Progress.jsx
  pages/              Home, Features, Dashboard, Log, WorkoutDetail, About, Contact
```

## How it works

All data (the `entries` list and the `goals` object) lives in `App.jsx` and is passed down to the pages as props. Pages change data by calling functions that `App.jsx` provides. A `useEffect` in `App.jsx` saves the data to `localStorage` every time it changes, and it is read back when the app starts.

## Deployment

The site is deployed on Vercel from the `main` branch. Every push to `main` rebuilds and updates the live site automatically. The app uses `HashRouter`, so it also works on GitHub Pages and Netlify without extra setup.

## Authors

- **Hasan Mahdi** ([@DevHasan-MD](https://github.com/DevHasan-MD))
- **Hasan Bazzel**

Course: CSCI426 Advanced Web Programming, Department of Computer Science and Information Technology.
Instructor: Mohamad El Seblani.
