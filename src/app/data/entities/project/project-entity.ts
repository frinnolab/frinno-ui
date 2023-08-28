import { BaseEntity } from "../base-entity";
import { ProjectStatusEnum } from "./project-status.enum";

export interface Project extends BaseEntity{

    title?:string;
    description?:string;
    project_url?:string;
    project_status?:ProjectStatusEnum;
    project_skills?:string[]
}