import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  getStudentList():Observable<any>{
    return this.http.get(`${this.baseURL}`+'student-list'); 
  }

  createStudent(student: object):Observable<object>{
    return this.http.post(`${this.baseURL}`+'save-student',student);
  }

  deleteStudent(id: number):Observable<any>{
    return this.http.delete(`${this.baseURL}/delete-student/${id}`, {responseType:'text'});
  }

  getStudent(id: number):Observable<object>{
    return this.http.get(`${this.baseURL}/student/{id}`);
  }

  updateStudent(id: number, value: any):Observable<Object>{
    return this.http.post(`${this.baseURL}/update-student/${id}`,value);
  }
}
