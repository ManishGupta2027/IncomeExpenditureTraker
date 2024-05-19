import { Routes } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';



export const routes: Routes = [
  { path: '', redirectTo: 'maintenance', pathMatch: 'full' },
  { path: '**', component: PageNotfoundComponent },
];