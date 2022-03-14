import { Breakpoints } from '@angular/cdk/layout';
import { BreakpointObserver } from '@angular/cdk/layout/breakpoints-observer';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { HeaderService } from 'src/app/core/header/header.service';
import { Sku } from 'src/app/data/models/sku';
import { SkuService } from 'src/app/data/services/sku.service';

/*
This component displays a paginated list of available products for sale. It is the first page that is loaded when the app starts.
*/
@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  cols = 4;
  length = 0;
  pageIndex = 0;
  pageSize = 20;
  pageSizeOptions: number[] = [5, 10, 20];

  pageEvent!: PageEvent | void;

  products: Sku[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private skuservice: SkuService,
    private router: Router,
    private headerService: HeaderService) { }

  ngOnInit() {
    this.getProducts(1, 20);
    this.headerService.setHeaderButtonsVisibility(true);

    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints['(max-width: 599.98px) and (orientation: portrait)'] || result.breakpoints['(max-width: 599.98px) and (orientation: landscape)']) {
          this.cols = 1;
        }
        else if (result.breakpoints['(min-width: 1280px) and (orientation: portrait)'] || result.breakpoints['(min-width: 1280px) and (orientation: landscape)']) {
          this.cols = 4;
        } else {
          this.cols = 3;
        }
      }
    });
  }

  private getProducts(page: number, pageSize: number) {
    this.skuservice.getSkus(page, pageSize)
      .subscribe(
        skus => {
          this.products = skus;
          this.length = skus[0].__collectionMeta.recordCount;
        },
        err => this.router.navigateByUrl('/error')
      );
  }

  getNextPage(event: PageEvent) {
    this.getProducts(event.pageIndex + 1, event.pageSize);
  }

  trackSkus(index: number, item: Sku) {
    return `${item.id}-${index}`;
  }
}