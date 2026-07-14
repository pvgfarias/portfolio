import { FaCode, FaDatabase } from 'react-icons/fa';
import { FaArrowTrendUp, FaMicrophone } from 'react-icons/fa6';
import { LuGitBranch } from 'react-icons/lu';
import { GiNetworkBars } from 'react-icons/gi';

const skills = [
  {
    category: 'Front-end',
    icon: FaCode,
    color: 'from-blue-500 to-blue-400',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vue.js',
      'Nuxt',
    ],
  },
  {
    category: 'Back-end',
    icon: FaDatabase,
    color: 'from-green-600 to-green-500',
    technologies: [
      'Node.js',
      'Express',
      'Serverless Function',
      'Rest APIs',
      'Prisma',
      'GraphQL',
      'Sequelize',
      'Better Auth',
    ],
  },
  {
    category: 'Data Analysis',
    icon: FaArrowTrendUp,
    color: 'from-yellow-600 to-yellow-500',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'R', 'Tableau', 'Power BI', 'Excel'],
  },
  {
    category: 'Computer Networks & Misc',
    icon: GiNetworkBars,
    color: 'from-gray-500 to-gray-400',
    technologies: ['C', 'C++', 'Python', 'Wireshark', 'Assembly', 'Verilog', 'VHDL', 'Linux CLI'],
  },
  {
    category: 'Tools',
    icon: LuGitBranch,
    color: 'from-red-400 to-red-500',
    technologies: ['Git', 'GitHub', 'VS Code', 'Docker', 'Vercel', 'CI/CD', 'Linux CLI', 'Figma'],
  },
  {
    category: 'Soft Skills',
    icon: FaMicrophone,
    color: 'from-indigo-500 to-indigo-600',
    technologies: [
      'Team Collaboration',
      'Public Speaking',
      'Project Management',
      'Problem Solving',
      'Adaptability',
      'Mentorship',
    ],
  },
];

export default skills;
