import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './pages/Articles/articles.component';
import { HomeComponent } from './pages/Home/home.component';
import { ProfilesComponent } from './pages/Profiles/profiles.component';
import { ProjectsComponent } from './pages/Projects/projects.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'Articles',
    component:ArticlesComponent,
  },
  {
    path:'Profile',
    component:ProfilesComponent,
  },
  {
    path:'Projects',
    component:ProjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
