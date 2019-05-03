import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Direction } from '../models/direction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DirectionService {

  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<Direction[]> {
    return this.http.get<Direction[]>('/assets/data/directions.json');
  }
}
