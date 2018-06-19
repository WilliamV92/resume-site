import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  host: {
    class:'router-style'
  },
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
