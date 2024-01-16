import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Task {
  id: number,
  name: string,
  status: 'To Do' | 'In Progress' | 'Done'
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks: Task[] = [
    {
      id: 1,
      name: 'Develop Frontend',
      status: 'In Progress'
    },
    {
      id: 2,
      name: 'Develop Backend',
      status: 'Done'
    },
    {
      id: 3,
      name: 'Integrations',
      status: 'To Do'
    },
  ];

  taskName: string = '';
  taskStatus: 'To Do' | 'In Progress' | 'Done' = 'To Do';
  currentTaskId: number = -1;

  popupMode: 'add' | 'edit' = 'add';

  addTask() {
    this.tasks.push({
      id: this.tasks.length + 1,
      name: this.taskName,
      status: this.taskStatus
    });
    this.clearValues();
  }

  editTask() {
    this.tasks.map((t: Task) => {
      if (t.id === this.currentTaskId) {
        t.name = this.taskName;
        t.status = this.taskStatus;
      }
    })
    this.clearValues();
  }

  populateValues(task: Task) {
    this.taskName = task.name;
    this.taskStatus = task.status;
    this.currentTaskId = task.id;
    this.popupMode = 'edit';
  }

  clearValues() {
    this.taskName = '';
    this.taskStatus = 'To Do';
    this.currentTaskId = -1;
    this.popupMode = 'add';
  }

}
