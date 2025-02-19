import {TabEnum} from "../types/enums.ts";

export interface Project {
    type: TabEnum
    date: string
    location: string
    title: string
    contribution: number
    stacks?: string[]
    description: string

    thumbnailOne?: string
    thumbnailTwo?: string
    urlKr?: string
    urlEn?: string
}