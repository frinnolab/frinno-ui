import { BaseEntity } from "../base-entity";
import { ProjectStatusEnum } from "./project-status.enum";

export interface Project extends BaseEntity{

    title?:string;
    description?:string;
    project_url?:string;
    project_status?:number;
    //project_skills?:string[]
}