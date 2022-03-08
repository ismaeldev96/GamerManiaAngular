import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  constructor(private NoticiaService: NoticiaService) { }

  listaProdutos = [] as Produto[];

  ngOnInit(): void {7
    this.carregarProdutos();
  }

  carregarProdutos(){
    this.NoticiaService.getProdutos().subscribe( (produtosRecebidos: Produto[]) => {
      this.listaProdutos = produtosRecebidos;
    })
  }
}
