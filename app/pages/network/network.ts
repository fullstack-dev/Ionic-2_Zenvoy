import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage, LocalStorage } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { NetworkService } from '../../providers/network-service/network-service';
import { UserDetailsComponent } from '../../components/user-details/user-details';

@Component({
  templateUrl: 'build/pages/network/network.html',
  providers: [ NetworkService ]
})
export class NetworkPage {
  local: Storage = new Storage(LocalStorage);
  networks: any;

  constructor(
    private nav: NavController,
    public networkService: NetworkService) {

  	  this.initializeNetworks();
  }

  initializeNetworks() {
    this.networkService.load()
      .then(data => {
        this.networks = data;
      })
  }

  viewProfile(id) {
    this.nav.push(ProfilePage);
    this.local.set('profile', id);
  }
  
}
