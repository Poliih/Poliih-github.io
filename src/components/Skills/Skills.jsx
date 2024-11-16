import React from "react";
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { faNode, faFigma, faReact, faAngular } from '@fortawesome/free-brands-svg-icons';
import Ellipse2 from "../Shapes/Ellipse2/Ellipse2";
import Rectangle from "../Shapes/Rectangle/Rectangle";

function Skills() {
  return (
    <div className="skills">
        <div className="skills-items">
            <Ellipse2 width={150}>
                <FontAwesomeIcon icon={faPython} style={{ fontSize: '4.5rem', color: '#ca7afc' }} />
            </Ellipse2>
            <Ellipse2 width={150}>
                <FontAwesomeIcon icon={faJava} style={{ fontSize: '4.5rem', color: '#ca7afc' }} />
            </Ellipse2>
            <Ellipse2 width={150}>
                <FontAwesomeIcon icon={faC} style={{ fontSize: '4.5rem', color: '#ca7afc' }} />
            </Ellipse2>
            <Ellipse2 width={150}>
                <FontAwesomeIcon icon={faNode} style={{ fontSize: '4.5rem', color: '#ca7afc' }} />
            </Ellipse2>
        </div>
        <div className="skills-items2">
            <Ellipse2 width={150}>
                <FontAwesomeIcon icon={faFigma} style={{ fontSize: '4.5rem', color: '#ca7afc' }} />
            </Ellipse2>
            <Ellipse2 width={150}>
                <FontAwesomeIcon icon={faReact} style={{ fontSize: '4.5rem', color: '#ca7afc' }} />
            </Ellipse2>
            <Ellipse2 width={150}>
                <FontAwesomeIcon icon={faAngular} style={{ fontSize: '4.5rem', color: '#ca7afc' }} />
            </Ellipse2>
        </div>
        <div className="rectangle1">
            <Rectangle />
        </div>
        <div className="rectangle2">
            <Rectangle />
        </div>
    </div>
  );
}

export default Skills;
