/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { Plumb5 } from 'plumb5-sdk';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    Plumb5.setUserDetails({
      Name: 'demo',
      EmailId: 'guru@demo.com',
      PhoneNumber: '987654321',
      LeadType: 1,
      Gender: 'Male',
      Age: '2020-01-27T06:12:01.051Z',
      AgeRange: '10-89',
      MaritalStatus: 'Married',
      Education: 'MCA',
      Occupation: 'SE',
      Interests: 'Eating',
      Location: 'Bangalore'
     });
     Plumb5.initializePlumb5();
  }
}
