export default interface Experience {
  title: string;
  employer: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  location: string;
  //responsibilities: JSX.Element;
}

export const experiences: Experience[] = [
  {
    title: "Software Systems Developer",
    employer: "Canadian Center for Cyber Security",
    companyLink: "https://cyber.gc.ca/",
    startDate: "June 2017",
    endDate: "present",
    location: "Ottawa, ON"
  },
  {
    title: "Teaching Assistant - SYSC 2100: Algorithms and Data Structures",
    employer: "Carleton University",
    companyLink: "https://www.sce.carleton.ca/courses/sysc-2100/",
    startDate: "May 2017",
    endDate: "January 2017",
    location: "Ottawa, ON"
  },
  {
    title: "PASS Facilitator - SYSC 2001: Computer Systems Foundations",
    employer: "Carleton University",
    companyLink: "https://www.sce.carleton.ca/courses/sysc-2001/",
    startDate: "September 2016",
    endDate: "December 2016",
    location: "Ottawa, ON"
  },
  {
    title: "Co-op Student - Infrastructure Automation",
    employer: "Communications Security Establishment",
    companyLink: "https://www.cse-cst.gc.ca/",
    startDate: "May 2016",
    endDate: "June 2017",
    location: "Ottawa, ON"
  },
  {
    title: "Co-op Student - Reverse Engineering & Vulnerability Research",
    employer: "Royal Canadian Mounted Police",
    companyLink: "https://www.rcmp-grc.gc.ca/",
    startDate: "January 2016",
    endDate: "April 2016",
    location: "Ottawa, ON"
  },
  {
    title: "Co-op Student - Host-Based Sensor Program",
    employer: "Communications Security Establishment",
    companyLink: "https://www.cse-cst.gc.ca/",
    startDate: "September 2015",
    endDate: "December 2015",
    location: "Ottawa, ON"
  },
  {
    title: "Engineering Scholar - Elsie MacGill Learning Centre",
    employer: "Carleton University",
    companyLink: "https://carleton.ca/engineering-design/emlc/",
    startDate: "January 2015",
    endDate: "August 2015",
    location: "Ottawa, ON"
  },
  {
    title: "Co-op Student - Quality Assurance Automation",
    employer: "Kinaxis Inc.",
    companyLink: "https://www.kinaxis.com/",
    startDate: "May 2014",
    endDate: "December 2014",
    location: "Ottawa, ON"
  },
  {
    title: "PASS Facilitator - SYSC2004: Object-Oriented Software Development",
    employer: "Carleton University",
    companyLink: "https://www.sce.carleton.ca/courses/sysc-2004/",
    startDate: "January 2014",
    endDate: "April 2014",
    location: "Ottawa, ON"
  }
];
