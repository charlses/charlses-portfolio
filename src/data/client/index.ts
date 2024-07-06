export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Experience', link: '#experience' },
  { name: 'Contact', link: '#contact' }
]

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: ''
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: ''
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: ''
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg'
  },

  {
    id: 5,
    title: 'Currently building a MERN stack blog application',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg'
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: ''
  }
]

export const projects = [
  {
    id: 1,
    title: 'Fun blog api created for beginners',
    des: "An api that is all you need to create a fully functional blog, free to use for everyone and beginner friendly with it's documentation",
    img: '/p2.png',
    iconLists: ['/next.svg', '/ts.svg', '/git.svg', '/mongo.svg', '/tail.svg'],
    link: 'https://davits-api.vercel.app'
  },
  {
    id: 2,
    title: 'A full stack application with kanban boards',
    des: 'Simple and fun application that I built,that allows users to plan-out and manage their projects and tasks',
    img: '/p1.png',
    iconLists: [
      '/next.svg',
      '/tail.svg',
      '/ts.svg',
      '/mongo.svg',
      '/authjs.png',
      '/git.svg'
    ],
    link: 'https://charlses-auth.vercel.com/'
  }
  // {
  //   id: 3,
  //   title: 'AI Image SaaS - Canva Application',
  //   des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
  //   img: '/p3.svg',
  //   iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
  //   link: 'https://github.com/adrianhajdin/ai_saas_app'
  // },
  // {
  //   id: 4,
  //   title: 'Animated Apple Iphone 3D Website',
  //   des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
  //   img: '/p4.svg',
  //   iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
  //   link: 'https://github.com/adrianhajdin/iphone'
  // }
]

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: 'Michael Johnson',
//     title: 'Director of AlphaStream Technologies'
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: 'Michael Johnson',
//     title: 'Director of AlphaStream Technologies'
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: 'Michael Johnson',
//     title: 'Director of AlphaStream Technologies'
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: 'Michael Johnson',
//     title: 'Director of AlphaStream Technologies'
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: 'Michael Johnson',
//     title: 'Director of AlphaStream Technologies'
//   }
// ]

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg'
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg'
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg'
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg'
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg'
  }
]

export const workExperience = [
  {
    id: 1,
    title: 'Freelance Developer, Worldwide',
    desc: "As a freelance developer, I specialize in crafting tailored solutions using Next.js and TailwindCSS. With expertise in building scalable back-end systems using Next.js and MongoDB, I deliver efficient solutions customized to clients' needs. Additionally, I integrate secure authentication features using Next-Auth (now Auth.js) for seamless user authentication and authorization.",
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg'
  },
  {
    id: 2,
    title: 'Work Performance LLC, Stockholm/Sweden',
    desc: 'Developed dynamic UIs with Next.js, TailwindCSS, and MUI, ensuring seamless UX and type-safe code with TypeScript. Built scalable back-end systems using Next.js and MongoDB. Implemented advanced authentication with Next-Auth, utilizing JWT and database sessions.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg'
  },
  {
    id: 3,
    title: 'Work Integration LLC, Stockholm/Sweden',
    desc: 'As a consultant at Mobily Sverige LLC, stationed at Work Integration LLC, I focused on crafting user-centric interfaces using React, HTML, SaaS, Bootstrap, and JavaScript, prioritizing exceptional user experiences. In the back end, I navigated diverse projects, utilizing PHP, PHPMyAdmin, SQL, Node.js, and MongoDB, from simple authentication to comprehensive relational databases.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg'
  },
  {
    id: 4,
    title: 'StarCounter LLC',
    desc: 'As a Software Engineering intern at StarCounter LLC from July 2016 to September 2018 in Stockholm, Sweden, I honed my coding and scripting skills alongside seasoned professionals. During this time, I gained proficiency in languages such as JavaScript, C#, and C++, deepening my understanding of programming fundamentals and its significance in our modern world.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg'
  }
]

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg'
  },
  {
    id: 2,
    img: '/twit.svg'
  },
  {
    id: 3,
    img: '/link.svg'
  }
]
