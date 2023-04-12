import { useAppDispatch } from "../../store/hooks";
import { useCallback } from "react";
import { CustomJwtPayload } from "../types";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { username, email }: CustomJwtPayload = decodeToken(token);

      dispatch(loginUserActionCreator({ username, email, token }));
    }
  }, [dispatch]);

  return { getToken };
};

export default useToken;
