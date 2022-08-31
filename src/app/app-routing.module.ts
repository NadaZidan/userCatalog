import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { UsersComponent } from './component/users/users.component';
import { UserResolver } from './service/user.resolver';

const routes: Routes = [
  {path:'users',component:UsersComponent },
  {path:'userDetails/:uuid',component:UserdetailsComponent,resolve:{resolveResponse:UserResolver} },
  {path:'**',redirectTo:'users' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }