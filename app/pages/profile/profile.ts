import { Component } from '@angular/core';
import { Modal, NavController } from 'ionic-angular';

import { ProfileEditModal } from '../../modals/profile-edit/profile-edit';

import { ProfileService } from '../../providers/profile-service/profile-service';

@Component({
	templateUrl: 'build/pages/profile/profile.html',
	providers: [ ProfileService ]
})
export class ProfilePage {

	profile: Object;

	constructor(
		private nav: NavController,
		public profileService: ProfileService) {

		this.initializeProfile();
		
	}

	edit() {
		let modal = Modal.create(ProfileEditModal);

		this.nav.present(modal);
	}

	initializeProfile() {

	    this.profileService.load()
	      .then(data => {
	        this.profile = data;
	      })
	  }

}