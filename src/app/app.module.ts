import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent} from './navegacao/home.component';
import { MenuComponent} from './navegacao/menu.component';
import { ContatoComponent} from './institucional/contato/contato.component';
import {SobreComponent} from  './institucional/sobre/sobre.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    ContatoComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
