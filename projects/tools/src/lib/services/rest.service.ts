import {HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from './toastr.service';

export class RestService {
  protected url: string;
  protected resource: string;

  private _objectList$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  objectList$ = this._objectList$.asObservable();

  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading$ = this._loading$.asObservable();

  private _item$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  item$ = this._item$.asObservable();

  constructor(
    protected httpClient: HttpClient,
    protected toastrService: ToastrService
  ) { }

  all(params: HttpParams = new HttpParams()) {
    this._loading$.next(true);
    return this.httpClient.get(`${this.url}/${this.resource}`, {params}).pipe(
      tap((data: any) => {
        this._objectList$.next(data.response.data);
        this._loading$.next(false);
      }),
      catchError(error => {
        this._loading$.next(false);
        return of([]);
      })
    );
  }

  create(body: object) {
    this._loading$.next(true);
    return this.httpClient.post(`${this.url}/${this.resource}`, body).pipe(
      tap((data: any) => {
        this._loading$.next(false);
        this.toastrService.success();
      }),
      catchError(error => this._invalidForm(error))
    );
  }

  update(id: string, body: object) {
    this._loading$.next(true);
    return this.httpClient.patch(`${this.url}/${this.resource}/edit/${id}`, body).pipe(
      tap((data: any) => {
        this._loading$.next(false);
        this.toastrService.edited();
      }),
      catchError(error => this._invalidForm(error))
    );
  }

  delete(id: string) {
    this._loading$.next(true);
    return this.httpClient.delete(`${this.url}/${this.resource}/${id}`).pipe(
      tap(data => {
        this._loading$.next(false);
        this.toastrService.delete();
      }),
    );
  }

  setItem(item: any) {
    this._item$.next(item);
  }

  setLoading(loading: boolean) {
    this._loading$.next(loading);
  }

  private _invalidForm(error) {
    this._loading$.next(false);
    this.toastrService.invalidForm();
    return throwError(error);
  }
}
