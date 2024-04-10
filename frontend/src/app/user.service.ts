import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:4000/api/'; 

  constructor(private http: HttpClient) { }

  // Method to register a new user
  registerUser(name: string, email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}user/register`, { name, email });
  }

  // Method to fetch all users with pagination
  getAllUsers(page: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}user/fetch?page=${page}&pageSize=${pageSize}`);
  }
}

