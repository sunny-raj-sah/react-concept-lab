# React Concepts Lab

An interactive React.js learning and interview-preparation laboratory built with React and Vite.

This project provides hands-on implementations of React concepts through isolated, interactive examples. Each concept can be opened separately, experimented with, and observed directly in the browser.

> `while (!understood) { tryAgain(); }`

---

## 📌 Project Overview

**React Concepts Lab** is designed to strengthen React fundamentals and advanced concepts through practical experimentation rather than only theoretical learning.

The application contains dedicated pages for concepts such as:

* JSX & Components
* Props
* `useState`
* `useEffect`
* Events
* Conditional Rendering
* Lists & Keys
* Forms
* React Router

The project is structured so that additional React concepts can be added as independent learning modules.

---

## 🎯 Objectives

The main objectives of this project are to:

* Understand React concepts from basic to advanced levels.
* Learn how React rendering works.
* Practice React Hooks through interactive examples.
* Understand state updates and component re-rendering.
* Explore `useEffect` dependency arrays and cleanup.
* Understand component communication using props.
* Practice event handling and controlled forms.
* Understand lists and the importance of React keys.
* Practice client-side routing using React Router.
* Build a foundation for understanding React internals and performance.
* Prepare for React.js and Full-Stack Developer interviews.

---

## 🚀 Features

### Interactive Concept Modules

Each React concept is implemented as a separate interactive module.

### React Hooks Practice

Hands-on examples for:

* `useState`
* `useEffect`
* Functional state updates
* Dependency arrays
* Effect cleanup

### useEffect Practice Lab

The `useEffect` module provides an interactive environment for experimenting with different effect behaviors.

It demonstrates:

```jsx
useEffect(() => {
  // runs after every committed render
});
```

```jsx
useEffect(() => {
  // runs after mount
}, []);
```

```jsx
useEffect(() => {
  // runs when count changes
}, [count]);
```

```jsx
useEffect(() => {
  // runs when name changes
}, [name]);
```

It also demonstrates cleanup functions and provides an in-app **Effect Console** for observing effect execution.

### React Router

The application uses React Router to provide separate routes for each concept.

### Reusable Components

The project uses reusable components such as:

* Back Button
* Concept Cards
* Interactive Controls
* Form Components
* Effect Console

### Responsive Layout

The learning interface is designed to work across desktop and smaller screen sizes.

---

## 🧠 Concepts Covered

### 1. JSX & Components

Learn:

* JSX syntax
* Expressions in JSX
* Component creation
* Component composition
* Reusable UI

Route:

```text
/jsx-components
```

---

### 2. Props

Learn:

* Passing data from parent to child
* Props as read-only values
* Component communication
* Reusable components

Route:

```text
/props
```

---

### 3. useState

Learn:

* State creation
* State updates
* Functional updates
* Re-rendering
* State-driven UI

Route:

```text
/use-state
```

---

### 4. useEffect

Learn:

* Effects and side effects
* Dependency arrays
* Mount behavior
* Update behavior
* Cleanup
* Effect execution
* Common dependency-array patterns
* Strict Mode behavior

Interactive route:

```text
/use-effect
```

---

### 5. Events

Learn:

* `onClick`
* `onChange`
* `onMouseEnter`
* `onMouseLeave`
* Event objects
* `event.target`
* Event handlers

Route:

```text
/events
```

---

### 6. Conditional Rendering

Learn different approaches to rendering UI based on state and conditions.

Examples include:

* `if`
* Ternary operator
* Logical `&&`
* Conditional components

Route:

```text
/conditional-rendering
```

---

### 7. Lists & Keys

Learn:

* Rendering arrays with `.map()`
* React `key`
* Component identity
* Why stable keys matter
* Common key mistakes

Route:

```text
/lists-keys
```

---

### 8. Forms

Learn:

* Controlled components
* Form state
* `value`
* `onChange`
* `onSubmit`
* `preventDefault`
* Basic form handling

Route:

```text
/forms
```

---

### 9. Routing

Learn:

* `BrowserRouter`
* `Routes`
* `Route`
* `Link`
* `useNavigate`
* Navigation between concept modules

---

## 🏗️ Project Structure

```text
react-concepts-lab/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Counter.jsx
│   │   ├── UserProfile.jsx
│   │   ├── LoginStatus.jsx
│   │   ├── TaskList.jsx
│   │   ├── EventPractice.jsx
│   │   ├── LoginForm.jsx
│   │   ├── BackButton.jsx
│   │   └── UseEffectLab.jsx
│   │
│   ├── pages/
│   │   └── Concepts.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

---

## ⚙️ Tech Stack

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| React.js     | Frontend UI                   |
| Vite         | Development and build tooling |
| JavaScript   | Application logic             |
| React Router | Client-side routing           |
| CSS          | Styling                       |
| ESLint       | Code quality and linting      |
| Git          | Version control               |
| GitHub       | Source code hosting           |
| Vercel       | Deployment                    |

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/react-concepts-lab.git
```

### 2. Navigate into the project

