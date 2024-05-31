import request from "../config";
import { Request } from "@products-interface";

export const auth: Request = {
  get_all: (params) => request.get("/products", { params }),
  get: (id) => request.get(`/product/${id}`),
};

export default auth;
