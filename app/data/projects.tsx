export interface Project {
  id: number;
  title: string;
  description: string;
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
    title: 'Placeholder 1',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quas nostrum, vel impedit dolores dignissimos fugiat eius aut? Eius, ea. Cumque esse perferendis reiciendis quia possimus accusamus incidunt tenetur culpa!',
    image: '/placeholder-project-1.jpg',
    tags: ['Next.js', 'TypeScript', 'MediaPipe', 'React'],
    liveUrl: 'https://placeholder1.vercel.app/',
    githubUrl: 'https://github.com/pvgfarias/placeholder1',
  },
  {
    id: 2,
    title: 'Placeholder 2',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quas nostrum, vel impedit dolores dignissimos fugiat eius aut? Eius, ea. Cumque esse perferendis reiciendis quia possimus accusamus incidunt tenetur culpa!',
    image: '/placeholder-project-2.jpg',
    tags: ['Next.js', 'TypeScript', 'MediaPipe', 'React'],
    liveUrl: 'https://placeholder2.vercel.app/',
    githubUrl: 'https://github.com/pvgfarias/placeholder2',
  },
  {
    id: 3,
    title: 'Placeholder 3',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quas nostrum, vel impedit dolores dignissimos fugiat eius aut? Eius, ea. Cumque esse perferendis reiciendis quia possimus accusamus incidunt tenetur culpa!',
    image: '/placeholder-project-3.jpg',
    tags: ['Next.js', 'TypeScript', 'MediaPipe', 'React'],
    liveUrl: 'https://placeholder3.vercel.app/',
    githubUrl: 'https://github.com/pvgfarias/placeholder3',
  },
];