```bash
cd react-concepts-lab
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 🏭 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🧪 Learning Approach

The project follows a concept-first and experiment-driven approach.

Instead of only reading:

```text
What is useEffect?
```

the application allows you to actually observe:

```text
State changes
     ↓
Component re-render
     ↓
Effect execution
     ↓
Cleanup
     ↓
Next effect execution
```

This makes it easier to understand how React behaves internally.

---

## 🔬 Example: useEffect Experiments

### No Dependency Array

```jsx
useEffect(() => {
  console.log("Effect executed");
});
```

Runs after every committed render.

---

### Empty Dependency Array

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

Runs after the initial mount.

---

### Specific Dependency

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

Runs when `count` changes.

---

### Cleanup

```jsx
useEffect(() => {
  console.log("Effect");

  return () => {
    console.log("Cleanup");
  };
}, [count]);
```

The cleanup function runs before the effect re-runs because its dependency changed, and when the component unmounts.

---

## 🛣️ Learning Roadmap

The lab is intended to grow progressively.

### Phase 1 — Fundamentals

* [x] JSX
* [x] Components
* [x] Props
* [x] `useState`
* [x] Events
* [x] Conditional Rendering
* [x] Lists
* [x] Keys
* [x] Forms

### Phase 2 — Effects & Rendering

* [x] `useEffect`
* [x] Dependency arrays
* [x] Cleanup
* [ ] Rendering lifecycle
* [ ] Render phase
* [ ] Commit phase
* [ ] Re-rendering
* [ ] Strict Mode

### Phase 3 — Core Hooks

* [ ] `useRef`
* [ ] `useContext`
* [ ] `useReducer`
* [ ] `useMemo`
* [ ] `useCallback`
* [ ] Custom Hooks

### Phase 4 — React Internals

* [ ] Virtual DOM
* [ ] Reconciliation
* [ ] Component identity
* [ ] Keys and reconciliation
* [ ] Fiber architecture
* [ ] Render vs commit phase

### Phase 5 — Application Development

* [ ] API integration
* [ ] Loading states
* [ ] Error handling
* [ ] Pagination
* [ ] Search
* [ ] Filtering
* [ ] Debouncing
* [ ] Authentication
* [ ] Protected routes
* [ ] Role-based access control

### Phase 6 — Performance

* [ ] `React.memo`
* [ ] `useMemo`
* [ ] `useCallback`
* [ ] Lazy loading
* [ ] Code splitting
* [ ] Suspense
* [ ] Avoiding unnecessary re-renders

### Phase 7 — Advanced React

* [ ] Custom Hooks
* [ ] Portals
* [ ] Error Boundaries
* [ ] `forwardRef`
* [ ] `useImperativeHandle`
* [ ] Advanced component composition
* [ ] Scalable React architecture

### Phase 8 — State Management

* [ ] Context API
* [ ] Redux Toolkit
* [ ] Zustand
* [ ] Server-state management

### Phase 9 — Testing & Debugging

* [ ] React DevTools
* [ ] Component debugging
* [ ] React Testing Library
* [ ] Unit testing
* [ ] Integration testing

---

## 💼 Interview Preparation

This project is also designed as an interview preparation environment.

Important questions to explore while working through the lab include:

### Fundamentals

* What is JSX?
* What is a React component?
* What is the difference between props and state?
* Why should state not be mutated directly?
* What causes a React component to re-render?

### useState

* Why use functional state updates?
* What happens when multiple state updates happen together?
* What is batching?
* Why doesn't state update immediately?

### useEffect

* What is a side effect?
* When does `useEffect` execute?
* What is the difference between `useEffect(fn)`, `useEffect(fn, [])`, and `useEffect(fn, [dependency])`?
* Why do we need cleanup?
* Why can an effect cause an infinite loop?
* What happens when a dependency changes?
* How does Strict Mode affect effects in development?

### Lists & Keys

* Why does React need keys?
* Why is using array index as a key sometimes problematic?
* How do keys affect component identity?

### Rendering

* What causes a re-render?
* What is reconciliation?
* What is the Virtual DOM?
* What is the difference between render and commit phases?

---

## 📸 Application

The application provides a central concepts dashboard where each React concept can be opened independently.

Each module includes interactive examples so that concepts can be tested directly rather than simply viewed as static documentation.

---

## 🌐 Deployment

The application can be deployed as a static React application using Vercel or another frontend hosting platform.

For React Router deployments, the application includes a `vercel.json` rewrite configuration so client-side routes can resolve correctly.

---

## 🔮 Future Improvements

Planned improvements include:

* More interactive React experiments
* Advanced Hooks laboratory
* Rendering and reconciliation visualizations
* React performance experiments
* API integration playground
* Authentication playground
* Custom Hooks laboratory
* Redux Toolkit examples
* Testing examples
* React interview question section
* Interactive diagrams for React internals
* More real-world component patterns

---

## 👨‍💻 Author

**Sunny Raj**

* GitHub: https://github.com/sunny-raj-sah
* LinkedIn: https://www.linkedin.com/in/sunny-raj-885588313/
* Portfolio: https://portfolio-eight-vert-40.vercel.app/

---

## 📄 License

This project is intended primarily for learning, experimentation, and interview preparation.
