import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { SignInComponent } from './pages/auth/signin/sign-in.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:()=> import('./pages/Home/home.module').then((x)=>x.HomeModule)
  },
  {
    path:'articles',
    loadChildren:()=> import('./pages/Articles/articles.module').then((x)=>x.ArticlesModule)
  },
  {
    path:'projects',
    loadChildren:()=> import('./pages/projects/projects.module').then((x)=>x.ProjectsModule)
  },
  {
    path:'about',
    loadChildren:()=> import('./pages/about/about.module').then((x)=>x.AboutModule)
  },
  {
    path:'account',
    loadChildren:()=> import('./pages/dashboard/dashboard.module').then((x)=>x.DashboardModule)
  },
  {
    path:'login',
    component:SignInComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
