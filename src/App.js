import React, { useState } from 'react';
import './App.css';
import Navbar from './components/sections/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectCard from './components/ProjectCard';
import {ProjectContainer} from './components/ProjectCardStyles'
import { ProjectData } from './components/ProjectData';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects'
import Footer from './components/sections/Footer'
import Getstarted from './components/sections/Getstarted';
import Project1 from './components/pages/project1';
import Project2 from './components/pages/project2';
import Project3 from './components/pages/project3';
import Project4 from './components/pages/project4';
import Project5 from './components/pages/project5';
import Project6 from './components/pages/project6';
import Roadmap from './components/sections/Roadmap';



function App() {

  const [selectedMode, setSelectedMode] = useState('open')
  return (
    <>
    <Router>
    <Navbar/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/" component={About}/>
    <Route exact path="/" component={Getstarted}/>
    <Route exact path="/" component={Projects}/>
    <Route exact path="/" component={Footer}/>
    <Route exact path="/project1" component={Project1}/>
    <Route exact path="/project1" component={Roadmap}/>
    <Route exact path="/project2" component={Project2}/>
    <Route exact path="/project2" component={Roadmap}/>
    <Route exact path="/project3" component={Project3}/>
    <Route exact path="/project3" component={Roadmap}/>
    <Route exact path="/project4" component={Project4}/>
    <Route exact path="/project4" component={Roadmap}/>
    <Route exact path="/project5" component={Project5}/>
    <Route exact path="/project5" component={Roadmap}/>
    <Route exact path="/project6" component={Project6}/>
    <Route exact path="/project6" component={Roadmap}/>
    </Router>
    </>


  );
}

export default App;
