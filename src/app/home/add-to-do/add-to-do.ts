import { Component } from '@angular/core';
import { TaskDTO, Todo } from '../../services/todo';

@Component({
  selector: 'app-add-to-do',
  standalone: false,
  templateUrl: './add-to-do.html',
  styleUrl: './add-to-do.css'
})
export class AddToDo {
  taskName:string='';
  isCompleted:boolean=false;
constructor (private ToDoSevices:Todo){}

onSubmit(){
  const newTask: TaskDTO={
    dtoId:0,
    dtoTaskName :this.taskName,
    dtoTaskIsCompleted :this.isCompleted,
  };

this.ToDoSevices.add(newTask).subscribe({
  next: (res) => { console.log('Task added ✅', res);
   alert('Task added successfully!'); this.taskName = ''; 
   this.isCompleted = false; }, 
   error: (err) => { console.error('Error while adding task ❌', err);

    }});

}


}
