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
    id: 5,
    title: 'Data Analyst',
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
    id: 4,
    title: "Computer Systems - Master's Degree",
    company: 'UnB',
    logo: '/UnbLogo.png',
    location: 'Brasília - DF, Brazil',
    duration: 'January 2020 - December 2023',
    description:
      'Continued working on my thesis related to vehicular networks, improving on the previous system.',
    technologies: ['Python', 'C++', 'R', 'VHDL', 'LaTeX'],
    achievements: ['Successfully published articles in international conferences and journals.'],
    type: 'education',
  },
  {
    id: 3,
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
    id: 2,
    title: 'Web Development Intern',
    company: 'UnB',
    logo: '/UnbLogo.png',
    location: 'Brasília - DF, Brazil',
    duration: 'August 2016 - July 2017',
    description:
      'Worked along other interns to develop UnBAlerta, a website and Android app that uses Django/Python/REST APIs and other technologies. The goal of the app was to alert users about dangerous situations in the campus of the University of Brasília (UnB).',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Django',
      'Android Development',
      'RESTful APIs',
    ],
    achievements: [
      'Created a REST API so that the website and app could interact.',
      'Collaborated with a team of 8 researchers to develop an application to aid students in the campus.',
    ],
    type: 'internship',
  },
  {
    id: 1,
    title: "Computer Science - Bachelor's Degree",
    company: 'UnB',
    logo: '/UnbLogo.png',
    location: 'Brasília - DF, Brazil',
    duration: 'August 2013 - December 2019',
    description:
      'My final thesis had a focus on computer networks, in specific, vehicular networks. The goal was to ensure reliable message transmission between vehicles even in scenarios where the road might be congested.',
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
    type: 'education',
  },
];
