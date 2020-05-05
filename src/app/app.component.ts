import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';
  public openSlide: Boolean;
  
  constructor() {
    this.openSlide = false;
  }

  HamburgerOnClick(){
    this.openSlide = !this.openSlide; 
  }
}
