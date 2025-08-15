import React from 'react'

import { AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/informacaocontainer.sass'

const InformacaoContainer = () => {
  return (
    <section className='informacao-container'>

        <div className='info-card'>
            <AiOutlineMail id='email-icon'/>
            <div>
                <h3>E-mail</h3>
                <p>eduardagrigorio2024@gmail.com</p>
            </div>
        </div>

        <div className='info-card'>
            <AiFillEnvironment id='cidade-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Garanhuns-PE</p>
            </div>
        </div>
      
    </section>
  )
}

export default InformacaoContainer
