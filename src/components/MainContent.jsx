import React from 'react'

import SobreContainer from './SobreContainer'
import TecnologiasContainer from './TecnologiasContainer'
import ProjetosContainer from './ProjetosContainer'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main className='main-content'>
      <SobreContainer/>
      <TecnologiasContainer/>
      <ProjetosContainer/>
    </main>
  )
}

export default MainContent
