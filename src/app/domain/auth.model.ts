import { User } from "./user.model";
export interface Auth{
  user?: User;
  userId?: String;
  token?: string;
  err?: Err;
}
