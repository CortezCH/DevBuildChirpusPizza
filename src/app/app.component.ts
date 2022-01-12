import { Component } from '@angular/core';
import { menuItem } from './menuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevBuildChirpusPizza';
  menu : menuItem[] = [
    new menuItem("Large Pizza","Dinner",15.00),
    new menuItem("Medium Pizza","Dinner",10.00),
    new menuItem("Personal Pizza","Dinner",5.00),
    new menuItem("Chicken Wing Special","Lunch",15.00),
    new menuItem("Omelette","Breakfast",5.00),
  ];
}
