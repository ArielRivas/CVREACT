import React from 'react';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Timeline from './components/timeline/timeline';

function App() {
  return (
    <>
    <Header />
    <Nav />
    <Home />
    <Projects />
    <Timeline />
    <Contact />
    <Footer />
  </>
  );
}

export default App;
