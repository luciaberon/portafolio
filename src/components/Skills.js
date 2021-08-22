import React from 'react'


export default function Skills() {
    const languages = ['html5','css3','javascript','react',
                        'bootstrap','sass','nodejs','express','git',
                        'mysql']
    return (
        <section className="logo-group">
            {
                languages.map(item => <i class={`devicon-${item}-plain colored icon`}></i>)
            }         
        </section>
    )
}
