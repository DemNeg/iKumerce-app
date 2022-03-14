import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input()  no?: string = '';  // number
  @Input() centerText:boolean = false;  //Whether to center or not
  constructor() { }

  ngOnInit(): void {
  }

}
