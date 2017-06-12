import { Component } from '@angular/core';
import { Modal, NavController, ViewController } from 'ionic-angular';

import { FeedbackPage } from '../../pages/feedback/feedback';

@Component({
  templateUrl: 'build/modals/already-know/already-know.html',
})
export class AlreadyKnowModal {

  constructor(
    private viewCtrl: ViewController, 
    private nav: NavController) {
  }

  close() {
  	this.viewCtrl.dismiss();
  }

  review() {
    this.nav.push(FeedbackPage).then(() => {
      this.close();
    });
  }
}
