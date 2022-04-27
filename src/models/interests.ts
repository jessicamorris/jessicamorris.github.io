import { SvgIconComponent } from "@material-ui/icons";
import EventNoteIcon from "@material-ui/icons/EventNote";
import GitHub from "@material-ui/icons/GitHub";
import Instagram from "@material-ui/icons/Instagram";
import PetsIcon from "@material-ui/icons/Pets";
import Reddit from "@material-ui/icons/Reddit";
import Twitter from "@material-ui/icons/Twitter";

import cookies from "../static/images/cookies.jpg";
import keyboard from "../static/images/keyboard.jpg";

export enum InterestCategory {
  All = "all",
  Software = "software",
  Hobbies = "hobbies",
  Causes = "causes"
}

export default interface Interest {
  name: string;
  description: string[];
  category: InterestCategory;
  imagePath?: string;
  buttonLink?: string;
  buttonIcon?: SvgIconComponent;
  buttonLabel?: string;
}

export const interests: Interest[] = [
  {
    name: "Women & Gender Equality",
    description: [
      "",
      "I've spoken at a WoSEC (Women in Security) Montreal panel on <what did I talk about?>."
    ],
    category: InterestCategory.Causes,
    buttonLink: "https://twitter.com/cse_cst/status/1235305283246862336",
    buttonIcon: Twitter,
    buttonLabel: "I'm quotable!"
  },
  {
    name: "Baking",
    description: [
      "I've been baking since I was a teenager, but I wasn't actively honing the craft until the start of the COVID-19 pandemic. Now I'm hoping you'll see me on the Great Canadian Baking Show one day!",
      "Pictured are my vegan chocolate chunk cookies, which taste as good as they look."
    ],
    category: InterestCategory.Hobbies,
    imagePath: cookies
  },
  {
    name: "Hackathons",
    description: [
      "I've been participating in the Canadian Centre for Cyber Security's two annual cyber defence hackathons since 2017 in various roles.",
      "GeekWeek is an unclassified event targeted towards the private sector. I've been a project team lead for three years now, most recently for the Cyber Threat Hunting team where I designed a prototype for a pipeline that analyzes modules in the Python Package Index and scores them on potential maliciousness."
    ],
    category: InterestCategory.Software,
    buttonLink: "https://cyber.gc.ca/en/events/geekweek-75",
    buttonIcon: EventNoteIcon,
    buttonLabel: "GeekWeek Event Page"
  },
  {
    name: "Mechanical Keyboards",
    description: [
      "Everyone needs a weird niche hobby, right?",
      "Mine is building custom computer keyboards! I enjoy playing with colour schemes, and experimenting with modifying the boards and switches. It's like grown-up Legos."
    ],
    category: InterestCategory.Hobbies,
    imagePath: keyboard
  },
  {
    name: "Animal Welfare",
    description: [
      "Rescuing dogs has brought so much joy to my life, and I'm drawn towards the dogs who may not be a great fit for most families. I'm hoping to start fostering palliative care dogs in Fall 2022."
    ],
    category: InterestCategory.Causes,
    buttonLink: "https://embk.me/pepper566",
    buttonIcon: PetsIcon,
    buttonLabel: "My First Dog's DNA Profile"
  }
];
