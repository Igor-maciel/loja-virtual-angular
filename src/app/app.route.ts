
import {Routes} from '@angular/router';
import { HomeComponent } from "./navegacao/home.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ListaProdutosComponent } from "./produto/lista-produtos/lista-produtos.component";

export const rooteRouterConfigu: Routes = [

   {path:'', redirectTo: '/home',pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path:'contato',component:ContatoComponent},
    {path:'sobre',component:SobreComponent},
    {path:'produtos',component:ListaProdutosComponent},
    {path:'produto-detalhe/:id',component:ListaProdutosComponent},
    {path: 'carrinho/:id', component: ListaProdutosComponent },

];
