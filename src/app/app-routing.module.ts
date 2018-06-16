import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { page: 'one' } },
  { path: 'about', component: AboutMeComponent, data: { page: 'two' } },
  { path: 'projects', component: ProjectsComponent, data: { page: 'three' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
