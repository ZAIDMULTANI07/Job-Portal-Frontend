
import { createContext } from "react";
import { IContextType } from "../Interfaces/featuresInterface";

export const UserContext = createContext<IContextType>({
  user: {
    email: "",
    name: "",
    skills: "",
    userRole: 0,
    createdAt: "",
    id: "",
    token: "",
  },
  setUser: () => {},
});
