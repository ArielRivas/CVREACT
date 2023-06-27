
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
              <h4>Front end</h4>
              <p>1.5 year of HTML, CSS/SCSS, JavaScript/Typescript, Angular and React with knowledge of including </p>
              <p></p>
            </article>
            <article className="about__card">
              <FiClipboard className="about__icon" />
              <h4>Salesforce</h4>
              <p>1 year of Salesforce, including all the knowledge for Admin (profiles, custom settings, metadata, flows, sites, etc), Dev (apex, triggers, schedulables, etc), VF, Aura and LWC (including integrations with SOAP/REST APIs)</p>
            </article>
          </div>
          <p>Soft skills: Team work, I've worked with Agile methodogies (SCRUM), project control with GIT (GitLab, GitHub) and Azure. Also a bit of BitBucket and Salesforce DevOps center. Also I have experience with using PostMan and Datadog.</p>
        </div>
      </div>
    </section>
  )
}

export default Home