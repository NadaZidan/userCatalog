import { Injectable } from '@angular/core';
import { Router, Resolve,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Response> {
  constructor(private userService:UserService){}
  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<Response> {
    return this.userService.getUserDetails(route.paramMap.get('uuid')!);
  }
}
