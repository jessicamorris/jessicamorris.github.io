export default interface Experience {
  title: string;
  employer: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string; // TODO I really shouldn't be putting HTML here lmao
}

export const experiences: Experience[] = [
  {
    title: "Software Engineering Associate - Post-Deployment Verification",
    employer: "Atlassian",
    companyLink: "https://www.atlassian.com/",
    startDate: "August 2024",
    endDate: "present",
    location: "(remote) Ottawa, ON",
    responsibilities: `
    <ul>
      <li>Working on a Golang service that orchestrates hundreds of Docker containers for running post-deployment verification tasks, such as heartbeat monitoring and frontend testing scripts.</li>
      <li>Current project is decomposing the service's monorepo into independent polyrepos to speed up delivery, and enable Safe Release Management.</li>
      <li>Built and maintain the pipeline for sending daily data snapshots to Atlassian's datalake. I've built Databricks dashboards for measuring adoption, and for tracking down out-of-date task configurations.</li>
    </ul>
    `
  },
  {
    title: "Software Engineering Associate - Developer Productivity Services",
    employer: "Atlassian",
    companyLink: "https://www.atlassian.com/",
    startDate: "November 2023",
    endDate: "July 2024",
    location: "(remote) Ottawa, ON",
    responsibilities: `
    <ul>
      <li>Maintained and administered the company's SonarQube instance.</li>
      <ul>
        <li>Planned, tested, and rolled out two major upgrades with minimal downtime and zero data loss.</li>
        <li>Automated resource management and configuration using Terraform and Ansible playbooks.</li>
        <li>Communicating with hundreds of stakeholders about planned downtime and upcoming releases.</li>
        <li>Writing documentation, such as rollout/rollback procedures, post-mortems for incidents, and blog posts announcing major changes.</li>
      </ul>
      <li>Collaborated across teams on a Node service for ingesting all Atlassian repository metadata and CI/CD configurations into the central datalake.</li>
      <li>Worked on metrics and analysis for a new Managed Builds service for standardizing CI/CD practices at Atlassian. My major project was building an 80% accurate "eligibility checker" algorithm to assess how repositories could adopt Managed Builds.</li>
      <li>Mentored the team's summer intern, which included:</li>
      <ul>
        <li>Planning a 3-month project, with allowances for being behind or ahead of schedule.</li>
        <li>Holding weekly one-on-ones and being available for other assistance (unblocking, code reviews, reviewing presentations).</li>
        <li>Ensuring they met their milestones for the Atlassian internship program.</li>
        <li>At the end of their term, they delivered two bugfixes and two minor features.</li>
      </ul>
    </ul>
    `
  },
  {
    title: "Software Engineering Associate - Customer Support Technology",
    employer: "Atlassian",
    companyLink: "https://www.atlassian.com/",
    startDate: "December 2022",
    endDate: "October 2023",
    location: "(remote) Ottawa, ON",
    responsibilities: `
    <ul>
      <li>Back-end development in Java with Spring & Spring Boot, Hibernate, GraphQL, and various tiers of caching (Caffeine, Redis) and data persistence (Postgres).</li>
      <li>Front-end development in React with Atlaskit elements, tests with Jest and Cypress.</li>
      <li>Led a rebranding project, which included representing the engineering team at stakeholder meetings, organizing and facilitating a Bug Bash to test the transition from old to new branding, and tasking the team to address bugs ahead of release day.</li>
      <li>Drove improvements to team culture and engineering processes, such as leading Learning Hours on application security and monthly Developer Productivity reviews.</li>
      <li>Diagnosed performance issues in an event-driven feature using SignalFx (for AWS Cloudwatch and custom metrics) and pgAdmin (for database performance)</li>
    </ul>
    `
  },
  {
    title: "Cyber Developer - Report Authoring",
    employer: "Communications Security Establishment",
    companyLink: "https://cse-cst.gc.ca",
    startDate: "December 2021",
    endDate: "July 2022",
    location: "Ottawa, ON",
    responsibilities: `
    <ul>
      <li>Implemented front-end features in Angular, such as support for multi-classification environments, and automated testing using Cypress.</li>
      <li>Worked with the Information Management team to pilot a use case for the Digital Vault project, automation for archiving published reports. CSE's Digital Vault will be the first fully automated digital archiving system in the Government of Canada.</li>
      <li>Diagnosed bugs with end users and made live corrections in the database when necessary, and wrote comprehensive bug reports </li>
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
