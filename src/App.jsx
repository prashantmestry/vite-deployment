import { BrowserRouter, Routes, Route, Link } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chart from "./pages/Chart";

//
function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/dashboard">Dashboard</Link> &nbsp;
          <Link to="/dashboard/about">D About</Link> &nbsp;
          <Link to="/dashboard/contact">D Contact</Link>
          <Link to="/dashboard/settings">D Settings</Link> &nbsp;
          <Link to="/login">Login</Link> &nbsp;
          <Link to="/register">Register</Link>&nbsp;
          <Link to="/chart">Chart</Link> &nbsp;
          <Link to="/">Landing Page</Link>&nbsp;
        </nav>
        <Routes>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<div>Ooops..</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
