# Admin Dashboard Prototype

## Overview

This project is a simple **Admin Dashboard prototype** built with **Vite + React** and **Material UI (MUI v7)**. It demonstrates a clean and reusable UI structure with routing, state management, and adaptive design.

---

## Installation \& Local Run

1. **Clone the repository:**

```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Install dependencies:**

```bash
   npm install
   ```

3. **Run locally:**

```bash
   npm run dev
   ```

4. **Build for production:**

```bash
   npm run build
   ```

---

## Project Structure

```
src/
 ├── components/
 │    ├── Sidebar.jsx        # Responsive sidebar navigation
 │    ├── PageTitle.jsx      # Reusable page title component
 │    └── MetricCard.jsx     # Card for displaying metrics
 │
 ├── pages/
 │    ├── Overview.jsx       # Metrics dashboard page
 │    ├── Users.jsx          # Users table with sorting
 │    └── Settings.jsx       # Settings form (dark mode, notifications, username)
 │
 ├── App.jsx                 # Root component, routing, theme provider
 └── main.jsx                # Entry point
```

---

## Routing Implementation

Routing is handled with **React Router v6**:

* `/overview` → Overview page (metrics grid)
* `/users` → Users table with sorting by name
* `/settings` → Settings page with form inputs
* `/` → Redirects to `/overview`
* `\*` → Fallback for `Not Found`

The router is wrapped inside `BrowserRouter` in **App.jsx**.

---

## State Management

* **React `useState`** is used for local state (e.g., theme mode, form fields, sorting order).
* **React `useEffect`** persists theme mode to `localStorage`.
* **React `useMemo`** optimizes theme creation to avoid unnecessary recalculations.

There is no global state manager (Redux/Zustand) since the app is small and self-contained.

---

## Components Structure \& Reusability

* **Sidebar** → Responsive drawer that switches between permanent (desktop) and temporary (mobile) versions.
* **PageTitle** → Unified title styling across all pages.
* **MetricCard** → Reusable card component for displaying stats with icons.
* **Table (Users page)** → Clickable header with ascending/descending/unsorted states.
* **Settings Form** → Reusable MUI inputs with state bindings.

This structure ensures scalability and reusability if new pages or features are added.

---

## Features

* Dark/Light theme toggle (persisted in localStorage)
* Responsive sidebar with adaptive behavior (mobile vs desktop)
* Metric cards with hover effects
* Sortable users table with 3 states (asc, desc, reset)
* Simple settings form (switch, checkbox, text input)

---

## Tech Stack

* **React + Vite** (frontend framework \& build tool)
* **Material UI v7** (UI components \& styling)
* **React Router v6** (routing)
