/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';

import { Plumb5 } from 'plumb5-sdk';

import { Platform } from '@ionic/angular';

import { Router, NavigationStart, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  constructor(
    private platform: Platform,

    public router: Router,
    private pageParameter: ActivatedRoute
  ) {

    this.initializeApp();


  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.plumb5();

    });
  }

  plumb5() {
    Plumb5.initializePlumb5();
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

     Plumb5.tracking({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ScreenName:'test',
      PageParameter: ''
    });
    this.router.events.forEach((event) => {

      if (event instanceof NavigationStart) {

        Plumb5.tracking({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          ScreenName: event.url,
          PageParameter: ''
        });

        Plumb5.pushResponse({
          ScreenName: event.url,
          PageParameter: ''
        });
      }

    // const eventDetailsJson = [
      //   {
      //     "Type": "Button",
      //     "Name": "demo@demo.com",
      //     "PhoneNumber": "987654321",
      //     "Value": 1

      //   }
      // ];
      // document.addEventListener('onPushNotification', (e: any) => {
      //   console.log("onPushNotification");
      //   console.log(JSON.stringify(e));
      //   const routeUrl = e.routeUrl;
      //   console.log("routeUrl", routeUrl); // similar parameter in case of route or button click
      //   this.router.navigate([routeUrl]);
      // });

      // Plumb5.setUserDetails(userDetailsJson);
      // Plumb5.eventPost(eventDetailsJson);
    });
  }

}
