export default interface Experience {
  title: string;
  employer: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string;
}

export const experiences: Experience[] = [
  {
    title: "Software Systems Developer",
    employer: "Canadian Center for Cyber Security",
    companyLink: "https://cyber.gc.ca/",
    startDate: "June 2017",
    endDate: "present",
    location: "Ottawa, ON",
    responsibilities: `
      <ul>
        <li><strong>2019 - present Sensor Health & Well-Being team:</strong>
          <ul>
            <li>Maintaining & improving <a href="https://www.countermeasure.ca/presentations/observationdeck/" target="_blank" rel="noopener">ObservationDeck</a>, a web interface for automated reports derived from Host-Based Sensor data.</li>
            <li>Designed & implemented automation for transferring ObservationDeck code & data across classification systems.</li>
            <li>Developing microservices for enriching ObservationDeck data.</li>
          </ul>
        </li>
        <li><strong>2018 - 2019 Host-Based Sensor Agent team:</strong>
          <ul>
            <li>Updated the browser module I'd developed as a co-op student.</li>
            <li>Co-developed an integration testing driver for the agent, written in Python and C.</li>
          </ul>
        </li>
        <li><strong>2017 - 2018 PALADIN (Data Sharing) team:</strong>
          <ul>
            <li>Developed a data translation module for ingesting STIX (Structured Threat Information eXpression) 1.x-structured information.</li>
            <li>Designed & led a team of 3 developers to implement a web interface for viewing Cyber Knowledge Base data, written in Angular.</li>
            <li>Onboarded new employees, contractors, and co-op students.</li>
          </ul>
        </li>
      </ul>`
  },
  {
    title: "Teaching Assistant - SYSC 2100: Algorithms and Data Structures",
    employer: "Carleton University",
    companyLink: "https://www.sce.carleton.ca/courses/sysc-2100/",
    startDate: "May 2017",
    endDate: "January 2017",
    location: "Ottawa, ON",
    responsibilities: `
      <ul>
        <li>Graded assignments on abstract data types, Big-O notation, and fundamental algorithms (sorting, finding, tree traversal).</li>
        <li>Oversaw twice-weekly laboratory sessions to assist students with assignments and questions about course material.</li>
        <li>Proctored course midterm.</li>
      </ul>`
  },
  {
    title: "PASS Facilitator - SYSC 2001: Computer Systems Foundations",
    employer: "Carleton University",
    companyLink: "https://www.sce.carleton.ca/courses/sysc-2001/",
    startDate: "September 2016",
    endDate: "December 2016",
    location: "Ottawa, ON",
    responsibilities: `
      <ul>
        <li>Planned and facilitated two weekly, engaging workshops (with worksheets) for students in x86 assembly.</li>
        <li>Held an office hour once a week to assist students with questions. Held additional office hours during midterm & exam time.</li>
        <li>Participated in weekly team meetings to give feedback on teammates' workshops.</li>
        <li>Designed mock midterms and exams.</li>
      </ul>`
  },
  {
    title: "Co-op Student - Infrastructure Automation",
    employer: "Communications Security Establishment",
    companyLink: "https://www.cse-cst.gc.ca/",
    startDate: "May 2016",
    endDate: "June 2017",
    location: "Ottawa, ON",
    responsibilities: `
      <ul>
        <li>Designed & implemented a multi-threaded CentOS repository mirroring service using Python. Service included features such as throttling detection, disk status, and pinging for status.</li>
        <li>Wrote a tool to download specific versions of Android binaries, using several emulators and Python.</li>
      </ul>`
  },
  {
    title: "Co-op Student - Reverse Engineering & Vulnerability Research",
    employer: "Royal Canadian Mounted Police",
    companyLink: "https://www.rcmp-grc.gc.ca/",
    startDate: "January 2016",
    endDate: "April 2016",
    location: "Ottawa, ON",
    responsibilities: `
      <ul>
        <li>Developed a front-end testing suite for a web application, using Python and Selenium.</li>
        <li>Tested and reported results for a second-party tool.</li>
        <li>Reverse-engineered part of an Android daemon using <a href="https://ghidra-sre.org/" target="_blank" rel="noopener">Ghidra</a>.</li>
      </ul>`
  },
  {
    title: "Co-op Student - Host-Based Sensor Agent",
    employer: "Communications Security Establishment",
    companyLink: "https://www.cse-cst.gc.ca/",
    startDate: "September 2015",
    endDate: "December 2015",
    location: "Ottawa, ON",
    responsibilities: `
      <ul>
        <li>Wrote a plugin for the agent to detect installed & running web browsers on a device. This could detect standard installations, per-user installations, and portable executables.</li>
      </ul>`
  },
  {
    title: "Engineering Scholar - Elsie MacGill Learning Centre",
    employer: "Carleton University",
    companyLink: "https://carleton.ca/engineering-design/emlc/",
    startDate: "January 2015",
    endDate: "August 2015",
    location: "Ottawa, ON",
    responsibilities: `
      <ul>
        <li>Provided academic instruction in first-year mathematics, physics, and programming.</li>
        <li>Facilitated impromptu group problem-solving sessions when several students were working on the same problem.</li>
      </ul>`
  },
  {
    title: "Co-op Student - Quality Assurance Automation",
    employer: "Kinaxis Inc.",
    companyLink: "https://www.kinaxis.com/",
    startDate: "May 2014",
    endDate: "December 2014",
    location: "Ottawa, ON",
    responsibilities: `
      <ul>
        <li>Used HP Quicktest Professional and VBScript to automate manual testing scenarios.</li>
        <li>Managed testing suites with HP Quality Centre.</li>
        <li>Designed a tool, written in Java, for checking changes in the QA Automation team's central object repository, as SVN wasn't tracking changes properly.</li>
      </ul>`
  },
  {
    title: "PASS Facilitator - SYSC2004: Object-Oriented Software Development",
    employer: "Carleton University",
    companyLink: "https://www.sce.carleton.ca/courses/sysc-2004/",
    startDate: "January 2014",
    endDate: "April 2014",
    location: "Ottawa, ON",
    responsibilities: `
      <ul>
        <li>Planned and facilitated two weekly, engaging workshops (with worksheets) for students in introductory-level Java.</li>
        <li>Held an office hour once a week to assist students with questions. Held additional office hours during midterm & exam time.</li>
        <li>Participated in weekly team meetings to give feedback on teammates' workshops.</li>
        <li>Designed mock midterms and exams.</li>
      </ul>`
  }
];
