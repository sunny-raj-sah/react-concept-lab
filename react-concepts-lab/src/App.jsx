import { Routes, Route } from "react-router-dom";

import Concepts from "./pages/Concepts";

import Header from "./components/Header";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
 
import TaskList from "./components/TaskList";
import EventPractice from "./components/EventPractice";
import LoginForm from "./components/LoginForm";
import UseEffectLab from "./components/UseEffectLab";


import "./App.css";

function App() {
  return (
    <Routes>
      {/* Main Concepts Page */}
      <Route path="/" element={<Concepts />} />

      {/* React Concepts */}
      <Route
        path="/jsx-components"
        element={<Header />}
      />

      <Route
        path="/props"
        element={<UserProfile />}
      />

      <Route
        path="/use-state"
        element={<Counter />}
      />

    <Route
        path="/events"
        element={<EventPractice />}
      /> 
 
      
      <Route
        path="/lists-keys"
        element={<TaskList />}
      />  

      <Route
        path="/forms"
        element={<LoginForm />}
      />  
      <Route
  path="/use-effect"
  element={<UseEffectLab />}
/>
    </Routes>
  );
}

export default App;