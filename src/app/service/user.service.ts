import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry} from 'rxjs';
import { Response } from '../model/responce.interface';
import { Users } from '../model/userInterface';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private readonly apiUrl: string ='https://api-aws.shezlong.com/client/listTherapists'
  constructor(private http:HttpClient) { }
  // fetch users
  getUsers(size:number=1):Observable<Users[]>{
  return this.http.get<Response>(`${this.apiUrl}?page=${size}`).pipe(
    map(response => response.data)
  )
  }
  



}
