export declare interface IProject {
  id: string;
  title: string;
  _count:{
    projects:number
  }
}

export declare interface IResume {
  id: string;
  title: string;
  _count:{
    resumes:number
  }
}

export declare interface LengthRetrieveResponse {
  services: number;
  projects: number;
  partners: number;
  vacancies: number;
  resumes: number;
  project_stats: IProject[];
  resume_stats: IResume[];
}
