import { Component, OnInit } from '@angular/core';

/*
This component is used as an error page. It is useful in instances when server requests fail
and absolutely no data is displayed on a page. Instead of showing a blank page, we let the user
know that a problem occurred. Below is it’s template.
*/

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
