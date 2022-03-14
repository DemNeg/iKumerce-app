import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {HttpErrorHandlerService} from "../../shared/services/http-error-handler.service";
import {Observable} from "rxjs";
import {Sku} from "../models/sku";
import {catchError} from "rxjs/operators";
/*
Created by Singou Dembele
This  service gets products from the store.
 If multiple products are being retrieved, they can be paginated and have a page size set
 as query params
 */
@Injectable({
  providedIn: 'root'
})
export class SkuService {
  private urlRessource: string = `${environment.apiUrl}/api/skus`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  getSku(id: string): Observable<Sku> {
    return this.http.get<Sku>(`${this.urlRessource}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }

  getSkus(page: number, pageSize: number): Observable<Sku[]> {
    return this.http.get<Sku[]>(
      this.urlRessource,
      {
        params: {
          'page': page.toString(),
          'pageSize': pageSize.toString()
        }
      })
      .pipe(catchError(this.eh.handleError));
  }
}
