import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent} from './navegacao/home.component';
import { MenuComponent} from './navegacao/menu.component';
import { ContatoComponent} from './institucional/contato/contato.component';
import {SobreComponent} from  './institucional/sobre/sobre.component'
import { RouterModule } from '@angular/router';
import { rooteRouterConfigu } from './app.route';
import { APP_BASE_HREF } from '@angular/common';
import{from }from "rxjs";
import { ListaProdutosComponent } from './produto/lista-produtos/lista-produtos.component';
import { ProdutoService } from './produto/produto.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    ContatoComponent,
    SobreComponent,
    ListaProdutosComponent,
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rooteRouterConfigu,{useHash:false})],
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF,useValue:'/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
