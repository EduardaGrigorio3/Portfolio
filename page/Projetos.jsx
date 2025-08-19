import React from 'react'
import { Link } from 'react-router-dom';

import '../src/styles/components/projetos.sass';

import Quiz from '../src/img/quiz.png';
import BoloDeRolo from '../src/img/boloDeRolo.png';
import ClinicaVet from '../src/img/clinicaVet.png';
import Portifolio from '../src/img/portifolio.png';

const Projetos = () => {
  return (
    <section className='projetos'>

      <h2 className='titulo-projeto'>MEUS PROJETOS</h2>

      <nav >
        <Link to="/" className='link-tela-inicial'>Tela inicial</Link>
        <span className='texto-projetos'> &gt; </span>
        <span className='texto-projetos'>Meus projetos</span>
      </nav>

      <div className='projetos-caixa'>

        <div className='projetos-card'>
          <img src={Quiz} alt='projeto 1' className='projetos-img' />
          <div className='caixa-informacao' >
            <h3 className='info-projetos' >Jogo de Quiz</h3>
            <p className='conteudo-projetos' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href='https://quiz-app-6usm.vercel.app/' target="_blank" className='link-projetos'>Acesse o projeto</a>
          </div>
        </div>

        <div className='projetos-card'>
          <img src={BoloDeRolo} alt='projeto 2' className='projetos-img' />
          <div className='caixa-informacao' >
            <h3 className='info-projetos' >Loja de Bolo de Rolo</h3>
            <p className='conteudo-projetos' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href='https://github.com/EduardaGrigorio3/projeto_site' target="_blank" className='link-projetos'>Acesse o projeto</a>
          </div>
        </div>

        <div className='projetos-card'>
          <img src={ClinicaVet} alt='projeto 3' className='projetos-img' />
          <div className='caixa-informacao' >
            <h3 className='info-projetos' >Sistema de Clínica Veterinária</h3>
            <p className='conteudo-projetos' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href='https://github.com/mayx2/clinica-veterinaria' target="_blank" className='link-projetos'>Acesse o projeto</a>
          </div>
        </div>

        <div className='projetos-card'>
          <img src={Portifolio} alt='projeto 4' className='projetos-img' />
          <div className='caixa-informacao' >
            <h3 className='info-projetos' >Portifólio pessoal</h3>
            <p className='conteudo-projetos' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href='https://portifolio-tan-omega.vercel.app/' target="_blank" className='link-projetos'>Acesse o projeto</a>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Projetos
