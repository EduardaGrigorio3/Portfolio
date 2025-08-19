import React from 'react'

import { Link } from 'react-router-dom';

const ProjetosContainer = () => {
  return (
    <section className='projeto-container'>
      <h2>Projetos</h2>
      <p>
      Aqui estão alguns dos projetos nos quais trabalhei. Eles demonstram minhas habilidades de desenvolvimento, desde a concepção de interfaces até a implementação de funcionalidades.
      </p>
      <Link to="/Projetos" className="btn" target='_blank'>
        ver projetos
      </Link>
    </section>
  )
}

export default ProjetosContainer
