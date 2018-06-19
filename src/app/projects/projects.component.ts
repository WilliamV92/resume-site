import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  host: {
    class:'router-style'
  },
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
