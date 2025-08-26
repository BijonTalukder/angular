import { Routes } from '@angular/router';
import { Goods } from './goods/goods';
import { App } from './app';
// import {} from './'
export const routes: Routes = [
 { path: '', redirectTo: 'goods', pathMatch: 'full' },
     { path: 'goods', component: Goods }
];
