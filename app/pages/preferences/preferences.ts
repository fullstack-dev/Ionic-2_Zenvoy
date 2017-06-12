import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';

import { PreferencesNotificationPage } from '../preferences-notification/preferences-notification';
import { PreferencesFrequencyPage } from '../preferences-frequency/preferences-frequency';
import { SupportModal } from '../../modals/support/support';

/*
  Generated class for the PreferencesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/preferences/preferences.html',
})
export class PreferencesPage {

  constructor(private nav: NavController) {

  }

  showNotifPreferencePage() {
  	this.nav.push(PreferencesNotificationPage)
  }

  showFrequencyPreferencePage() {
  	this.nav.push(PreferencesFrequencyPage)
  }

  showSupportModal() {
  	let modal = Modal.create(SupportModal);
  	this.nav.present(modal)
  }
}
