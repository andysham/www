export const PROFILE = {
  name: "Andrew Shamis",
  role: "Applied ML Research Engineer",
  location: "London, UK",
  email: "andy@sham.dev",
  emails: [
    { address: "andy@sham.dev", note: "Email" },
    { address: "andrew.d.shamis@gmail.com", note: "Email (personal)" },
  ],
  github: "github.com/andysham",
  githubUrl: "https://github.com/andysham",
  linkedin: "linkedin.com/in/andrew-shamis-8a507b17a",
  linkedinUrl: "https://www.linkedin.com/in/andrew-shamis-8a507b17a/",
  topSkills: ["Algorithms", "Machine Learning", "Data Science"],
  summary:
    "I work on applied machine learning for drug design at Isomorphic Labs, building evaluation infrastructure that spans a portfolio of therapeutic programs. Before that I spent three years at QuantCo turning exploratory healthcare research into production inference systems. Oxford MMathCompSci.",
};

export type Role = {
  org: string;
  title: string;
  period: string;
  location: string;
  stack: string[];
  bullets: string[];
};

export const EXPERIENCE: Role[] = [
  {
    org: "Isomorphic Labs",
    title: "Research Engineer, Applied ML",
    period: "Feb 2025 — present",
    location: "London, UK",
    stack: ["Python", "SQL", "JAX"],
    bullets: [
      "Designed and implemented a general pipeline for targeted model evaluations against the portfolio of drug design programs, feeding into the workstreams of several teams.",
      "Acted as ML point of contact for two critical projects collaborating with Eli Lilly, responsible for critical revenue streams for the overall business.",
      "Pushed research on applications of IsoDDE / AlphaFold to novel capabilities in modelling compound behaviour with regards to novel bioactivity mechanisms.",
    ],
  },
  {
    org: "QuantCo",
    title: "Machine Learning Engineer",
    period: "Sep 2022 — Feb 2025",
    location: "London, UK",
    stack: ["Python", "SQL", "Rust"],
    bullets: [
      "Sole engineer involved in launching a new ML product for steering the health outcomes of patients during medical leave.",
      "Worked as one of two engineers within a team of 10 researchers implementing new approaches to survival analysis and diagnostic sequence prediction within the medical domain.",
      "Migrated a 30,000 LoC exploratory ETL, training and evaluation pipeline into a deployable inference product within 3 months.",
      "Designed and implemented a PoC for a distributed analytics environment, including provisioning of worker nodes for horizontally scaled CI/CD and ETL jobs, on tenanted client infrastructure.",
      "Had sole responsibility for the reliability of a medical fraud detection service worth $40 million annually to the client.",
      "Produced highly optimised rewrites of business and model critical code in Rust.",
      "First software engineer in QuantCo's London office, through a period of large growth in the organisation's technical demands.",
    ],
  },
  {
    org: "Jane Street Capital",
    title: "Software Engineering Intern",
    period: "Jun 2021 — Sep 2021",
    location: "London, UK",
    stack: ["OCaml"],
    bullets: [
      "Developed a frontend service for reducing portfolio risk, by more effectively limiting trades performed by proprietary trading strategies on a high frequency client facing private exchange.",
      "Optimised the runtime of a trade settlement system by redesigning it to operate as a pub-sub architecture over a distributed network with Apache Kafka.",
      "Learnt a proprietary dialect of OCaml to a professional standard within a week.",
    ],
  },
  {
    org: "Pallet",
    title: "Full Stack Engineer (Part Time)",
    period: "Sep 2019 — Aug 2020",
    location: "Oxford, UK",
    stack: ["Python", "TypeScript"],
    bullets: [
      "First engineer besides the CTO at a web startup since valued at $100 million, building the early data infrastructure and web client.",
      "Worked directly with the founder to create the first draft of a web frontend for a job searching platform.",
      "Introduced ETL workflows to feed live web data to a novel job search algorithm.",
      "Helped onboard new engineers before returning to my degree.",
      "Contributions to the product helped raise $4 million in the first funding round.",
    ],
  },
];

export const EDUCATION = {
  institution: "Oxford University",
  degree: "MMathCompSci — Master of Mathematics and Computer Science",
  period: "Oct 2018 — Jun 2022",
  courses: [
    { name: "Machine Learning", grade: "74" },
    { name: "Advanced Machine Learning", grade: "73" },
    { name: "Artificial Intelligence", grade: "74" },
    { name: "Algorithms and Data Structures", grade: "70" },
    { name: "Computational Learning Theory", grade: "74" },
    { name: "Computational Game Theory", grade: "73" },
    { name: "Bayesian Statistical Probabilistic Programming", grade: "72" },
    { name: "Quantum Information", grade: "78" },
    { name: "Computer Security", grade: "72" },
  ],
  dissertation: {
    title: "Designing Interpretable Models using Neurosymbolic Methods",
    grade: "81, Distinction",
    bullets: [
      "Developed a novel DL micro-architecture analogous to classical MLPs, designed with structural interpretability.",
      "Linear layers are replaced with Schweizer-Sklar logical operations, which bound the domain to [0, 1] and have provably superior differentiability characteristics to existing solutions.",
      "The proposed class of models can be effectively used for “soft-learning” of complicated binary decision problems. As interpretability is structural, the learnt policy can be expressed as a series of logical implications.",
      "Demonstrated effectiveness at explaining the classification of MNIST images by reducing them to compositions of fundamental image components.",
    ],
  },
};

export type Project = {
  name: string;
  role?: string;
  stack: string[];
  date: string;
  bullets: string[];
};

export const PROJECTS: Project[] = [
  {
    name: "Regex Parser",
    stack: ["Rust"],
    date: "Nov 2020",
    bullets: [
      "Created a macro to parse regular expressions into NDFAs at compile time, to optimise the parsing stage of more sophisticated compilers.",
      "Contains all patterns present in JavaScript's internal RegExp implementation.",
      "Can recognise and isolate sub-expressions, for use in tokenisation.",
    ],
  },
  {
    name: "ParliaMate",
    role: "Co-Founder",
    stack: ["Python", "Android Studio"],
    date: "Nov 2018",
    bullets: [
      "Won the Oxford Hackathon 2019, with an app designed to help with interacting with UK Parliament proceedings.",
      "Produced a service to pull live audio from parliament proceedings, and render annotated subtitles within the app, using the Google Speech-to-Text API.",
      "Won the 'Deloitte API' and 'Google Cloud Compute Platform' challenges.",
    ],
  },
];
