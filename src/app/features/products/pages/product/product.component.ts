import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { mergeMap, tap } from 'rxjs/operators';
import { HeaderService } from 'src/app/core/header/header.service';
import { Order } from 'src/app/data/models/order';
import { Sku } from 'src/app/data/models/sku';
import { CartService } from 'src/app/data/services/cart.service';
import { LineItemService } from 'src/app/data/services/line-item.service';
import { OrderService } from 'src/app/data/services/order.service';
import { SkuService } from 'src/app/data/services/sku.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: string = '';
  product!: Sku;
  quantity: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private skuService: SkuService,
    private location: Location,
    private router: Router,
    private headerService: HeaderService,
    private orderService: OrderService,
    private lineItemService: LineItemService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        mergeMap(params => {
          const id = params.get('id')
          this.id = id ? id : '';

          return this.skuService.getSku(this.id);
        }),
        tap((sku) => {
          this.product = sku;
        })
      ).subscribe({
        error: (err) => this.router.navigateByUrl('/error')
      });

    this.headerService.setHeaderButtonsVisibility(true);
  }

  addItemToCart() {
    if (this.quantity > 0) {
      if (this.cartService.orderId == '') {
        this.orderService.createOrder()
          .pipe(
            mergeMap((order: Order) => {
              this.cartService.orderId = order.id || '';

              return this.lineItemService.createLineItem({
                orderId: order.id,
                name: this.product.name,
                imageUrl: this.product.imageUrl,
                quantity: this.quantity,
                skuCode: this.product.code
              });
            })
          )
          .subscribe(
            () => {
              this.cartService.incrementItemCount(this.quantity);
              this.showSuccessSnackBar();
            },
            err => this.showErrorSnackBar()
          );
      } else {
        this.lineItemService.createLineItem({
          orderId: this.cartService.orderId,
          name: this.product.name,
          imageUrl: this.product.imageUrl,
          quantity: this.quantity,
          skuCode: this.product.code
        }).subscribe(
          () => {
            this.cartService.incrementItemCount(this.quantity);
            this.showSuccessSnackBar();
          },
          err => this.showErrorSnackBar()
        );
      }
    } else {
      this.snackBar.open('Select a quantity greater than 0.', 'Close', { duration: 8000 });
    }
  }

  setQuantity(no: number) {
    this.quantity = no;
  }

  goBack() {
    this.location.back();
  }

  private showSuccessSnackBar() {
    this.snackBar.open('Item successfully added to cart.', 'Close', { duration: 8000 });
  }

  private showErrorSnackBar() {
    this.snackBar.open('Failed to add your item to the cart.', 'Close', { duration: 8000 });
  }
}