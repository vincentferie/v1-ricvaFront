import { Timestamps } from ".";

export interface User extends Timestamps {
  id: string;
  civilite: string;
  nom: string;
  prenoms: string;
  email: string;
  contact: string;
  mpass: string;
}

export interface DataToken {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expire_in: number;
  user: User;
}

export interface VerifyData {
  email: string;
  pathRedirectUrl: string;
}

export interface ResetToken {
  aud: string;
  jti: string;
  iat: number;
  nbf: number;
  exp: number;
  sub: string;
  email: string;
  scopes: any[];
}

export interface ResetData {
  password: string;
  password_confirm: string;
  user: string;
}

