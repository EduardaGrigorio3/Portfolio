import React from 'react'

import { 
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiSqllite,
    DiReact
 } from 'react-icons/di'

import '../styles/components/tecnologiascontainer.sass'

const tecnologias = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "sqlite", name: "SqLite", icon: <DiSqllite /> },
    { id: "react", name: "React", icon: <DiReact /> },
];

const TecnologiasContainer = () => {
  return (
    <section className='tecnologia-container'>
      <h2>tecnologias</h2>
      <div className="tecnologias-grid">
        {tecnologias.map((tech) => (
            <div className='tecnologias-card' id={tech.id} key={tech.id}>
                {tech.icon}
                <div className='tecnologias-info'>
                    <h3> {tech.name} </h3>
                    <p> Lorem ipsum dolor sit amet consectetur </p>
                </div>
            </div>
        ))}
      </div>



    </section>
  )
}

export default TecnologiasContainer
