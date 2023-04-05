import { UserCredentials } from "../hooks/types";
import { UserState, UserStructure } from "../store/features/types";

export const username = "Pet";
export const email = "pet@petalert.com";
const password = `${process.env.TEST_PASSWORD}`;
const token = "mockedToken";

export const mockedUserCredentials: UserCredentials = {
  email,
  password,
};

export const mockedUserStructure: UserStructure = {
  username,
  email,
  token,
};

export const mockedUserInitialState: UserState = {
  username: "",
  email: "",
  token: "",
  isLogged: false,
};

export const mockedUserUnlogged: UserState = {
  username,
  email,
  token,
  isLogged: false,
};

export const mockedUserLogged: UserState = {
  username,
  email,
  token,
  isLogged: true,
};

export const mockedUserState = {
  user: { ...mockedUserLogged },
};
