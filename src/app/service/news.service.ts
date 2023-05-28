import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ErrorMessage, Headlines } from './news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url =
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=c044b14d6fdf411cb02ff1303325a972';

  constructor(private http: HttpClient) {}

  /**
   * To retun news top headline
   * @param { number } pageSize page size
   * @returns { Headlines }
   */
  getTopHeadlines(pageSize: number): Observable<Headlines> {
    if (pageSize) {
      return this.http
        .get<Headlines>(this.url + `&pageSize=${pageSize}`)
        .pipe(catchError(this.handelError));
    } else {
      return this.http
        .get<Headlines>(this.url)
        .pipe(catchError(this.handelError));
    }
  }

  /**
   * Function to handle error messages
   * @param { ErrorMessage } error error message
   * @returns error message
   */
  handelError(error: ErrorMessage) {
    debugger;
    return throwError(error.message);
  }
}
