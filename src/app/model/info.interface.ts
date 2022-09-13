export interface Info{
success:boolean;
message: {
ar: string,
en: string,
af: string
},
pagination: {
page:number,

totalItems: number,
totalPages: number
}
   
}