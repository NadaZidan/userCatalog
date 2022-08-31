import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import { Response } from '../model/responce.interface';
import { Users } from '../model/userInterface';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private readonly apiUrl: string ='https://randomuser.me/api'
  constructor(private http:HttpClient) { }
  // fetch users
  getUsers(size:number=10):Observable<any>{
  return this.http.get<any>(`${this.apiUrl}/?results=${size}`).pipe(
    map(this.getProcessResponse)
  )
  }
// fetch userdetails using uuid
getUserDetails(uuid:string):Observable<any>{
  return this.http.get<any>(`${this.apiUrl}/?results=${uuid}`).pipe(
    map(this.getProcessResponse)
  )
  }

private getProcessResponse(response:Response):Response{
  return{
    info:{ ...response.info},
    results:response.results.map((user:any)=>(
      <Users>{
      uuid: user.login.uuid,
      firstName:user.name.first,
      lastName: user.name.last,
      email:user.email,
      username: user.login.username,
      gender:user.gender,
      phone:user.phone,
      age: user.dob.age,
      imagUrl:user.picture.medium,
      coordinate:{latitude:+user.location.coordinates.latitude,longitude:+user.location.coordinates.longitude},
      address:`${user.location.street.number}/${user.location.street.name}/${user.location.city}`
    })
  )
}
}
}
