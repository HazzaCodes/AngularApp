import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:5029/api/Post';

  constructor(private http: HttpClient) {}

  // Get Posts with an example of setting an Authorization header
  getPosts(jwtToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any[]>(`${this.apiUrl}/GetPosts`, { headers });
  }


  getPost(jwtToken: string, postId: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any[]>(`${this.apiUrl}/GetPost${postId}`, { headers });
  }

  

  getAllPosts(jwtToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any[]>(`${this.apiUrl}/GetAllPosts`, { headers });
  }


  // Add a new post
  addPost(newPost: any, jwtToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.post<any>(`${this.apiUrl}/AddPost`, newPost, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error adding a post:', error);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  // Delete a post by ID
  deletePost(postId: number, jwtToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.delete<any>(`${this.apiUrl}/DeletePost/${postId}`, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error deleting a post:', error);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }
  editPost(postId: number, updatedPost: any, jwtToken: string): Observable<any> {
    const url = `${this.apiUrl}/UpdatePost/${postId}`;
    // Set the authorization header with the JWT token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.put(url, updatedPost, { headers });
  }
}
