import './App.css';
// import NavBar from './components/Navbar/NavBar';
// import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Home />

    </Router>
  );
}

export default App;
