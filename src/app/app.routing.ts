import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PageComponent } from './components/page/page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'peliculas',
    component: PeliculasComponent,
  },
  {
    path: 'page-test',
    component: PageComponent,
  },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);