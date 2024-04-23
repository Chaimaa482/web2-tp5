import { Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

export const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'prefix'},
    { path:'index', component:C1Component },
    { path:'auth', component:C2Component },
    
];


