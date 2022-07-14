
import './home.scss';
import React from 'react';
import { FiCode } from "react-icons/fi";
import { FiClipboard} from "react-icons/fi";
import img from "../../../src/assests/1657615776427.jpg"

const Home = () => {
  
  return (
   <section>
      <div className="container about__container">
        <div className="about__me">
          <img src={img} alt="myPhoto"></img>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FiCode className="about__icon" />
              <h4>Experience</h4>
              <p>5 months of HTML, CSS/SCSS, JavaScript, Angular and React</p>
            </article>
            <article className="about__card">
              <FiClipboard className="about__icon" />
              <h4>Projects</h4>
              <p>PokeApi, MoleBuster, ToDoList, AngularProject, ReactProject, myPersonalCV</p>
            </article>
          </div>
          <p>Front-end developer. I've spent my last months in a bootcamp, remotly, working with front-end's main technologies. I've been worked with Git/GitHub/GitLab, improving soft-skills such as teamwork, having a regular timeline, etc.</p>
        </div>
      </div>
    </section>
  )
}

export default Home