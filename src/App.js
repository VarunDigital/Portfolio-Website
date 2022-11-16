import './App.css';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Projects from './components/Projects';
import Home from './components/Home';
import Experiences from './components/Experiences';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './components/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/projects' element={<Projects/>}/>
           <Route path='/projects/:id' element={<ProjectDisplay/>}/>
           <Route path='/experiences' element={<Experiences/>}/>
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      {/* <Contact/> */}
    </div>
  );
}

export default App;
