import React from 'react'

import '../styles/components/sidebar.sass'

import image from '../img/eu.jpg'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <img src={image} alt='foto Eduarda Grigório'/>
        <p className='titulo'>Estudante</p>
        <p>Redes Sociais</p>
        <p>informações de contato</p>
        <a href='#' className='btn'>
            Download currículo
        </a>

    </aside>
  )
}

export default Sidebar
