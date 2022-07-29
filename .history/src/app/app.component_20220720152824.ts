import { Component } from '@angular/core';
import { Plumb5 } from 'plumb5-sdk';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    Plumb5.initializePlumb5();
  }
}
