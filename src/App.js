
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Profile from './Pages/Profile';
// import ErrorPage from './Pages/ErrorPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Card />
      <div>Footer</div>
    </div>
    
  );
}

export default App;

{/* <Router>
      <nav>
        <Link to="/home"> Home</Link> 
        <Link to="/about"> About</Link>
        <Link to="/profile"> Profile</Link>       
      </nav>
     <a a href='/home'>Go to home page</a> */}

    //   <Routes>
    //     <Route path="/Home" element={<Home />}/>
    //     <Route path="/About" element={<About />}/>
    //     <Route >
    //        <Route path="/Profile/:username" element={<Profile />}/>       
    //     </Route>
    //     <Route path="*" element={<ErrorPage />}/>
    //   </Routes>
    //   <div>Footer</div>
    // </Router> 