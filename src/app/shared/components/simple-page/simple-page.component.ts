import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.css']
})
export class SimplePageComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() number?: string;
  @Input() icon?:string;
  @Input() buttonText: string = '';
  @Input() centerText?: boolean = false;
  @Input() buttonDisabled?: boolean = false;
  @Input() route?: string | undefined;
  @Output() buttonEvent= new EventEmitter();

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  //If the route input value change => go to the respective page, else emit button event to the parent
  buttonClicked() {
    if(this.route)
    {
      this.router.navigateByUrl(this.route);
    }else{
      this.buttonEvent.emit();
    }
  }
}
