import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import AdminDashboard from './pages/AdminDashboard';
import Menu from './pages/Menu';
import Contact from './pages/Contact'; // استيراد صفحة الاتصال الصحيحة
import Location from './pages/Location';
import About from './pages/About';

import './main.css'; // استيراد ملف CSS الرئيسي

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} /> {/* استخدم Contact هنا فقط */}
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
