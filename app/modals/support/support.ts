import { Component } from '@angular/core';
import { Alert, Modal, NavController, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/modals/support/support.html',
})
export class SupportModal {

  constructor(
    private viewCtrl: ViewController, 
    private nav: NavController) {

  }

  cancel() {
    this.viewCtrl.dismiss(); 
  }

  send() {
    let alert = Alert.create({
      title: 'Message Sent',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.viewCtrl.dismiss(); 
        }
      }],
    });

    this.nav.present(alert);
  }

}