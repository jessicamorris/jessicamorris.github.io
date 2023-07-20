// Images
import {
  PythonIcon,
  JavaLogo,
  LinuxLogo,
  CloudIcon,
  ReactLogo,
  NginxIcon,
  AngularLogo,
  DatabasesIcon,
  DocumentationIcon,
  NetworkingIcon,
  ProjectManagementLogo,
  ScrumIcon
} from "../components/Icons";

// MUI
import { SvgIcon } from "@material-ui/core";

export enum SkillCategory {
  All = "all",
  Programming = "programming",
  Infrastructure = "infrastructure",
  SoftSkills = "softSkills"
}

export default interface Skill {
  name: string;
  description: string;
  category: SkillCategory;
  icon: typeof SvgIcon;
}

export const skills: Skill[] = [
  {
    name: "Python",
    description: "pipenv, Flask, FastAPI, pytest, infrastructure automation",
    category: SkillCategory.Programming,
    icon: PythonIcon
  },
  {
    name: "Cloud Platforms",
    description: "AWS, Microsoft Azure",
    category: SkillCategory.Infrastructure,
    icon: CloudIcon
  },
  {
    name: "React",
    description: "Material UI, Cypress, ag-grid, redux",
    category: SkillCategory.Programming,
    icon: ReactLogo
  },
  {
    name: "Databases",
    description: "MongoDB, SQL (Postgres, SQLite, Oracle), Neo4j",
    category: SkillCategory.Infrastructure,
    icon: DatabasesIcon
  },
  {
    name: "Systems Administration",
    description: "Scripting, troubleshooting, basic networking",
    category: SkillCategory.Infrastructure,
    icon: LinuxLogo
  },
  {
    name: "Scrum",
    description: "Agile coaching, Sprint planning",
    category: SkillCategory.SoftSkills,
    icon: ScrumIcon
  },
  {
    name: "Documentation",
    description: "Confluence, Draw.io, Swagger",
    category: SkillCategory.SoftSkills,
    icon: DocumentationIcon
  },
  {
    name: "Networking",
    description: "Recruitment, relationship-building",
    category: SkillCategory.SoftSkills,
    icon: NetworkingIcon
  },
  {
    name: "Java",
    description: "Spring Boot, JPA/Hibernate, JUnit",
    category: SkillCategory.Programming,
    icon: JavaLogo
  },
  {
    name: "nginx",
    description: "Reverse proxy, API gateway, Lua scripting",
    category: SkillCategory.Infrastructure,
    icon: NginxIcon
  },
  {
    name: "Angular",
    description: "Material UI, Cypress, RxJS",
    category: SkillCategory.Programming,
    icon: AngularLogo
  },
  {
    name: "Project Management",
    description: "Plan & lead small (3-4 devs) team projects",
    category: SkillCategory.SoftSkills,
    icon: ProjectManagementLogo
  }
];
