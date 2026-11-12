
import { Component, inject } from '@angular/core';
import { TaskService } from '../../core/services/task';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})

export class Dashboard {
  private taskService = inject(TaskService);

  tasks = this.taskService.getTasks();

  get completedCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  get pendingCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  get progress(): number {
    return this.tasks.length
      ? Math.round((this.completedCount / this.tasks.length) * 100)
      : 0;
  }

  addTask(title: string): void {
    if (title.trim()) {
      this.taskService.addTask(title);
    }
  }

  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
  }
}
