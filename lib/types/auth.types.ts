import { User } from "./User.types";

export interface RegisterInput {
    email: string;
    password: string;
    name: string
}

export interface RegisterResponse {
    user : User
}

export interface VerifyEmailResponse {
    success: boolean;
    message: string;
  }

  export interface LoginInput {
    email: string;
    password: string;
  }

  export interface LoginResponse {
    user: User;
}

export interface currentUserResponse {
    user: User;
}

  