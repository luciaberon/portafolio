import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Card({project, badges}) {

  const { name, img, description, languages, link } = project
    return (
      <section className="card">
        <div className="card-img">
          <img src={img} alt="..."></img>
        </div>
        <div className="card-info">
          <div>
            <h1 className="card-title">{name}</h1>
            <p className="card-description">{description}</p> 
            <div className="card-languages">
              {
                languages.map(name => {
                  return (
                    <img src={badges[name]}></img>
                  )
                })
              }
            </div>      
          </div>
        </div>
      </section>
    )
}
