export interface Article
{
  id?:number;
  thumbnail?:string;
  title?:string;
  longText?:string;
  likes?:number;
  author?:any;
  datePublished?:Date;
  tags?:string[];
}
