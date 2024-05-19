type TTeamMember = {
  name: string;
  role: string;
  contact: string;
};

type TClient = {
  name: string;
  contact: string;
};

type TProject = {
  projectId: string;
  title: string;
  image: string;
  link: string;
  demo: string;
  year: number;
  description: string[];
  technologies: string[];
  category: string[];
  field: string[];
  status: string;
  topProject: boolean;
  team: TTeamMember[];
  duration: string;
  client: TClient;
  goals: string[];
  budget: string;
  resources: string[];
  challenges: string[];
  successMetrics: string[];
  versionControl: {
    repository: string;
    branch: string;
  };
  dependencies: string[];
  impact: string;
  lastStatusUpdate: string;
  version: string;
  documentation: string;
};

export default TProject;
