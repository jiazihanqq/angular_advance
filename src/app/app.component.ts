import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('square', [
      state('green', style({ 'background-color': 'green', 'height': '100px', "transform": "translateY(-100%)" })),
      state('red', style({ 'background-color': 'red', 'height': '100px', "transform": "translateY(100%)" })),
      // https://www.easings.net
      // https://www.cubic.baser.com
      transition('green => red', animate('.8s ease-in')),
      transition('red => green', animate('.8s ease-out')),
    ]
    )
    // 关键帧的方式模拟动画
    trigger('square_1', [
      state('green', style({ 'background-color': 'green', 'height': '100px', "transform": "translateY(-100%)" })),
      state('red', style({ 'background-color': 'red', 'height': '100px', "transform": "translateY(100%)" })),
      // https://www.easings.net
      // https://www.cubic.baser.com
      transition('green => red', animate('.8s ease-in')),
      transition('red => green', animate(5000, keyframes([
        style({ "transform": "translateY(100%)" }),
        style({ "transform": "translateY(98%)" }),
        style({ "transform": "translateY(95%)" }),
        style({ "transform": "translateY(90%)" }),
        style({ "transform": "translateY(80%)" }),
        style({ "transform": "translateY(60%)" }),
        style({ "transform": "translateY(30%)" }),
        style({ "transform": "translateY(0%)" }),

      ]))),
    ]
    )
  ]
})
export class AppComponent {
  darkTheme = false;
  squareState: string;
  constructor(private ol: OverlayContainer) {

  }
  switchTheme(checked) {
    this.darkTheme = checked;
    this.ol.getContainerElement().classList.add(checked ? 'myapp-dark-theme' : "");
  }
  onclick() {
    this.squareState = this.squareState === 'red' ? "green" : 'red';
  }
}
