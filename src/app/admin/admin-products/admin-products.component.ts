import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/product';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: IProduct[] ;
  subscription: Subscription;
  filteredProducts: any[];

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe((products:IProduct[]) => this.filteredProducts = this.products = products);
   }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  filter(query: string){
    this.filteredProducts = (query) ? 
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products;
  }
}
