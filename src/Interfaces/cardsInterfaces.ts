export interface IApplicants {
  name: string;
  email: string;
  skills: string;
  title: string;
}
export interface IHomePage {
  title: string;
  location: string;
  description: string;
  active: any;
  btnName: string;
}
export interface ILandingPage {
  title1: string;
  title2: string;
  description: string;
}

export interface IPagination {
  totalPages: number;
  page: number;
  active: any;
}

export interface IBackground {
  height: string;
  name: string;
  display: boolean;
}