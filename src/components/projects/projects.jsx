import './projects.scss';
import React from 'react';
import { DiAngularSimple } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";
import { DiReact } from "react-icons/di";

const Projects = () => {
  return(
    <section id="about">
          <h2>Skills and experience</h2>
          <div className="container experience__container">
            <div className="experience__frontend">
              <h3>Front-end Development</h3>
              <div className="experience__content">
              <article className="experience__details">
                  <DiHtml5 className="experience__details-icon" />
                  <h4>HTML</h4>
                </article>
                <article className="experience__details">
                  <DiCss3Full className="experience__details-icon" />
                  <h4>CSS</h4>
                  <article className="experience__details">
                  <DiSass className="experience__details-icon" />
                  <h4>SCSS</h4>
                </article>
                </article>
                <article className="experience__details">
                  <DiJsBadge className="experience__details-icon" />
                  <h4>JavaScript</h4>
                </article>
                <article className="experience__details">
                  <DiAngularSimple className="experience__details-icon" />
                  <h4>Angular</h4>
                </article>
                <article className="experience__details">
                  <DiReact className="experience__details-icon" />
                  <h4>React</h4>
                </article>
              </div>
            </div>
            </div>
            </section>
)}



export default Projects;