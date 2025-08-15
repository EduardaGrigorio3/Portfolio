import React from 'react'

import '../styles/components/sidebar.sass'
import RedeSocial from './RedeSocial'
import InformacaoContainer from './InformacaoContainer'

import image from '../img/eu.jpg'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <img src={image} alt='foto Eduarda Grigório'/>
        <p className='titulo'>Desenvolvedora</p>
        <RedeSocial/>
        <InformacaoContainer/>
        <a href='https://drive.google.com/file/d/1KPDuxIbcELJ2eYMm9L9o9OJjWEB7q_DP/view?usp=sharing' className='btn' target='_blank'>
            Download currículo
        </a>

    </aside>
  )
}

export default Sidebar
