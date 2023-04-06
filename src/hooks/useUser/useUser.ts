import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import { UserCredentials, CustomJwtPayload, LoginResponse } from "../types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { openModalActionCreator } from "../../store/features/uiSlice/uiSlice";

const apiUrl = process.env.REACT_APP_URL!;
const endpoint = "/user/login";

const useUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-type": "application/json" },
      });

      const { token }: LoginResponse = await response.json();

      const { username, email }: CustomJwtPayload = decodeToken(token);

      dispatch(loginUserActionCreator({ username, email, token }));

      localStorage.setItem("token", token);

      navigate("/");

      window.location.reload();
    } catch (error) {
      dispatch(openModalActionCreator({ isOpen: true, isError: true }));
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");

    dispatch(logoutUserActionCreator());

    navigate("/login");

    window.location.reload();
  };

  return { loginUser, logoutUser };
};

export default useUser;
