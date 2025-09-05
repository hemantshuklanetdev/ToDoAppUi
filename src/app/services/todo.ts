import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface TaskDTO{
dtoId:number;
dtoTaskName:string;
dtoTaskIsCompleted:boolean; 
}

@Injectable({
  providedIn: 'root'
})


export class Todo {
  private apiUrl = "https://localhost:7244/api/ToDoTask"; // adjust port

  constructor(private http: HttpClient) {}

  getAll(): Observable<TaskDTO[]> {
    return this.http.get<TaskDTO[]>(`${this.apiUrl}/GetAll`);
  }

  add(task: any): Observable<TaskDTO> {
    return this.http.post<TaskDTO>(`${this.apiUrl}/AddTask`, task);
  }

  update(task: TaskDTO): Observable<TaskDTO> {
    return this.http.put<TaskDTO>(`${this.apiUrl}/Update/${task.dtoId}`, task);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Delete/${id}`);
  }
  
}
