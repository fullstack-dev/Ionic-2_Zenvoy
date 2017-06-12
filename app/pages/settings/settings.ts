import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';

import { SettingsPasswordPage } from '../settings-password/settings-password';
import { SettingsEmailPage } from '../settings-email/settings-email';
import { SupportModal } from '../../modals/support/support';

/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {

  constructor(private nav: NavController) {

  }

  showPasswordSettingsPage() {
  	this.nav.push(SettingsPasswordPage);
  }

  showEmailSettingsPage() {
  	this.nav.push(SettingsEmailPage);
  }

  showSupportModal() {
    let modal = Modal.create(SupportModal);
    this.nav.present(modal);
  }
}
