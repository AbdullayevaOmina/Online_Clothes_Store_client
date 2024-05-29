import { request } from "../config";
import { Request } from "@register-interfaces";
const register: Request = {
  signin: (data) => request.post("v1/login", data),
  signup: (data) => request.post("/v1/user", data),
};

export default register;
