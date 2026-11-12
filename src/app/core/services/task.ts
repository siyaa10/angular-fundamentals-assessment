
import { Injectable } from '@angular/core';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  
tasks: Task[] = [
  {
    id: 1,
    title: 'Complete Angular assessment',
    description: 'Finish the application and prepare GitHub submission',
    completed: false
  },
  {
    id: 2,
    title: 'Review TypeScript fundamentals',
    description: 'Practise interfaces, types and functions',
    completed: true
  },
  {
    id: 3,
    title: 'Build portfolio website',
    description: 'Create a responsive personal portfolio',
    completed: false
  },
  {
    id: 4,
    title: 'Practise SQL queries',
    description: 'Work on joins, filtering and aggregations',
    completed: false
  },
  {
    id: 5,
    title: 'Read documentation',
    description: 'Explore Angular services and dependency injection',
    completed: true
  },
  {
    id: 6,
    title: 'Prepare project presentation',
    description: 'Document project features and architecture',
    completed: false
  }
];


  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    const newTask: Task = {
      id: Date.now(),
      title: title,
      description: 'New task',
      completed: false
    };

    this.tasks.push(newTask);
  }

  toggleTask(id: number): void {
    const task = this.tasks.find(task => task.id === id);

    if (task) {
      task.completed = !task.completed;
    }
  }
}
