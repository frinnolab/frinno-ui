import { BaseEntity } from "./entities/base-entity";

export interface Article extends BaseEntity
{
  thumbnail?:string;
  title?:string;
  longText?:string;
  likes?:number;
  author?:any;
  datePublished?:Date;
  tags?:string[];
}
