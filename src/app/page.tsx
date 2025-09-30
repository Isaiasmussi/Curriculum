import { Github, Linkedin, Mail, User, FolderKanban, GraduationCap, Award, Languages, Lightbulb } from 'lucide-react';

// --- Componentes ---

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

const SkillBadge = ({ name }: { name: string }) => (
  <span className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">{name}</span>
);

const ProjectCard = ({ title, description, tags, link, linkText }: { title: string, description: string, tags: string, link?: string, linkText?: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
    <h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
    <p className="text-gray-400 text-sm mb-4">{description}</p>
    <div className="flex items-center justify-between">
      <span className="text-xs font-mono text-gray-400">{tags}</span>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:underline">{linkText} &rarr;</a>
      ) : (
        <span className="text-sm font-semibold text-gray-500">{linkText}</span>
      )}
    </div>
  </div>
);


// --- Página Principal ---

export default function PortfolioPage() {
  const navItems = [
    { name: 'Sobre', href: '#sobre', icon: User },
    { name: 'Projetos', href: '#projetos', icon: FolderKanban },
    { name: 'Habilidades', href: '#habilidades', icon: Lightbulb },
    { name: 'Formações', href: '#formacoes', icon: GraduationCap },
    { name: 'Certificados', href: '#certificados', icon: Award },
    { name: 'Idiomas', href: '#idiomas', icon: Languages },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex flex-col md:flex-row">
        
        {/* --- Barra Lateral de Navegação (Sidebar) --- */}
        <aside className="md:w-72 md:min-h-screen p-8 border-r border-gray-800 flex flex-col sticky top-0">
          <div className="flex items-center gap-4">
            <img 
              src="https://placehold.co/80x80/1A1A1A/FFFFFF/png?text=IM" 
              alt="Foto de Isaías Mussi" 
              className="rounded-full w-16 h-16 border-2 border-gray-700"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">Isaías Mussi</h1>
              <p className="text-md text-gray-400">Gestor de Projetos</p>
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
            <a href="https://github.com/isaiasmussi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Github size={22} /></a>
            <a href="https://linkedin.com/in/SEU_USUARIO_LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={22} /></a>
            <a href="mailto:isaias.mussi@gmail.com" className="text-gray-500 hover:text-white transition-colors"><Mail size={22} /></a>
          </div>
        </aside>

        {/* --- Área de Conteúdo Principal --- */}
        <main className="flex-1 p-8 md:p-12">
          
          <section id="sobre" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-white mb-6">Sobre Mim</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4 text-gray-300 leading-relaxed">
              <p>Olá! Sou um profissional apaixonado por resolver problemas complexos na interseção entre negócios, tecnologia e análise de dados. Atualmente, estou cursando Economia e Ciência de Dados, aplicando o conhecimento acadêmico diretamente no mercado como Gestor de Projetos na Agrolink.</p>
              <p>Meu objetivo é utilizar a tecnologia para extrair insights valiosos e construir soluções que gerem impacto real. Tenho experiência em análise de dados, marketing e agora liderança de projetos, buscando sempre otimizar processos e entregar valor.</p>
            </div>
          </section>

          <section id="projetos" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-white mb-6">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard 
                title="Fut Data - Análise Estatística"
                description="Plataforma para análise de dados de partidas de futebol, extraindo estatísticas e gerando visualizações para predição de resultados."
                tags="Python | Pandas | Flask"
                link="https://github.com/isaiasmussi"
                linkText="Ver no GitHub"
              />
              <ProjectCard 
                title="Dashboard de KPIs Agrolink"
                description="(Exemplo) Desenvolvimento de um dashboard interativo para monitoramento em tempo real dos indicadores de performance dos projetos."
                tags="Power BI | SQL"
                linkText="Acesso Restrito"
              />
            </div>
          </section>

          <section id="habilidades" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-white mb-6">Habilidades & Soft Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-4 text-white">Habilidades Técnicas</h3>
                    <div className="flex flex-wrap gap-2">
                        <SkillBadge name="Python (Pandas)" />
                        <SkillBadge name="SQL" />
                        <SkillBadge name="Power BI" />
                        <SkillBadge name="Next.js" />
                        <SkillBadge name="Análise de Dados" />
                        <SkillBadge name="Gestão de Projetos" />
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-4 text-white">Soft Skills</h3>
                     <div className="flex flex-wrap gap-2">
                        <SkillBadge name="Comunicação" />
                        <SkillBadge name="Resolução de Problemas" />
                        <SkillBadge name="Liderança" />
                        <SkillBadge name="Pensamento Crítico" />
                        <SkillBadge name="Adaptabilidade" />
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
                <div className="mt-3"><ProgressBar title="Andamento do Curso" percentage={75} /></div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Ciências Econômicas</h3>
                <p className="text-sm text-gray-400">PUCRS (Ênfase em Análise de Dados)</p>
                 <div className="mt-3"><ProgressBar title="Andamento do Curso" percentage={65} /></div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Análise de Mercado e Desempenho</h3>
                <p className="text-sm text-gray-400">Futebol Interativo</p>
                 <div className="mt-3"><ProgressBar title="Andamento do Curso" percentage={35} /></div>
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
              <ProgressBar title="Inglês" percentage={80} />
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

