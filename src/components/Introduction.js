import React from 'react'
import { contactInfo } from '../content/contactInfo';
import { Typewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons';


export default function Introduction() {

    const { name, jobPosition, resume, linkedin, email, github } = contactInfo

    return (
        <div className="d-flex flex-column align-items-start introduction">
            <span className="text-introduction">
                <span className="greater-than-symbol">
                &gt;
                </span>
                <Typewriter
                    words={[name]}
                    typeSpeed={100}
                    loop={1}
                    delaySpeed={1500}
                />
                <span className="underscore">_</span>
            </span>
            <div className="info-section">
                <div className="intro">
                    {jobPosition}
                </div>

                <a target="_blank" href={resume}>
                <div className="btn-push purple">                
                    DESCARGAR CV                 
                </div>
                </a>

                <div className="social-icons-group">
                    <SocialIcon target="_blank" url={linkedin} />
                    <SocialIcon target="_blank" url={email} network="email"/>
                    <SocialIcon target="_blank" url={github}/>
                </div>
            </div>
            
            
        </div>
    )
}
