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

export enum SkillCategory {
  All = "All",
  Programming = "Programming",
  Infrastructure = "Infrastructure",
  SoftSkills = "Soft Skills"
}

export default interface Skill {
  name: string;
  description: string;
  category: SkillCategory;
  icon?: React.FC;
}

export const skills: Skill[] = [
  {
    name: "Python",
    description: "Flask/uWSGI, FastAPI, somthing else",
    category: SkillCategory.Programming,
    icon: PythonIcon
  },
  {
    name: "Cloud Platforms",
    description: "Azure, AWS",
    category: SkillCategory.Infrastructure,
    icon: CloudIcon
  },
  {
    name: "React",
    description: "lorem ipseum",
    category: SkillCategory.Programming,
    icon: ReactLogo
  },
  {
    name: "Databases",
    description: "MongoDB, SQLite, ELK",
    category: SkillCategory.Infrastructure,
    icon: DatabasesIcon
  },
  {
    name: "Systems Administration",
    description: "good at Linux",
    category: SkillCategory.Infrastructure,
    icon: LinuxLogo
  },
  {
    name: "Scrum",
    description: "lorem ipseum",
    category: SkillCategory.SoftSkills,
    icon: ScrumIcon
  },
  {
    name: "Documentation",
    description: "Confluence, Swagger, ",
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
    description: "lorem ipseum",
    category: SkillCategory.Programming,
    icon: JavaLogo
  },
  {
    name: "nginx",
    description: "lorem ipseum",
    category: SkillCategory.Infrastructure,
    icon: NginxIcon
  },
  {
    name: "Angular",
    description: "lorem ipseum",
    category: SkillCategory.Programming,
    icon: AngularLogo
  },
  {
    name: "Project Management",
    description: "lorem ipseum",
    category: SkillCategory.Programming,
    icon: ProjectManagementLogo
  }
];
