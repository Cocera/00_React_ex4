import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import ReservationForm from './components/ReservationForm/ReservationForm.jsx';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservationForm" element={<ReservationForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
