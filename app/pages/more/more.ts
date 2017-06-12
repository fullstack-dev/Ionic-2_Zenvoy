import { Component } from '@angular/core';
import { Alert, Modal, NavController } from 'ionic-angular';
import { Storage, LocalStorage } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';
import { LoginPage } from '../login/login';
import { PreferencesPage } from '../preferences/preferences';
import { SupportModal } from '../../modals/support/support';
import { AuthService } from '../../providers/auth-service/auth-service';
/*
  Generated class for the MorePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/more/more.html',
  providers: [ AuthService ]
})
export class MorePage {
  local: Storage = new Storage(LocalStorage);
  private rootPage: any;

  constructor(
    private nav: NavController,
    private authService: AuthService) {

  }

  showProfilePage() {
   this.local.get('user')
      .then(data => {
        var memberId;
        data = JSON.parse(data);
        memberId = data.member_id; 
        this.local.set('profile', memberId);
        this.nav.push(ProfilePage);
      });
  }

  showPreferencesPage() {
  	this.nav.push(PreferencesPage);
  }

  showSettingsPage() {
  	this.nav.push(SettingsPage);
  }

  showSupportModal() {
  	let modal = Modal.create(SupportModal);
    this.nav.present(modal);
  }

  logOut() {
    let alert = Alert.create({
      title: 'Are you sure you want to log-out?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            // Do nothing
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.authService.logOut()
              .then(res => {
                this.nav.setRoot(LoginPage);
                this.nav.rootNav.setRoot(LoginPage);
            });
          }
        }
      ]
    });
    this.nav.present(alert);
   
  }
}
