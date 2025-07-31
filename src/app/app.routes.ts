import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./home/home').then(m => m.Home)},
    {path: 'about', loadComponent: () => import('./about/about').then(m => m.About)},
    {path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.Contact)},
    {path: 'products', loadComponent: () => import('./products/products').then(m => m.Products)},
     {path: 'porofolio', loadComponent: () => import('./porofolio/porofolio').then(m => m.Porofolio)},
    {path: 'not-found', loadComponent: () => import('./not-found/not-found').then(m => m.NotFound)},
    {path: '**', redirectTo: 'not-found'},
   
];

