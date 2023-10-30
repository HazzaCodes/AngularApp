
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
;

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  private apiUrl = 'http://localhost:5029/api/Comment';

  constructor(private http: HttpClient) {}
   getComments(jwtToken: string, postId:  number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any[]>(`${this.apiUrl}/GetComments/${postId}`, { headers });

   }
  //  addComment(jwtToken: string, postId: number, newComment: string): Observable<any> {
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
  //   return this.http.post<any>(`${this.apiUrl}/AddComment/${postId}`, newComment , {headers})
  //     .pipe(
  //       catchError((error: any) => {
  //         console.error('Error adding a comment', error);
  //         console.log("comment = ", newComment, " post id = ", postId)
  //         return throwError('Something went wrong. Please try again later.');
  //       })
  //     );

  //  }

  addComment(postId: any, newComment: any, jwtToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.post<any>(`${this.apiUrl}/AddComment/${postId}`, newComment, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error adding a post:', error);
          console.log("token = ", jwtToken);
          console.log("post id = ", postId);
          console.log("comment = ", newComment);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

}
