import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatGridListModule} from "@angular/material/grid-list";
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:'product/:id',component:ProductComponent},
      {path:'',component:ProductListComponent}
    ]),
    LayoutModule,
    SharedModule,
    MatCardModule,
    MatPaginatorModule,
    MatGridListModule
  ]
  
})
export class ProductsModule { }
