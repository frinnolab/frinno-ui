import { BaseEntity } from "./base-entity";

export interface Profile extends BaseEntity
{
  profile_pic?:string;
  firstName?:string;
  lastName?:string;
  username?:string;
  email?:string;
}
