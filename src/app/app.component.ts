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
    // document.querySelector(".main-container").classList.add("fade-in");
    this.fadeIn = true;
    this.cachedOffset = this.fixedHeader.nativeElement.offsetTop;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if(window.scrollY > this.cachedOffset)
    {
      this.headerStick = true;
    }
    else
    {
      this.headerStick = false;
    }
  }

  @HostListener("window:resize", [])
  onWindowResize() {
    this.cachedOffset = this.fixedHeader.nativeElement.offsetTop;
  }
}
