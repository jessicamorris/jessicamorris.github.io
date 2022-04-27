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
    title: "Cyber Developer - Report Authoring",
    employer: "Communications Security Establishment",
    companyLink: "https://cse-cst.gc.ca",
    startDate: "December 2021",
    endDate: "present",
    location: "Ottawa, ON",
    responsibilities: `
    <ul>
      <li>Implementing front-end features in Angular, such as support for multi-classification environments, and automated testing using Cypress.</li>
      <li>Working with the Information Management team to pilot our use case for the Digital Vault project, including automation for archiving published reports. CSE's Digital Vault will be the first digital archiving system in the Government of Canada.</li>
    </ul>
    `
  },
  {
    title: "Cyber Developer - ObservationDeck",
    employer: "Canadian Centre for Cyber Security",
    companyLink: "https://cyber.gc.ca/",
    startDate: "October 2019",
    endDate: "November 2021",
    location: "Ottawa, ON",
    responsibilities: `
    <ul>
      <li>Developed features for <a href="https://www.countermeasure.ca/presentations/observationdeck/" target="_blank" rel="noopener">ObservationDeck</a>, an automated cyber defence reporting system for government departments.</li>
      <li>Designed & implemented an automation system for transferring ObservationDeck code & data across classification systems. Received an official award of recognition from management for this system.</li>
      <li>Implemented RESTful microservices for enriching ObservationDeck data. One of my FastAPI-based services is being actively collaborated on with a second party.</li>
      <li>Designed & implemented centralized authorization control and audit logging for supporting microservices using nginx and Lua scripts.</li>
      <li>Implemented the Scrum process for the team, which included:
        <ul>
          <li>Collaborating with Product Owner and Supervisor on designing processes for Sprint planning, managing tasks, and release management.</li>
          <li>Documenting the new processes for all members of the Scrum team on easy-to-reference Confluence pages.</li>
          <li>Coaching the Scrum team on the new processes.</li>
        </ul>    
      </li>
    </ul>
    `
  },
  {
    title: "Cyber Developer - Host-Based Sensor Agent",
    employer: "Canadian Centre for Cyber Security",
    companyLink: "https://cyber.gc.ca/",
    startDate: "June 2018",
    endDate: "September 2019",
    location: "Ottawa, ON",
    responsibilities: `
    <ul>
      <li>Added more use cases to the web browser module I'd developed as a student.</li>
      <li>Co-developed an integration testing driver for the agent, written in Python and C.</li>
      <li>Conducted technical interviews for prospective co-op students and employees.</li>
      <li>Received a 2019 CSE Corporate Award as a member of the Host-Based Sensor group.</li>
    </ul>`
  },
  {
    title: "Cyber Developer - Knowledge Sharing",
    employer: "Communications Security Establishment",
    companyLink: "https://cse-cst.gc.ca",
    startDate: "June 2017",
    endDate: "May 2018",
    location: "Ottawa, ON",
    responsibilities: `
    <ul>
      <li>Developed a data translation module for ingesting STIX (Structured Threat Information eXpression) 1.x-structured information.</li>
      <li>Led a team of 3 developers to deesign & implement a web interface for viewing Cyber Knowledge Base data as a directed graph, written in Angular. This interface has since been productionized and incorporated into the CCCS's Cyber Knowledge Base web application.</li>
      <li>Onboarded new employees, contractors, and co-op students.</li>
    </ul>
    `
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
        <li>Received two "spot awards" for my commitment to my work, and engagement with the community.</li>
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
