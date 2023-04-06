import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  public contato: Product = {
    nome: '',
    telefone: 0,
    email: ''
  }
  
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  // Ao inicializar este componente ele já ira preencher o formulario com o dado do produto especifico.
  // Nao esta trazendo os dados no formulario de alteracao, verificar o metodo update e depois fazer metodo delete.
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById('id').subscribe((contato) => {
      this.contato = contato;
    });
  }

  updateProduct():void{
    this.productService.update(this.contato).subscribe(contato => {
      this.productService.showMessage('Contato Atualizado Com Sucesso!')
      this.router.navigate(['/contatos'])
    });
  }
 
  cancelProduct(): void{
    this.router.navigate(['/contatos'])
  }
}