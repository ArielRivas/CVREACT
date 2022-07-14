
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { DiAngularSimple } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import "./timeline.scss";

const Timeline = () => {
    return (
<VerticalTimeline >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 10-15"
    iconStyle={{ background: 'rgb(33, 150, 000)', color: '#fff' }}
    icon={<DiHtml5 />}
  >
    <h3 className="vertical-timeline-element-title">HTML Projects</h3>
    <h4 className="vertical-timeline-element-subtitle">CSS</h4>
    <p className='vertical-timeline-element-subtitle-p'>
      Building HTML pages copying the same structure of the originals.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 15-May 6"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<DiSass />}
  >
    <h3 className="vertical-timeline-element-title">Introducing SASS</h3>
    <h4 className="vertical-timeline-element-subtitle">HTML/Git</h4>
    <p className='vertical-timeline-element-subtitle-p'>
    Starting with Git and SCSS. Getting used with branches and repositories.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 9-30"
    iconStyle={{ background: 'rgb(80, 100, 100)', color: '#fff' }}
    icon={<DiJsBadge />}
  >
    <h3 className="vertical-timeline-element-title">Javascript</h3>
    <h4 className="vertical-timeline-element-subtitle">API, MoleBuster, ToDoList</h4>
    <p className='vertical-timeline-element-subtitle-p'>
    Getting used to Javascript Vanilla. Making three projects using DOM and JSON.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June 13-29"
    iconStyle={{ background: 'rgb(60, 50, 600)', color: '#fff' }}
    icon={<DiAngularSimple />}
  >
    <h3 className="vertical-timeline-element-title">Angular</h3>
    <h4 className="vertical-timeline-element-subtitle">Final Fantasy Project</h4>
    <p className='vertical-timeline-element-subtitle-p'>
    Getting used to Angular and Typescript.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="July 4-29"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<DiReact />}
  >
    <h3 className="vertical-timeline-element-title">React</h3>
    <h4 className="vertical-timeline-element-subtitle">CV and Team Project</h4>
    <p className='vertical-timeline-element-subtitle-p'>
    Getting used to React, teamwork and timelines.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    )
}
export default Timeline;