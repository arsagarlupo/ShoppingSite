import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'shopSite';


  tasks: Task[] = [];
  errorMessage: string = '';
  taskForm: Task = {
    title: '',
    price: 0,
    status: '',
    description:'',
    brand:'',
    stock:0,
  

  };

//   constructor(private taskService: TaskService) {}

//   loadTasks() {
//     this.taskService.getTasks().subscribe(data => this.tasks = data);
//   }
//   ngOnInit() {
//     this.loadTasks(); 
//   }

//   addOrUpdateTask() {
//   if (this.taskForm.id) {
//     this.taskService.editTasks(this.taskForm.id, this.taskForm).subscribe((updatedTask) => {
//       this.loadTasks(); 
//       this.reset();
//     });
//   } else {
//     this.taskService.addTasks(this.taskForm).subscribe((newTask) => {
//       this.loadTasks(); 
//       this.reset();
//     });
//   }
// }


//   editTask(task: Task) {
//     this.taskForm = { ...task };
//   }

//   deleteTask(id?: number) {
//   if (!id) return;
//   this.taskService.deleteTasks(id).subscribe(() => {
//     this.tasks = this.tasks.filter((t) => t.id !== id);
//   });
// }


//   reset() {
//     this.taskForm = {
//     title: '',
//     price: 0,
//     status: '',
//     description:'',
//     brand:'',
//     stock:0,
//     };
//   }
}
