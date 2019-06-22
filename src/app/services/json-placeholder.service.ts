import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const apiUrl = 'http://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  httpOptions;

  constructor(
    private http: HttpClient,
    ) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
   }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAll(query, apiPath): Observable<any[]> {
    const url = apiUrl + apiPath;
    this.httpOptions.params = new HttpParams({fromObject: query});

    return this.http.get<any>(url, this.httpOptions).pipe(
      tap(_ => console.log(`fetched items`)),
      catchError(this.handleError<any>(`getItems`))
    );
  }

  get(id: number, apiPath): Observable<any> {
    const url = `${apiUrl}${apiPath}/${id}`;
    return this.http.get<any>(url, this.httpOptions).pipe(
      tap(_ => console.log(`fetched item id=${id}`)),
      catchError(this.handleError<any>(`getItem id=${id}`))
    );
  }

  post(item: any, apiPath): Observable<any> {
    const url = apiUrl + apiPath;
    return this.http.post<any>(url, item, this.httpOptions).pipe(
      tap((item: any) => console.log(`added item w/ `)),
      catchError(this.handleError<any>('addItem'))
    );
  }
}
