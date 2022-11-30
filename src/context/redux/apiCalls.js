import {
  loginFailure,
  loginStart,
  loginSucess,
  registerFailure,
  registerStart,
  registerSucess,
  logoutSuccess,
} from "./userRedux";
import { publicRequest } from "../../services/requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSucess(res.data));
  } catch (err) {
    dispatch(loginFailure([err]));
    console.log(err);
    return;
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSucess(res.data));
  } catch (err) {
    dispatch(registerFailure([err]));
    console.log(err);
    return;
  }
};

export const logout = async (dispatch) => {
  try {
    dispatch(logoutSuccess());
  } catch (err) {}
};
