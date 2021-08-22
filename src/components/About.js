import React from 'react'
import Skills from './Skills'
import Heading from 'react-bootstrap'

export default function About() {
    return (
        <div className="about" id="about">
            <h1 className="title-about-me">Sobre mí</h1>
            <div className="about-text">
                <p> 
                    Soy una desarrolladora web con muchas ganas de aprender y mejorar. 
                </p>
                <p>
                    Me oriento a la parte del cliente del desarrollo web, aunque también
                    poseo conocimientos del lado del servidor.
                </p>
                <p>
                    Mi tecnología favorita es React, y uno de mis objetivos es mejorar en el manejo
                    de esta librería.
                </p>
            </div>
            <h3 className="title-skills">Tecnologías</h3>
            <Skills />
        </div>
    )
}
