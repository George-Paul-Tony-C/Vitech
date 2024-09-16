import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import Dashboard from './admin/dashboard/Dashboard';
import MerchandiseSales from './admin/merchandise/MerchandiseSales';
import CreateEvent from './admin/events/CreateEvent';
import Events from './admin/events/Events';
import EditEvent from './admin/events/EditEvent';
import Participants from './admin/events/Participants';
import { useState } from 'react';
import React from "react";
import "./index.css";
import Signup from "./pages/Signup";
import UserHome from "./pages/UserHome";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <Router>
      <Routes>
        {/* Initial Route */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Dashboard /> : <Login onLogin={handleLogin} />
          }
        />
        {/* Admin Dashboard Route */}
        <Route path="/admin/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Login onLogin={handleLogin} />
          }
        />
        <Route path="/admin/events" element={<Events />} />
        <Route path = "/admin/participants" element={<Participants/>}/>
        <Route path="/admin/create-event" element={<CreateEvent />} />
        <Route path="/admin/merchandise" element={<MerchandiseSales />} />
        <Route path="/admin/editevents" element={<EditEvent />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/userhome' element={<UserHome />} />
      </Routes>
    </Router>
  );
}

export default App;
