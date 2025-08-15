import React from 'react'

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/redesocial.sass'

const redesocial = [
    {nome: "linkedin", icon: <FaLinkedin/> },
    {nome: "github", icon: <FaGithub/> },
    {nome: "instagram", icon: <FaInstagram/> },
];

const RedeSocial = () => {
  return (
    <section className='rede-social'>

      {redesocial.map((rede) => (
        <a href='#' className='rede-btn' id={rede.nome} key={rede.nome}>
            {rede.icon}
        </a>
      ))}

    </section>
  );
};

export default RedeSocial
