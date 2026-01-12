
export interface Project {
  title: string;
  description: string;
  details: string;
  category: string;
  image: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Activity {
  title: string;
  description: string;
  tag: string;
}

export interface Stat {
  label: string;
  value: string;
}
