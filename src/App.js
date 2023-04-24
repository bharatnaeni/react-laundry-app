import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginForm />} />
      <Route element={<ProtectedRoute />}>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
