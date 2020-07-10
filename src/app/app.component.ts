import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desk';
  data = [];
  counter = 0;

  ngOnInit(): void {
  }
  addDays() {
    if (this.data.length != 0)
      this.counter = this.data[this.data.length - 1].dayNumber;

    this.data.push({ dayNumber: (this.counter + 1), id: (this.counter + 1) })
    console.log(this.data);

    this.counter++;
  }
}
