import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'registration', component:RegisterComponent},
  {path: 'first', component: FirstComponent, canActivate: [AuthGuard]},
  {path: 'second/:id', component: SecondComponent, canActivate: [AuthGuard]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
