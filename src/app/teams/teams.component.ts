import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {

  teams: any = [
    {
      id: 1,
      name: 'Test',
      owner: 'Mark'
    },
    {
      id: 2,
      name: 'Testing',
      owner: 'John'
    },
    {
      id: 3,
      name: 'Devs',
      owner: 'Dan'
    },
  ];

  teamName: string = '';

  constructor() { }

  addTeam() {
    this.teams.push({
      id: this.teams.length + 1,
      name: this.teamName,
      owner: 'Pavani'
    });
    this.clearValues();
  }

  clearValues() {
    this.teamName = '';
  }

}
