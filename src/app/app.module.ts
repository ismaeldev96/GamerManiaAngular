import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/template/header/header.component';
import { FooterComponent } from './views/template/footer/footer.component';
import { HomeComponent } from './views/template/home/home.component';
import { LoginComponent } from './views/pages/login/login.component';
import { CarrinhoComponent } from './views/pages/carrinho/carrinho.component';
import { ProdutoComponent } from './views/pages/produto/produto.component';
import { CategoriaComponent } from './views/pages/categoria/categoria.component';
import { BuscaComponent } from './views/pages/busca/busca.component';
import { ContatoComponent } from './views/pages/contato/contato.component';
import { UsuarioComponent } from './views/pages/usuario/usuario.component';
import { FavoritoComponent } from './views/pages/favorito/favorito.component';
import { FormsModule } from '@angular/forms';
import { CardProdutoComponent } from './views/pages/card-produto/card-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CarrinhoComponent,
    ProdutoComponent,
    CategoriaComponent,
    BuscaComponent,
    ContatoComponent,
    UsuarioComponent,
    FavoritoComponent,
    CardProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
