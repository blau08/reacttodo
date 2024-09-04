import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import Login from './components/Login';
import './App.css'; // Make sure you have this import

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-brand">Todo App</div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Todo List</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<TodoList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
