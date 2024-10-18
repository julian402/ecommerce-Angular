import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
import { ListproductComponent } from './pages/listproduct/listproduct.component';
import { Component } from '@angular/core';

export const routes: Routes = [{ path: '', component: HomeComponent },
    {path:'products', component: ListproductComponent}
=======
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
>>>>>>> 4fa9b49079db0afc860aca9192e85d4c2fc06c19
];
