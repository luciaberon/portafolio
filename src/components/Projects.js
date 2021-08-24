import React from 'react'
import Card from './Card'
import { projects } from '../content/projects'
import { badges } from '../content/badges'


export default function Projects() {
    return (
        <div className="projects">
            <h1 className="title-projects-section" id="portfolio">Proyectos</h1>
                <div className="projects-card-group mb-2">
                {
                    projects.map((item,index) => 
                        <Card 
                            key={index}
                            project={item}
                            badges={badges}                
                        />
                    )
                }
                </div>            
        </div>
    )
}
