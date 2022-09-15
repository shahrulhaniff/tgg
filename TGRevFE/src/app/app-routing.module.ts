import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
//import { NavComponent } from './layout/menu/nav/nav.component';
//import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthGuardService } from './services/authGuard/auth-guard.service';
import { GuardplusService } from './services/guardplus/guardplus.service';
import { UserGuardService } from './services/userGuard/user-guard.service';

const routes: Routes = [
  {
    path: "login",
    canActivate: [GuardplusService], 
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "landingpage",
    canActivate: [GuardplusService], 
    loadChildren: () =>
      import("./pages/landingpage/landingpage.module").then((m) => m.LandingpageModule),
  },
  {
    path: '',
    component: AuthComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "home",
        canActivate: [UserGuardService],
        loadChildren: () =>
          import("./pages/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "dashboard",
        canActivate: [UserGuardService],
        loadChildren: () =>
          import("./pages/dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "profile",
        canActivate: [UserGuardService],
        loadChildren: () =>
          import("./pages/profile/profile.module").then((m) => m.ProfileModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'landingpage' }
    ]
  },
  { path: 'haha', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
