import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../model/quiz';
import { Response } from '../model/response-container';
import { Observable } from 'rxjs';
import { LargeCategory } from '../enumeration/large-category';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getQuizzes(largeCategory: LargeCategory): Observable<Quiz[]>{
    return this.http.get<Quiz[]>(`${this.url}/quiz?largeCategory=${largeCategory}`);
  }
}
