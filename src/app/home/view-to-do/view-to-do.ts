import { Component, OnInit } from '@angular/core';
import { Todo as TodoService, TaskDTO as TaskDto } from '../../services/todo';
@Component({
  selector: 'app-view-to-do',
  standalone: false,
  templateUrl: './view-to-do.html',
  styleUrl: './view-to-do.css'
})
export class ViewToDO implements OnInit{
tasks: TaskDto[] = [];
  loading = true;
  error: string | null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe({
      next: (data) => {
        this.tasks = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = "Failed to load tasks";
        this.loading = false;
        console.error(err);
      }
    });
}
}
