import request from "../config";
import { Request } from "@products-interface";

export const auth: Request = {
  get_all: (params) => request.get("/v1/products", { params }),
  get: (id) => request.get(`/v1/product/${id}`),
};

export default auth;
