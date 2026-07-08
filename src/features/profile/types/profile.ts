export type ProfileProject = {
  title: string;
  company: string;
  type: string;
  year: string;
  status: string;
  description: string;
};

export type ProfileLink = {
  label: string;
  href: string;
};

export type ProfileSkill = {
  name: string;
  description: string;
};

export type Profile = {
  name: string;
  role: string;
  email: string;
  phone: string;
  summary: string;
  highlights: string[];
  about: string[];
  skills: ProfileSkill[];
  projects: ProfileProject[];
  socials: ProfileLink[];
};
