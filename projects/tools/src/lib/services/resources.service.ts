import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  constructor(
    private httpClient: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) { }

  get(resource: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${resource}`, {params}).pipe(
      map((data: any) => {
        return data.response.data;
      }),
      catchError(error => {
        return of([]);
      })
    );
  }

  gets(resources: string[], params: Array<HttpParams> = new Array<HttpParams>()) {
    return forkJoin(resources.map((resource, i) => this.get(resource, params[i])));
  }
}
