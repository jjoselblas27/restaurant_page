import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private http: HttpClient
  )  {}

  getMembers() {
    return this.http.get<any>('http://localhost:3000/menu');
  }
}
