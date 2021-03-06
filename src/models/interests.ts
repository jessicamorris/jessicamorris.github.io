import { SvgIconComponent } from "@material-ui/icons";
import GitHub from "@material-ui/icons/GitHub";
import Instagram from "@material-ui/icons/Instagram";
import PetsIcon from "@material-ui/icons/Pets";
import Twitter from "@material-ui/icons/Twitter";

export enum InterestCategory {
  All = "All",
  Software = "Software",
  Hobbies = "Hobbies",
  Causes = "Causes"
}

export default interface Interest {
  name: string;
  description: string;
  category: InterestCategory;
  buttonLink: string;
  buttonIcon: SvgIconComponent;
  buttonLabel: string;
}

export const interests: Interest[] = [
  {
    name: "Threat Hunting",
    description: "lorem ipsum",
    category: InterestCategory.Software,
    buttonLink: "",
    buttonIcon: GitHub,
    buttonLabel: "Code"
  },
  {
    name: "Baking",
    description: "lorem ipsum",
    category: InterestCategory.Hobbies,
    buttonLink: "",
    buttonIcon: Instagram,
    buttonLabel: "Photos on Instagram"
  },
  {
    name: "2SLGBTQIA+ rights and issues",
    description: "lorem ipsum",
    category: InterestCategory.Causes,
    buttonLink: "",
    buttonIcon: GitHub,
    buttonLabel: "Resources"
  },
  {
    name: "Women & Gender Equality",
    description: "lorem ipsum",
    category: InterestCategory.Causes,
    buttonLink: "https://twitter.com/cse_cst/status/1235305283246862336",
    buttonIcon: Twitter,
    buttonLabel: "Quotation"
  },
  {
    name: "Animal Welfare",
    description: "lorem ipsum",
    category: InterestCategory.Hobbies,
    buttonLink: "https://my.embarkvet.com/dog/pepper566",
    buttonIcon: PetsIcon,
    buttonLabel: "Pepper's DNA test"
  },
  {
    name: "Mechanical Keyboards",
    description: "lorem ipsum",
    category: InterestCategory.Hobbies,
    buttonLink: "",
    buttonIcon: Instagram,
    buttonLabel: "Photos on Instagram"
  },
  {
    name: "Hackathons",
    description: "lorem ipsum",
    category: InterestCategory.Software,
    buttonLink: "",
    buttonIcon: GitHub,
    buttonLabel: "Event Home Page"
  },
  {
    name: "Mental Health",
    description: "lorem ipsum",
    category: InterestCategory.Causes,
    buttonLink: "",
    buttonIcon: GitHub,
    buttonLabel: "Resources"
  }
];
