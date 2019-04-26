import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators'; // this operator is to take the value then automatically unsubscribe the observable (no need for explicitly unsubscription)

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$; 
  product;

  constructor(private categoryService: CategoryService, 
              private productService: ProductService, 
              private router: Router,
              private route: ActivatedRoute) { 
                
    this.categories$ = this.categoryService.getCategory();
    let id = this.route.snapshot.paramMap.get('id');

    if (id) this.productService.get(id).pipe(take(1))
    .subscribe(p => {
      debugger;
      this.product = p;
    })
  }

  save(product){
    this.productService.create(product);
    this.router.navigate(['/admin/products'])
  }

  ngOnInit() {
  }

}
