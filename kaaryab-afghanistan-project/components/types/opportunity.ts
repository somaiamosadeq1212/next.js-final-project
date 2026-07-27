export interface Opportunity {
  id: number;

  title: string;

  organization: string;

  location: string;

  category: string;

  type: string;

  salary: string;

  deadline: string;

  posted: string;

  experience: string;

  email: string;

  image?: string;

  featured?: boolean;

  applyUrl: string;

  tags?: string[];

  requirements: string[];

  description: string;
  status?: string;
}