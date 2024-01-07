import { Credentials } from "./credentials";

export interface User extends Credentials {
  id: string;
  creationDate: Date;
}