import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import { ItemQuantityComponent } from './components/item-quantity/item-quantity.component';
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";
import { TitleComponent } from './components/title/title.component';
import {SimplePageComponent} from "./components/simple-page/simple-page.component";
import { WordWrapPipe } from './pipes/word-wrap.pipe';



@NgModule({
  declarations: [
    ItemQuantityComponent,
    TitleComponent,
    SimplePageComponent,
    WordWrapPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    RouterModule

  ],
  // Common modules and Components out of the box instead of importing them throughout the entire application
  exports:[
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    ItemQuantityComponent,
    TitleComponent,
    SimplePageComponent,
    WordWrapPipe
  ]
})
export class SharedModule { }
