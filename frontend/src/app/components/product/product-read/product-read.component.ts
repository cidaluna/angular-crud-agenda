import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  contatos!: Product[];
  displayedColumns = ['id', 'nome', 'telefone', 'email', 'action'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // faz chamada para o Backend injetando

    this.productService.read().subscribe(contatos => {
      this.contatos = contatos;
      console.log(contatos);
    });
  }

}
