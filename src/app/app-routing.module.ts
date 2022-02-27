import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/template/home/home.component';
import { LoginComponent } from './views/pages/login/login.component';
import { CarrinhoComponent } from './views/pages/carrinho/carrinho.component';
import { UsuarioComponent } from './views/pages/usuario/usuario.component';
import { ProdutoComponent } from './views/pages/produto/produto.component';
import { BuscaComponent } from './views/pages/busca/busca.component';
import { CategoriaComponent } from './views/pages/categoria/categoria.component';
import { FavoritoComponent } from './views/pages/favorito/favorito.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "page/carrinho", component: CarrinhoComponent},
  {path: "page/usuario", component: UsuarioComponent},
  {path: "page/contato", component: CarrinhoComponent},
  {path: "page/produto", component: ProdutoComponent},
  {path: "page/categoria", component: CategoriaComponent},
  {path: "page/pesquisar", component: BuscaComponent},
  {path: "page/favorito", component: FavoritoComponent},
  {path: "page/login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
