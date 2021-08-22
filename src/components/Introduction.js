import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons';


export default function Introduction() {
    return (
        <div className="d-flex flex-column align-items-start introduction">
            <span className="text-introduction">
                <span className="greater-than-symbol">
                &gt;
                </span>
                <Typewriter
                    words={['Lucía Berón']}
                    typeSpeed={100}
                    loop={1}
                    delaySpeed={1500}
                />
                <span className="underscore">_</span>
            </span>
            <div className="info-section">
                <div className="intro">
                    Desarrolladora Front End
                </div>

                <div className="btn-push purple">
                    <a target="_blank" href="https://drive.google.com/file/d/1VZtx0aNcq59jNxuUSnwqY19w6xt2-Mu0/view?usp=sharing">
                    DESCARGAR CV
                    </a>
                </div>

                <div className="social-icons-group">
                    <SocialIcon target="_blank" url="https://linkedin.com/in/lucia-beron" />
                    <SocialIcon target="_blank" url="mailto:luciaberonwaingart@hotmail.com" network="email"/>
                    <SocialIcon target="_blank" url="https://github.com/mindlessChair/"/>
                </div>
            </div>
            
            
        </div>
    )
}
