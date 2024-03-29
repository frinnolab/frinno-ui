import { BaseEntity } from "../../entities/base-entity";
import { Profile } from "../../entities/profile-entity";
//Login DTOs
export interface LoginRequest
{
  email?:string;
  password?:string;
}

export interface LoginResponse extends BaseEntity
{
  id?:string;
  userName?:string;
  email?:string,
  role?:number,
  roleName?:string,
  token?:string;
}

//Register DTOs
export interface RegisterRequest
{
  addressInfo?: {
    mobile?: string,
    city?: string
  }
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  role:number
}
export interface RegisterResponse extends BaseEntity
{
  addressInfo?: {
    mobile?: string,
    city?: string
  }
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
}
