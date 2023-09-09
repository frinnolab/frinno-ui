import { BaseEntity } from "../base-entity";
import { ProjectStatusEnum } from "./project-status.enum";

export interface Project extends BaseEntity{

    title?:string;
    description?:string;
    project_url?:string;
    project_repo_url?:string;
    project_start?:string;
    project_end?:string;
    is_repo_public?:boolean;
    project_status?:number;
    project_type?:number;
}

export interface clientInfo {
    clientName?:string;
    clientPublicLink?:string;
    clientMobile?:string;
    clientCity?:string;
    clientCountry?:string;
    
}

export interface companyAgencyInfo {
    companyAgencyName?:string;
    companyAgencyPublicLink?:string;
    companyAgencyMobile?:string;
    companyAgencyCity?:string;
    companyAgencyCountry?:string;
}
export interface ProjectDetailOverView extends Project 
{
    duration?:string;
    clientInfo?:clientInfo;
    companyAgencyInfo?:companyAgencyInfo;
}

