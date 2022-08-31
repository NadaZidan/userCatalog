import { Coordinate } from "./coordinate.interface"

export interface Users{
    uuid: string,
    firstName: string,
    lastName: string,
    email:string
    username: string,
    gender:string,
    phone:string
    age: string,
    imagUrl:string,
    coordinate:Coordinate,
    address:string

}