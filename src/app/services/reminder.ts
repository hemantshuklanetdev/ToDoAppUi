import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

 export class ReminderDTO {
  data:string[]=[];
}

@Injectable({
  providedIn: 'root'
})
export class Reminder implements OnInit {
  private url = "https://localhost:7244/api/Reminder";
  ReminderDTO: string[] = [];

  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
    this.httpclient.get<string[]>(`${this.url}/GetAll`).subscribe({
      next: (response) => {
        this.ReminderDTO = response;
      },
      error: (err) => {
        console.error("Error fetching reminders:", err);
      }
    });
  }

  get(): Observable<string[]> {
    return this.httpclient.get<string[]>(`${this.url}/GetAll`);
  }
}

