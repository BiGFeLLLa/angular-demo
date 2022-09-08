import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  count = 1;

  listOfNumbers = [1, 32, 32, 55];
  listOfCharacters = ['Delhi', 'Mumbai', 'Bangalore', 'Pune'];

  decreaseCount = () => {
    console.log('Button clicked')
    this.count--;
  }
  increaseCount = () => {
    console.log('Button clicked')
    this.count++;
  }
  arr= [0,1,2,3,4,5,6,7,8,9];
  A= 0;
  B= 0;
  C= 0;
  
  add = () => {
    this.C = this.A + this.B;
  }
  subs = () => {
    this.C = this.A - this.B;
  }
  mult = () => {
    this.C = this.A * this.B;
  }
  divi = () => {
    this.C = this.A / this.B;
  }
}
