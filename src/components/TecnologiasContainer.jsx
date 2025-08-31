import React from 'react';

import { 
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiSqllite,
    DiReact,
    DiJava,
    DiGit,
    DiEclipse,
 } from 'react-icons/di';

 import { VscVscode } from 'react-icons/vsc';

import '../styles/components/tecnologiascontainer.sass';


const tecnologias = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, descricao: "Desenvolvo interfaces responsivas e acessíveis, priorizando a semântica." },
    { id: "css", name: "CSS3", icon: <DiCss3 />, descricao: "Crio layouts modernos e intuitivos, pensando sempre na melhor experiência do usuário." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, descricao: "Crio funcionalidades dinâmicas para tornar as páginas web mais interativas e responsivas." },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, descricao: "Construo APIs e servidores, utilizando o Express para gerenciar rotas e requisições." },
    { id: "sqlite", name: "SqLite", icon: <DiSqllite />, descricao: "Tenho conhecimento em bancos de dados SQL para armazenar dados de aplicações." },
    { id: "react", name: "React", icon: <DiReact />, descricao: "Utilizo o React para construir componentes reutilizáveis, gerenciando o estado da aplicação." },
    { id: "java", name: "Java", icon: <DiJava />, descricao: "Desenvolvo aplicações com base em Java, aplicando os princípios da Programação Orientada a Objetos (POO)" },
    { id: "git", name: "Git", icon: <DiGit />, descricao: "Utilizo para controle de versão em projetos, colaborando e gerenciando o histórico de código." },
    { id: "eclipse", name: "Eclipse", icon: <DiEclipse />, descricao: "Conhecimento na IDE Eclipse, utilizada para otimizar o desenvolvimento em Java." },
    { id: "vscode", name: "VsCode", icon: <VscVscode />, descricao: "Utilizo o VS Code como IDE principal para otimizar o desenvolvimento web." },
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
                    <p> {tech.descricao} </p> 
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default TecnologiasContainer;
