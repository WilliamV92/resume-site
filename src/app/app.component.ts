import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  fadeIn: boolean = false;
  
  ngAfterViewInit(): void {
    // document.querySelector(".main-container").classList.add("fade-in");
    this.fadeIn = true;
  }
}
