import { Component } from '@angular/core';
import { Modal, NavController, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/modals/profile-edit/profile-edit.html',
})
export class ProfileEditModal {

  constructor(private viewCtrl: ViewController) {

  }

  save() {
  	// profile should be saved
    this.viewCtrl.dismiss(); 
  }

  cancel() {
  	this.viewCtrl.dismiss();
  }
}
