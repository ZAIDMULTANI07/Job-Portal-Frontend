import { Dispatch, SetStateAction } from "react";

export interface IUser {
  email: string;
  name: string;
  skills: string;
  userRole: boolean | number;
  createdAt: string;
  id: string;
  token: string;
}

export interface IContextType {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser|null>>;
}
export interface IJobs {
  location: string;
  title: string;
  description: string;
  id: string;
}
export interface IOneJob {
  name: string;
  title: string;
  email: string;
  id: string;
  skills: string;
}
