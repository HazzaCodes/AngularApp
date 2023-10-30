import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:5029/api/Auth/Register'; // Update this URL to match your API endpoint
  private token: string = "";
  private route: string = "";
  private username: string = "";

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, user, { headers });
  }

  loginUser(user: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>('http://localhost:5029/api/Auth/Login', user, {
    headers,
  });

  
}

  // Step 2: Store the JWT token securely
  storeToken(token: string): void {
    this.token = token;
    localStorage.setItem('jwtToken', token);
  }

  storeUsername(username: string) {
    this.username = username;
    localStorage.setItem("username", username);
  }
  getUsername() {
    return localStorage.getItem('username');
  }


  setPreviousRoute(route: string) {
    this.route = route;
    localStorage.setItem('previousRoute', route);
  }
  getPreviousRoute(): string | null {
    return this.route || localStorage.getItem('previousRoute');
  }

  // Step 3: Retrieve the JWT token
  getToken(): string | null {
    return this.token || localStorage.getItem('jwtToken');
  }

  // Step 4: Clear the JWT token on logout

  clearAuthentication(): void {
    this.token = ""; // Clear the token
    localStorage.removeItem('jwtToken'); // Remove the token from local storage

    // Optionally, clear any other user-related data here
  }
}




