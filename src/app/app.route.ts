import { from } from "rxjs";
import {Routes} from '@angular/router';
import {Routes} from '@angular/router';
import { HomeComponent } from "./navegacao/home.component";


export const rooteRouterConfigu: Routes = [
    {path:'', redirectTo: '/home',pathMatch:'full'},
    {path: 'home', component: HomeComponent},
];