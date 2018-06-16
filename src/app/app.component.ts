import { Component, AfterViewInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild("fixedContainer") fixedContainer;
  @ViewChild("fixedHeader") fixedHeader;
  fadeIn: boolean = false;
  headerStick: boolean = false;
  cachedOffset: number = 0;
  
  ngAfterViewInit(): void {
  }
}
