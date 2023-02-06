import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedComponent } from './extra/protected/protected.component';
import { AuthGuard } from './extra/shared/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlaysComponent } from './main/plays/plays.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'plays', component: PlaysComponent},
  { path: 'login', component: LoginComponent},
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard], },
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }