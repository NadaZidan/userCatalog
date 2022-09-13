import { Info } from "./info.interface";
import { Users } from "./userInterface";

export interface Response{
    info:Info,
    data:Users[]
}