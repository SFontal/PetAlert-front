import { CustomJwtPayload } from "../hooks/types";
import { email, username } from "./user";

export const mockedToken = "mockedToken";

export const mockedTokenPayload: CustomJwtPayload = {
  username,
  email,
};
