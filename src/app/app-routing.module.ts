import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InformationComponent } from './pages/information/information.component';
import { ThemesComponent } from './pages/themes/themes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'information', loadComponent: () => import('./pages/information/information.component').then(m => m.InformationComponent) },
  { path: 'themes', loadComponent: () => import('./pages/themes/themes.component').then(m => m.ThemesComponent) }
  /*{ path: 'ponentes', loadComponent: () => import('./themes/themes.component').then(m => m.ThemesComponent) }
    { path: 'unete', loadComponent: () => import('./themes/themes.component').then(m => m.ThemesComponent) }
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
