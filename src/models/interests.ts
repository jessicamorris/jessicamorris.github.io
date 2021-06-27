export enum InterestCategory {
  All = "All",
  Cyber = "Cyber",
  Hobbies = "Hobbies",
  Causes = "Causes"
}

export default interface Interest {
  name: string;
  description: string;
  category: InterestCategory;
}

export const interests: Interest[] = [
  {
    name: "Threat Hunting",
    description: "lorem ipsum",
    category: InterestCategory.Cyber
  },
  {
    name: "Baking",
    description: "lorem ipsum",
    category: InterestCategory.Hobbies
  },
  {
    name: "2SLGBTQIA+ rights and issues",
    description: "lorem ipsum",
    category: InterestCategory.Causes
  },
  {
    name: "Social Justice",
    description: "lorem ipsum",
    category: InterestCategory.Causes
  },
  {
    name: "Animal Welfare",
    description: "lorem ipsum",
    category: InterestCategory.Hobbies
  },
  {
    name: "Mechanical Keyboards",
    description: "lorem ipsum",
    category: InterestCategory.Hobbies
  },
  {
    name: "Hackathons",
    description: "lorem ipsum",
    category: InterestCategory.Cyber
  },
  {
    name: "Mental Health",
    description: "lorem ipsum",
    category: InterestCategory.Causes
  }
];
