import { Component, OnInit } from '@angular/core';

/*
This is a 404 page that the user gets redirected to when they request a route not available on the router.
To make this possible we use the shared component ==> simple-page with the required input for NotFound : title,bouttonText, route, icon, subtitle
centerText
*/

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
