import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.css']
})
export class ItemQuantityComponent implements OnInit {
  @Input() quantity: number = 0;
  @Input() maxValue?: number = 0;
  @Input() disabled?: boolean = false;  //To disable an item
  @Output() setQuantityEvent = new EventEmitter<number>();

  values: number[] = [];    // quantity of the items

  constructor() { }

  ngOnInit(): void {
    //When the component got initialized
    // Check if maxValue input change ==> fill the values array
    if(this.maxValue){
      for(let i=0; i<this.maxValue; i++){
        this.values.push(i);
      }
    }
  }

  // Method to set a quantity of an item and emit that value to the parent component
  setQuantity(v: number) {
    this.setQuantityEvent.emit(v);
  }
}
