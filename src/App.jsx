import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import Personalize from './pages/personalize/Personalize';
import CreateTrip from './pages/create-trip/CreateTrip';
import ExploreHolidays from './pages/explore-holidays/ExploreHolidays';
import Agencies from './pages/agencies/Agencies';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <Router>
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/personalize" element={<Personalize />} />
            <Route path="/create-trip" element={<CreateTrip />} />
            <Route path="/explore-holidays" element={<ExploreHolidays />} />
            <Route path="/ " element={<Agencies />} />
          </Routes>
        </>
      </Router>
      <Footer />
    </div>
  )
}

export default App
