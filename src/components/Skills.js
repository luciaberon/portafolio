import React from 'react'
import { languages } from '../content/languages'


export default function Skills() {

    return (
        <section className="logo-group">
            {
                languages.map(item => <i class={`devicon-${item}-plain colored icon`}></i>)
            }         
        </section>
    )
}
