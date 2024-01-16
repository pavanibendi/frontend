import { Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
    {
        path: '', component: TeamsComponent
    },
    {
        path: 'tasks', component: TasksComponent
    },
];
