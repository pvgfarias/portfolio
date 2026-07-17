export interface Experience {
  id: number;
  title: string;
  ptTitle: string;
  company: string;
  ptCompany: string;
  location: string;
  ptLocation: string;
  duration: string;
  ptDuration: string;
  description: string;
  ptDescription: string;
  technologies?: string[];
  achievements?: string[];
  ptAchievements?: string[];
  type: 'work' | 'internship' | 'project' | 'education';
  ptType: 'trabalho' | 'estágio' | 'projeto' | 'educação';
  logo?: string;
}
export const experiences: Experience[] = [
  {
    id: 5,
    title: 'Data Analyst',
    ptTitle: 'Analista de Dados',
    company: 'Veeva Systems',
    ptCompany: 'Veeva Systems',
    logo: '/VeevaLogo.png',
    location: 'Remote',
    ptLocation: 'Remoto',
    duration: 'May 2024 - May 2026',
    ptDuration: 'Maio 2024 - Maio 2026',
    description:
      'Worked with collecting, processing and validating data regarding life sciences industries, such as hospitals, healthcare and pharmaceuticals.',
    ptDescription:
      'Atuei na coleta, no processamento e na validação de dados relacionados a setores de ciências da vida, como hospitais, assistência à saúde e indústria farmacêutica.',
    technologies: ['Python', 'SQL', 'R', 'Tableau', 'Power B.I'],
    achievements: [
      'Integral to the team of primary research.',
      'Built automated data cleaning systems to facilitate with data visualization.',
    ],
    ptAchievements: [
      'Parte integrante da equipe de pesquisa primária',
      'Desenvolveu sistemas automatizados de limpeza de dados para facilitar na visualização de dados.',
    ],
    type: 'work',
    ptType: 'trabalho',
  },
  {
    id: 4,
    title: "Computer Systems - Master's Degree",
    ptTitle: 'Mestrado em Sistemas de Computadores',
    company: 'University of Brasília (UnB)',
    ptCompany: 'Universidade de Brasília (UnB)',
    logo: '/UnbLogo.png',
    location: 'Brasília - DF, Brazil',
    ptLocation: 'Brasília - DF',
    duration: 'January 2020 - December 2023',
    ptDuration: 'Janeiro 2020 - Dezembro 2023',
    description:
      'Continued working on my thesis related to vehicular networks, improving on the previous system.',
    ptDescription:
      'Continuei trabalhando na minha tese sobre redes veiculares, aprimorando o sistema anterior.',
    technologies: ['Python', 'C++', 'R', 'VHDL', 'LaTeX'],
    achievements: ['Successfully published articles in international conferences and journals.'],
    ptAchievements: ['Publicou artigos com sucesso em conferências e periódicos internacionais.'],
    type: 'education',
    ptType: 'educação',
  },
  {
    id: 3,
    title: 'Associate Researcher',
    ptTitle: 'Pesquisador Associado',
    company: 'Foundation for Scientific and Technological Enterprises (FINATEC)',
    ptCompany: 'Fundação de Empreendimentos Científicos e Tecnológicos (FINATEC)',
    logo: '/FinatecLogo.png',
    location: 'Brasília - DF, Brazil',
    ptLocation: 'Brasília - DF',
    duration: 'September 2019 - February 2022',
    ptDuration: 'Setembro 2019 - Fevereiro 2022',
    description:
      'I worked with other researchers and professors to learn about and implement Software-Defined Networking (SDN) in the P4Sec project: Securing Networks in the Era of the Programmable Data Plane.',
    ptDescription:
      'Trabalhei com outros pesquisadores e professores para aprender e implementar Redes Definidas por Software (SDN) no projeto P4Sec: Protegendo Redes na Era do Plano de Dados Programável.',
    technologies: ['Linux CLI', 'Python', 'Bash', 'Network Protocols', 'Wireshark', 'LaTeX'],
    achievements: [
      'I assisted with data collection and processing using Python and R.',
      'Writing scientific articles using LaTeX.',
    ],
    ptAchievements: [
      'Auxiliei na coleta e no processamento de dados utilizando Python e R.',
      'Redação de artigos científicos utilizando LaTeX.',
    ],
    type: 'work',
    ptType: 'trabalho',
  },
  {
    id: 2,
    title: 'Web Development Intern',
    ptTitle: 'Estágio em Desenvolvimento Web',
    company: 'University of Brasília (UnB)',
    ptCompany: 'Universidade de Brasília (UnB)',
    logo: '/UnbLogo.png',
    location: 'Brasília - DF, Brazil',
    ptLocation: 'Brasília - DF',
    duration: 'August 2016 - July 2017',
    ptDuration: 'Agosto 2016 - Julho 2017',
    description:
      'Worked along other interns to develop UnBAlerta, a website and Android app that uses Django/Python/REST APIs and other technologies. The goal of the app was to alert users about dangerous situations in the campus of the University of Brasília (UnB).',
    ptDescription:
      'Trabalhei com outros estagiários no desenvolvimento do UnBAlerta, um site e aplicativo para Android que utiliza Django, Python, APIs REST e outras tecnologias. O objetivo do aplicativo era alertar os usuários sobre situações de perigo no campus da Universidade de Brasília (UnB).',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'RESTful APIs'],
    achievements: [
      'Created a REST API so that the website and app could interact.',
      'Collaborated with a team of 8 researchers to develop an application to aid students in the campus.',
    ],
    ptAchievements: [
      'Criei uma API REST para que o site e o aplicativo pudessem interagir.',
      'Colaborei com uma equipe de 8 pesquisadores para desenvolver um aplicativo de apoio aos estudantes no campus.',
    ],
    type: 'internship',
    ptType: 'estágio',
  },
  {
    id: 1,
    title: "Computer Science - Bachelor's Degree",
    ptTitle: 'Bacharel em Ciência da Computação',
    company: 'University of Brasília (UnB)',
    ptCompany: 'Universidade de Brasília (UnB)',
    logo: '/UnbLogo.png',
    location: 'Brasília - DF, Brazil',
    ptLocation: 'Brasília - DF',
    duration: 'August 2013 - December 2019',
    ptDuration: 'Agosto 2013 - Dezembro 2019',
    description:
      'My final thesis had a focus on computer networks, in specific, vehicular networks. The goal was to ensure reliable message transmission between vehicles even in scenarios where the road might be congested.',
    ptDescription:
      'Meu trabalho de conclusão de curso teve como foco redes de computadores, especificamente redes veiculares. O objetivo era garantir a transmissão confiável de mensagens entre veículos, mesmo em cenários de possível congestionamento na via.',
    technologies: [
      'C',
      'C++',
      'Python',
      'R',
      'JavaScript',
      'Scala',
      'php',
      'Pascal',
      'Assembly',
      'LaTeX',
    ],
    achievements: [
      'Successfully published articles in international conferences and journals.',
      'Internship in web development that helped aid campus safety.',
      'Teacher aid for the following classes: Digital Circuits, Software Engineering and Software Quality.',
    ],
    ptAchievements: [
      'Publicação bem-sucedida de artigos em conferências e periódicos internacionais.',
      'Estágio em desenvolvimento web que contribuiu para a segurança do campus.',
      'Monitoria nas seguintes disciplinas: Circuitos Digitais, Engenharia de Software e Qualidade de Software.',
    ],
    type: 'education',
    ptType: 'educação',
  },
];
