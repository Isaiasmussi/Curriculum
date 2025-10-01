'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, User, FolderKanban, GraduationCap, Award, Languages, Lightbulb, Briefcase, X } from 'lucide-react';

// Ícones
const PythonIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M14.2 3.3c.2.3.2.7 0 1l-3.3 4.2c-.3.3-.7.3-1 0L6.6 4.3a.7.7 0 0 1 0-1l.9-1c.3-.3.7-.3 1 0l1.8 1.8 1.8-1.8c.3-.3.7-.3 1 0l.9 1zm-5.4 6.6c.3.3.3.7 0 1L4.6 15c-.3.3-.7.3-1 0l-1-1a.7.7 0 0 1 0-1l4.2-3.3c.3-.3.7-.3 1 0zm10.8 0c.3.3.7.3 1 0l4.2 3.3c.3.3.3.7 0 1l-1 1c-.3.3-.7.3-1 0l-4.2-4.2a.7.7 0 0 1 0-1zM9.8 20.7c-.2-.3-.2-.7 0-1l3.3-4.2c.3-.3.7-.3 1 0l3.3 4.2c.3.3.3.7 0 1l-.9 1c-.3.3-.7.3-1 0l-1.8-1.8-1.8 1.8c-.3-.3-.7-.3-1 0l-.9-1z"/></svg>;
const DatabaseIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 3c-4.42 0-8 1.79-8 4v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.31 0 6 1.34 6 3s-2.69 3-6 3-6-1.34-6-3 2.69-3 6-3zm0 14c-3.31 0-6-1.34-6-3v-1.55c1.18.66 2.97 1.05 5 1.05s3.82-.39 5-1.05V16c0 1.66-2.69 3-6 3z"/></svg>;
const ChartIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M4 20h16V4h-2v14H4v2zm2-2h2v-4H6v4zm4 0h2v-8h-2v8zm4 0h2v-6h-2v6z"/></svg>;
const NextJSIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>;
const BrowserIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zM4 6h16v1H4z"/></svg>;
const BrainIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2C9.25 2 7 4.25 7 7c0 1.5.67 2.85 1.75 3.75C7.67 11.57 7 12.7 7 14c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2 0-1.3-.67-2.43-1.75-3.25C16.33 9.85 17 8.5 17 7c0-2.75-2.25-5-5-5zm-3 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-3 5H9v-2h6v2z"/></svg>;
const SpreadsheetIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M4 4h16v16H4V4zm2 2v2h2V6H6zm4 0v2h2V6h-2zm4 0v2h2V6h-2zM6 10v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"/></svg>;
const CrmIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V18h6v-1.5c0-2.33-4.67-3.5-7-3.5z"/></svg>;

