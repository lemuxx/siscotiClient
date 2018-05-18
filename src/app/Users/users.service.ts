import { Injectable } from '@angular/core';
import { Configuration } from '../configuration/app.configuration';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { User } from './users';
import { Observable } from "rxjs/Observable";
import { catchError, tap } from 'rxjs/operators';
import { of } from "rxjs/observable/of";
import "rxjs/Rx";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class userService {
  private userUrl: string;

  constructor(private http: HttpClient, private _configuration: Configuration){
      this.userUrl = _configuration.Server+'users/';
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        tap(heroes => this.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions)
      .pipe(
        tap((user: User) => this.log(`deleted user id_user=${user.id_user}`)),
        catchError(this.handleError<User>('deleteUser'))
      );
  }

  updateUser(user: User): Observable<null> {
    console.log(user);
    return this.http.put(this.userUrl+user.id_user, user, httpOptions)
    .pipe(
      tap(_ => this.log(`updated user id_user=${user.id_user}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(user: User): Observable<null> {
    const urlDelete = this.userUrl+'/delete/'
    return this.http.put(urlDelete, user, httpOptions)
    .pipe(
      tap(_ => this.log(`deleted user id_user=${user.id_user}`)),
      catchError(this.handleError<any>('deleteUser'))
    );
  }

  ///
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('UserService: ' + message);
  }
}
