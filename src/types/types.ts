import { JwtPayload } from "jsonwebtoken";

export interface UserPayload extends JwtPayload {
  id: number;
}

export interface RequestWithUser {
  user: UserPayload;
}