// Porcentagens e elementos
const ProgressBar = ({ title, percentage }: { title: string, percentage: number }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-gray-300">{title}</span>
      <span className="text-xs font-medium text-gray-400">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div className="bg-white h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 max-w-2xl w-full relative">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
        <X size={24} />
      </button>
      <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
      <p className="text-gray-400 mb-6">{project.modalDescription}</p>
      {/* Futuramente, podemos adicionar uma galeria de imagens aqui */}
      <div className="bg-gray-800 rounded h-48 flex items-center justify-center text-gray-500">
        [Espaço para fotos do projeto]
      </div>
    </div>
  </div>
);

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const navItems = [
    { name: 'Sobre', href: '#sobre', icon: User },
    { name: 'Carreira', href: '#carreira', icon: Briefcase },
    { name: 'Projetos', href: '#projetos', icon: FolderKanban },
    { name: 'Habilidades', href: '#habilidades', icon: Lightbulb },
    { name: 'Formações', href: '#formacoes', icon: GraduationCap },
    { name: 'Certificados', href: '#certificados', icon: Award },
    { name: 'Idiomas', href: '#idiomas', icon: Languages },
  ];

  const projects = [
    {
      title: 'Calendário Agrícola',
      description: 'Ferramenta interativa para consulta de épocas de plantio e colheita.',
      modalDescription: 'Descrição mais detalhada sobre o Calendário Agrícola, incluindo as tecnologias usadas, os desafios encontrados e os resultados alcançados.'
    },
    {
      title: 'Dashboard de Feiras e Eventos',
      description: 'Painel visual para acompanhamento dos principais eventos do agronegócio.',
      modalDescription: 'Descrição detalhada do Dashboard de Feiras, focado em como os dados são coletados, processados e visualizados para ajudar na tomada de decisão.'
    },
    {
      title: 'Dashboard de Balança Comercial',
      description: 'Visualização de dados de importação e exportação do agronegócio.',
      modalDescription: 'Este projeto envolve a análise de grandes volumes de dados sobre a balança comercial do agronegócio, transformando-os em insights claros e acionáveis.'
    },
  ];

  const techSkills = [
    { name: 'Python (Pandas)', icon: <PythonIcon /> },
    { name: 'SQL', icon: <DatabaseIcon /> },
    { name: 'Power BI', icon: <ChartIcon /> },
    { name: 'Next.js', icon: <NextJSIcon /> },
    { name: 'Webapps', icon: <BrowserIcon /> },
    { name: 'Inteligência Artificial', icon: <BrainIcon /> },
    { name: 'Excel e Planilhas', icon: <SpreadsheetIcon /> },
    { name: 'CRM', icon: <CrmIcon /> },
  ];

  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <div className="flex flex-col md:flex-row">
          <aside className="md:w-80 md:min-h-screen p-8 border-r border-gray-800 flex flex-col">
            <div className="flex items-center gap-4">
              <img src="https://ibb.co/7xVp8p0" alt="Foto de Isaías Mussi" className="rounded-full w-16 h-16 border-2 border-gray-700 object-cover" />
              <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                  Isaías Mussi <span className="text-lg font-mono text-gray-500">21</span>
                </h1>
                <p className="text-md text-gray-400">
                  Dados, Marketing e Desempenho
                </p>
              </div>
            </div>
            <nav className="mt-10 flex-grow">
              <ul>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="flex items-center py-2 px-3 rounded-md text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                      <item.icon size={18} />
                      <span className="ml-3 text-sm font-medium">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex justify-center md:justify-start space-x-4 mt-8">
              <a href="https://github.com/isaiasmussi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/SEU_USUARIO_LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="mailto:isaias.mussi@gmail.com" className="text-gray-500 hover:text-white transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </aside>

          <main className="flex-1 p-8 md:p-12">
            <section id="sobre" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-white mb-6">Sobre Mim</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed">
                  Olá! Sou um profissional apaixonado por resolver problemas complexos na interseção entre negócios, tecnologia e análise de dados. Atualmente, estou cursando Economia e Ciência de Dados, aplicando o conhecimento acadêmico diretamente no mercado, gerando soluções em Marketing e análise de dados no Portal Agrolink.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Meu objetivo é utilizar a tecnologia para extrair insights valiosos e construir soluções que gerem impacto real. Tenho experiência em análise de dados, marketing e agora liderança de projetos, buscando sempre otimizar processos e entregar valor.
                </p>
              </div>
            </section>
            <section id="carreira" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-white mb-6">Carreira</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="relative border-l border-gray-700 pl-6">
                  <div className="absolute -left-[1.1rem] top-1 w-5 h-5 bg-gray-700 rounded-full border-4 border-black"></div>
                  <h3 className="font-bold text-lg text-white">Gestor de Projetos</h3>
                  <p className="text-sm text-gray-400">Portal Agrolink | 2023 - Presente</p>
                  <p className="text-gray-300 mt-2 text-sm">Responsável pelo planeamento, execução e entrega de projetos de marketing e análise de dados, otimizando processos e garantindo o alinhamento com os objetivos estratégicos da empresa.</p>
                </div>
              </div>
            </section>

            <section id="projetos" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-white mb-6">Projetos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <button key={index} onClick={() => setSelectedProject(project)} className="text-left block bg-white/5 border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
                    <h3 className="font-bold text-lg mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  </button>
                ))}
              </div>
            </section>

            <section id="habilidades" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-white mb-6">Habilidades & Soft Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-white">Habilidades Técnicas</h3>
                  <div className="flex flex-wrap gap-3">
                    {techSkills.map((skill, index) => (
                      <span key={index} className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-medium px-3 py-1 rounded-full">
                        {skill.icon}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-4 text-white">Soft Skills</h3>
                     <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">Comunicação</span>
                        <span className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">Resolução de Problemas</span>
                        <span className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">Liderança</span>
                        <span className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">Pensamento Crítico</span>
                        <span className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">Adaptabilidade</span>
                    </div>
                </div>
              </div>
            </section>

            <section id="formacoes" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold text-white mb-6">Formações Acadêmicas</h2>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-8">
                  <div>
                    <h3 className="font-bold text-lg text-white">Ciência de Dados e Inteligência Artificial</h3>
                    <p className="text-sm text-gray-400">E.B.A.C - Escola Britânica de Artes Criativas e Tecnologia</p>
                    <div className="mt-3">
                      <ProgressBar title="Andamento do Curso" percentage={75} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Ciências Econômicas</h3>
                    <p className="text-sm text-gray-400">PUCRS (Ênfase em Análise de Dados)</p>
                     <div className="mt-3">
                      <ProgressBar title="Andamento do Curso" percentage={65} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Análise de Mercado e Desempenho</h3>
                    <p className="text-sm text-gray-400">Futebol Interativo</p>
                     <div className="mt-3">
                      <ProgressBar title="Andamento do Curso" percentage={35} />
                    </div>
                  </div>
                </div>
            </section>
            <section id="certificados" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold text-white mb-6">Certificados</h2>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                   <p className="text-gray-400">Nenhum certificado adicionado ainda.</p>
                </div>
            </section>
            <section id="idiomas" className="scroll-mt-20">
                <h2 className="text-3xl font-bold text-white mb-6">Idiomas</h2>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <ProgressBar title="Espanhol" percentage={75} />
                </div>
            </section>
          </main>
        </div>
      </div>
      
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}

