import { Component } from '@angular/core';
import { Plumb5 } from 'plumb5-sdk';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    const {value} =   Plumb5.initializePlumb5({ value: 'Hello World!' });
    console.log('Response from native:', value);
  }
}
