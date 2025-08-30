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

      <div className="particulas"></div>

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
            <p className='conteudo-projetos' >Desenvolvido em React. Utiliza Context API para gerenciar o estado da aplicação, O design é feito com HTML e CSS.</p>
            <a href='https://quiz-app-6usm.vercel.app/' target="_blank" className='link-projetos'>Acesse o projeto</a>
          </div>
        </div>

        <div className='projetos-card'>
          <img src={BoloDeRolo} alt='projeto 2' className='projetos-img' />
          <div className='caixa-informacao' >
            <h3 className='info-projetos' >Loja de Bolo de Rolo</h3>
            <p className='conteudo-projetos' >Aplicação full-stack com Node.js (Express) e SQLite, usando HTML, CSS e JavaScript no frontend.</p>
            <a href='https://github.com/EduardaGrigorio3/projeto_site' target="_blank" className='link-projetos'>Acesse o projeto</a>
          </div>
        </div>

        <div className='projetos-card'>
          <img src={ClinicaVet} alt='projeto 3' className='projetos-img' />
          <div className='caixa-informacao' >
            <h3 className='info-projetos' >Sistema de Clínica Veterinária</h3>
            <p className='conteudo-projetos' >Aplicação full-stack com arquitetura MVC. Frontend em React com React Router e backend em Node.js (Express) e Sequelize.</p>
            <a href='https://github.com/mayx2/clinica-veterinaria' target="_blank" className='link-projetos'>Acesse o projeto</a>
          </div>
        </div>

        <div className='projetos-card'>
          <img src={Portifolio} alt='projeto 4' className='projetos-img' />
          <div className='caixa-informacao' >
            <h3 className='info-projetos' >Portifólio pessoal</h3>
            <p className='conteudo-projetos' >Desenvolvido em React com Vite para otimização e estilizado com Sass para CSS modular.</p>
            <a href='https://github.com/EduardaGrigorio3/Portifolio/blob/main/README.md' target="_blank" className='link-projetos'>Acesse o projeto</a>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Projetos
