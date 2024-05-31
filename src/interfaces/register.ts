import { ReactNode } from "react";
// ------------- React Tsx , JSX Elmenets -------------
export interface propType {
  children: ReactNode;
}

// --------- Authorization  -------------
export interface Signin {
  email: string;
  password: string;
}

export interface Signup extends Signin {
  first_name: string;
  last_name: string;
  gender: string;
}

export interface ResetPassword {
  email?: string;
  phone?: string | number;
}

export interface Verify {
  email: string;
  otp: string;
}

export interface RegisterStore {
  data: any[];
  isLoading: boolean;
  signin: (data: Signin) => Promise<any>;
  signup: (data: Signup) => Promise<any>;
  verify: (data: Verify) => Promise<any>;
}

export interface Request {
  signup: (data: Signup) => any;
  verify: (data: Verify) => any;
  createUser: (data: Signup) => any;
  signin: (data: Signin) => any;

  // reset:(data:ResetPassword)=>void
}

// ------------------------------------
