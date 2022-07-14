
import { BsLinkedin } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';
import './footer.scss';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        
        <li><a href="https://github.com/ArielRivas/HTMLEXERCICES" target="_blank" rel="noreferrer">HTML Projects</a></li>
        <li><a href="https://github.com/ArielRivas/project" target="_blank" rel="noreferrer">Javascript</a></li>
        <li><a href="https://github.com/ArielRivas/AngularProject" target="_blank" rel="noreferrer">Angular project</a></li>
        <li><a href="#contact" target="_blank" rel="noreferrer">React project</a></li>
      </ul>
      <h2>Ariel Rivas Ferri</h2>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/" target="_blank" rel="noreferrer" ><GoMarkGithub /></a>
      </div>
    </footer>
  )
}

export default Footer