import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators'; // this operator is to take the value then automatically unsubscribe the observable (no need for explicitly unsubscription)
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$; 
  id;

  product = { 
    title: "",
    price: 0,
    category : "",
    imageUrl: ""
  }; 

  constructor(private categoryService: CategoryService, 
              private productService: ProductService, 
              private router: Router,
              private route: ActivatedRoute) { 
    
    this.categories$ = this.categoryService.getCategory();
    
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) this.productService.get(this.id).subscribe((x: Product) => {
      this.product = x 
    })
  }

  save(product){

    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    
    this.router.navigate(['/admin/products']);

  }

  delete(){
    if (!confirm('Are you sure you want to delete ?')) return;
    
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
