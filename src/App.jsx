import './App.css';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RootPage from './pages/RootPage';
import ProtectedRoute from './components/ProtectedRoute';
import Courses from './pages/Courses';
import AboutUs from './pages/AboutUs';
import Teachers from './pages/Teachers';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/teachers" element={<Teachers />} />



        {/* Syntax for protected route */}
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />



      
      </Routes>
    </>
  )
}

export default App;
