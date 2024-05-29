// --------- Authorization  -------------

import { ReactNode } from "react";

export interface Signin {
  email: string;
  password: string;
}

export interface Signup extends Signin {
  first_name: string;
  gender: string;
  last_name: string;
}

export interface ResetPassword {
  email?: string;
  phone?: string | number;
}

export interface RegisterStore {
  data: any[];
  signin: Signin;
  signup: Signup;
  isLoading: boolean;
}

export interface Request {
  signin: (data: Signin) => unknown;
  signup: (data: Signup) => unknown;
}

// ------------- React Tsx , JSX Elmenets -------------
export interface propType {
  children: ReactNode;
}
