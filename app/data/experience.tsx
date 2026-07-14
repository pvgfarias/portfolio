export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
  type: 'work' | 'internship' | 'project' | 'education';
  logo?: string;
}
export const experiences: Experience[] = [
  {
    id: 3,
    title: 'Junior Data Analyst',
    company: 'Veeva Systems',
    logo: '/VeevaLogo.png',
    location: 'Remote',
    duration: 'May 2024 - May 2026',
    description:
      'Worked with collecting, processing and validating data regarding life sciences industries, such as hospitals, healthcare and pharmaceuticals.',
    technologies: ['Python', 'SQL', 'R', 'Tableau', 'Power B.I'],
    achievements: [
      'Integral to the team of primary research',
      'Built automated data cleaning systems to facilitate',
    ],
    type: 'work',
  },
  {
    id: 2,
    title: 'Associate Researcher',
    company: 'FINATEC',
    logo: '/FinatecLogo.png',
    location: 'Brasília - DF, Brazil',
    duration: 'September 2019 - February 2022',
    description:
      'Worked along other researchers and professors to learn and deploy Software Defined Networks (SDN) in the project P4Sec: Securing Networks in the Programmable Data Plane Era.',
    technologies: ['Linux CLI', 'Python', 'Bash', 'Network Protocols', 'Wireshark', 'LaTeX'],
    achievements: [
      ' I assisted with data collection and processing using Python and R.',
      'Writing scientific articles using LaTeX.',
    ],
    type: 'work',
  },
  {
    id: 1,
    title: 'Web Development Intern',
    company: 'UnB',
    logo: '/UnbLogo.png',
    location: 'Brasília - DF, Brazil',
    duration: 'August 2016 - July 2017',
    description:
      'Worked along other interns to develop UnBAlerta, a website and Android app that uses Django/Python/REST APIs and other technologies. The goal of the app was to alert users about dangerous situations in the campus of the University of Brasília (UnB).',
    technologies: ['Python', 'Django', 'Android Development', 'RESTful APIs'],
    achievements: [
      'Created a REST API so that the website and app could interact.',
      'Collaborated with a team of 8 researchers to develop an application to aid students in the campus.',
    ],
    type: 'internship',
  },
];
