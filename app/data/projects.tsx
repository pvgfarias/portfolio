export interface Project {
  id: number;
  title: string;
  description: string;
  ptDescription: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  hasDemo?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'MusiCritics',
    description:
      'Musicritics is a Next.js web app (deployed at musicritics.vercel.app) for writing and browsing music reviews/ratings. It uses Prisma for its database layer, along with a components/lib structure typical of a modern React app using shadcn-style UI components.',
    ptDescription:
      'MusiCritics é uma aplicação web em Next.js (implantada em musicritics.vercel.app) para escrever e navegar por resenhas/avaliações de música. Utiliza Prisma como camada de banco de dados, além de uma estrutura de feature-driven típica de uma aplicação React moderna com componentes de UI no estilo shadcn.',
    image: '/musicritics.png',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Neon', 'React'],
    liveUrl: 'https://musicritics.vercel.app/',
    githubUrl: 'https://github.com/pvgfarias/musicritics',
  },
];
