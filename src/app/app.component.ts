import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkTheme = false;
  constructor(private ol: OverlayContainer){

  }
  switchTheme(checked){
    console.log(checked);

    this.darkTheme = checked;
    this.ol.getContainerElement().classList.add(checked? 'myapp-dark-theme' : "" );
  }
}
