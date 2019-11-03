import { Injectable } from '@angular/core';

import { User } from '../../../shared/models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(protected http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get('http://localhost:8080/api/v1/users').pipe(
        map(
         (jsonArray: Object[]) => jsonArray.map(jsonItem => User.fromJson(jsonItem))
        )
    );
  }

}