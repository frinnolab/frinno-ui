import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { NotesComponent } from './pages/notes/notes.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'Notes',
    pathMatch:'full'
  },
  {
    path:'Notes',
    loadChildren:()=>
    import('./pages/notes/notes.module').then(m=>m.NotesModule),
  },
  {
    path:'Projects',
    loadChildren:()=>
    import('./pages/projects/projects.module').then(m=>m.ProjectsModule),
  },
  {
    path:'About',
    loadChildren:()=>
    import('./pages/about/about.module').then(m=>m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
