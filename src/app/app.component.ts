import { Component } from '@angular/core';
import { trigger, style, animate, transition, group, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-root',
  animations: [
    trigger('animRoutes', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                transform: 'translateX(-100%)'
              }),
              animate(
                '200ms ease-in',
                style({transform: 'translateX(0%)' })
              ),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [animate('200ms ease-in', style({transform: 'translateX(100%)' })), animateChild()],
            { optional: true }
          )
        ])
      ])
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getPage(outlet) {
    console.log(outlet);
    console.log(outlet.activatedRouteData['page'] || 'one');
    return outlet.activatedRouteData['page'] || 'one';
  }
}
