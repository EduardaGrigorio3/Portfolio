import React from 'react'

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/redesocial.sass'

const redesocial = [
    {nome: "linkedin", icon: <FaLinkedin/>, link: "http://www.linkedin.com/in/eduardagrig%C3%B3rio"},
    {nome: "github", icon: <FaGithub/>, link: "https://github.com/EduardaGrigorio3" },
    {nome: "instagram", icon: <FaInstagram/>, link: "https://www.instagram.com/_madu_grigorio/" },
];

const RedeSocial = () => {
  return (
      <section className='rede-social'>
          {redesocial.map((rede) => (
              <a 
                  href={rede.link} 
                  className='rede-btn' 
                  id={rede.nome} 
                  key={rede.nome}
                  target="_blank" 
                  rel="noopener noreferrer" 
              >
                  {rede.icon}
              </a>
          ))}
      </section>
  );
};

export default RedeSocial
