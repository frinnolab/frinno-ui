import { DataListDto } from "../../dtos/data-list.model";
import { BaseEntity } from "../base-entity";

export interface ProjectInfoRequest extends BaseEntity
{
    profile_id?:string;
    title?:string;
}

export interface ProjectInfoList extends DataListDto
{
    
}

