import { AddressInfo } from "./address-info.entity";
import { BaseEntity } from "./base-entity";
import { ProfileStats } from "./profile-stats.entity";

export interface Profile extends BaseEntity
{
  profile_pic?:string;
  firstName?:string;
  lastName?:string;
  username?:string;
  email?:string;
  password?:string;
  roleName?:string;
  addressInfo?:AddressInfo;
  stats?:ProfileStats;
}
