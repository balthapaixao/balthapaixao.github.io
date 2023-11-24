/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Balthazar Paixão",
  logo_name: "Baltha Paixao",
  nickname: null,
  subTitle:
    "I am Balthazar Paixao, commonly known by the nickname of balthapaixao. I am a Data Engineer with a background in Computer Science and a passion for data-driven solutions.",
  resumeLink:
    "https://docs.google.com/document/d/1N-wLhxMuO8XPrB1_Bgmmj0azx2fszVM2d0p2v_ty9R0/edit?usp=sharing",
  portfolio_repository: "https://github.com/balthapaixao",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/balthapaixao",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/balthapaixao/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link:
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=balthazarpaixao@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hello",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building end-to-end data pipelines",
        "⚡ Developing data pipelines using Airflow",
        "⚡ Implementing secure access to database",
        "⚡ Creating data models for data warehouse",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "tabler:file-type-sql",
          style: {
            color: "#626262",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "devicon:r",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "logos:airflow-icon",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "PySpark",
          fontAwesomeClassname: "logos:apache-spark",
          style: {
            color: "#7749bd",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            color: "#953dac",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "skill-icons:gcp-light",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Postgres",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#3178c6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "DBT",
          fontAwesomeClassname: "logos:dbt",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "logos:terraform-icon",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "devicon-plain:rust",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data engineering", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "80%",
    },
    {
      Stack: "MLOps",
      progressPercentage: "70%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python",
      progressPercentage: "90%",
    },
    {
      Stack: "R",
      progressPercentage: "70%",
    },
    {
      Stack: "SQL",
      progressPercentage: "80%",
    },
    {
      Stack: "Spark",
      progressPercentage: "70%",
    },
    {
      Stack: "Rust",
      progressPercentage: "30%",
    },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Git",
      progressPercentage: "80%",
    },
    {
      Stack: "AWS", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Docker",
      progressPercentage: "80%",
    },
    {
      Stack: "Visual Studio Code",
      progressPercentage: "95%",
    },
    {
      Stack: "Postgres",
      progressPercentage: "80%",
    },
    {
      Stack: "MySQL",
      progressPercentage: "80%",
    },
    {
      Stack: "DBT",
      progressPercentage: "60%",
    },
    {
      Stack: "MongoDB",
      progressPercentage: "60%",
    },
    {
      Stack: "Terraform",
      progressPercentage: "60%",
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "tabler:brand-leetcode",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://leetcode.com/balthapaixao/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "la:hackerrank",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.hackerrank.com/profile/balthapaixao",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Federal Center for Technological Education 'Celso Suckow da Fonseca'",
      subtitle: "Master's Degree in Computer Science",
      logo_path: "cefet_logovert_azul.png",
      //alt_name: "IIITDM Kurnool",
      duration: "September 2023 - September 2025",
      //cgpa: "3.855 / 4.00",
      descriptions: [
        "⚡ My studies are focused on Analysis of Complex Networks metrics in Football/Soccer",
        "⚡ I've been also doing Machine Learning and Data Engineering Courses.",
      ],
      website_link: "https://www.cefet-rj.br/",
    },
    {
      title:
        "Federal Center for Technological Education 'Celso Suckow da Fonseca'",
      subtitle: "B.Sc. in Computer Science",
      logo_path: "cefet_logovert_azul.png",
      //alt_name: "IIITDM Kurnool",
      duration: "March 2018 - January 2023",
      //cgpa: "3.855 / 4.00",
      descriptions: [
        "⚡ My Undergraduate thesis was about detecting events in timeseries",
        "⚡ I participated in Researches about timeseries in health data and sports",
      ],
      website_link: "https://www.cefet-rj.br/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning for Health Predictions",
      subtitle: "- Alexandre Chiavegatto, PhD",
      logo_path: "USP.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1GfOP2xBukx6MIuMTNts_AcD2MX41-lj7/view?usp=drive_link",
      alt_name: "USP",
      color_code: "white",
    },
    {
      title: "The Data Scientist's Toolbox",
      subtitle: "- Roger D. Peng, PhD",
      logo_path: "jhu-logo.jpg",
      certificate_link:
        "https://coursera.org/share/b8f10dab3a80b5fee7327a1139ed8965",
      alt_name: "Johns Hopkins University",
      color_code: "#2A73CC",
    },
    {
      title: "End-to-End Machine Learning with TensorFlow on Google Cloud",
      subtitle: "- Google Cloud",
      logo_path: "googlecloud-logo.png",
      certificate_link:
        "https://coursera.org/share/4cdf31063ecf5e1d5ddcecff5ca2db7c",
      alt_name: "Google Cloud",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "Fullstack Developer with 2+ years of experience working with React, .Net and NodeJs in an agile environment. Experience in leading a 5 member frontend team to achieve concrete goals on a strict deadline in a large scale project consisting over millions of records of drivers all throughout North America.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Data Engineer",
          company: "Platform of Data Science Applied to Health - Fiocruz.",
          company_url: "https://pcdas.icict.fiocruz.br/",
          logo_path: "pcdas-logo.png",
          duration: "January 2021 - PRESENT",
          location: "Rio de Janeiro, RJ, Brazil",
          description: "...",
          features: ["- ..."],
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure. Stil trying to gain experience by trying my hands on different projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "balthapaixao.png",
    description:
      "I am available on LinkedIn and email. You can message me, I will reply within 24 hours. I can help you with Basic Programming, ML, Data Science, Data Engineer, and Cloud Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Rio de Janeiro, Brasil",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/1GBkBVCtgyzhQGV19",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
