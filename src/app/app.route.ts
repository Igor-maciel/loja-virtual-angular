
import {Routes} from '@angular/router';
import { HomeComponent } from "./navegacao/home.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";

export const rooteRouterConfigu: Routes = [
    {path:'', redirectTo: '/sobre',pathMatch:'full'},
    {path:'', redirectTo: '/contato',pathMatch:'full'},
    {path:'', redirectTo: '/home',pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path:'contato',component:ContatoComponent},
    {path:'contato',component:SobreComponent},
];
