import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Uras';
  items= [
    {description: "Breakfast", action: "No"},
    {description: "Take a Shower", action: "Yes"},
    {description: "Go To Work", action: "Yes"},
    {description: "Drink Coffee", action: "Yes"}
  ];
}
