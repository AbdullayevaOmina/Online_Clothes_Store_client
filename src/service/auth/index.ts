import request from "../config";
import { Request } from "@register-interfaces";

const register: Request = {
  signup: (data) => request.post("/register", data),
  verify: (data) => request.post(`/verify?email=${data.email}&otp=${data.otp}`),
  createUser: (data) => request.post("/user", data),
  signin: (data) => request.post("/login", data),

  // ==================================================
  //   signin: (data) => request.post("v1/login", data),
  //   signin2: (id) => request.post(`/v1/user/${id}`),
  //   signup: (data) => request.post("/v1/register", data),
  //   verify: (data) =>
  //     request.post(`v1/verify?email=${data.email}&otp=${data.otp}
  // `),
};

export default register;
