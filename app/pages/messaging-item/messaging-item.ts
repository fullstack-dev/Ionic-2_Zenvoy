import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

/*
  Generated class for the MessagingItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/messaging-item/messaging-item.html',
})
export class MessagingItemPage {

  constructor(private nav: NavController) {

  }

  viewProfile() {
  	this.nav.push(ProfilePage);
  }
}
