import { Component } from '@angular/core';
import { Modal, ViewController, NavController, Alert } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

import { User } from '../../models/user';
import { TabsPage } from '../../pages/tabs/tabs';
import { AuthService } from '../../providers/auth-service/auth-service';
import { ProfileEditModal } from '../profile-edit/profile-edit';


@Component({
	templateUrl: 'build/modals/sign-up/sign-up.html',
	providers: [ AuthService ]
})
export class SignUpModal {

	submitted: boolean = false;
	isLoggedIn: boolean = false;
	user = new User('','');
	error: any;

	constructor(
		private viewCtrl: ViewController,
		private nav: NavController,
		private authService: AuthService) { 
	}

	cancel() {
	    this.viewCtrl.dismiss(); 
	}

	openUrl(url) {
		InAppBrowser.open(url);
	}

	submit(user:User) {
		this.submitted = true;
		this.authService.signUp(user)
			.then(res => {
				let alert = Alert.create({
					title: 'Sign Up',
					message: 'Sign-up instructions has been sent to your email.',
					buttons: [{
						text: 'Ok',
						handler: () => {
							this.cancel();
						}
					}]
				});
				this.nav.present(alert);
				//this.nav.push(TabsPage);
			})
			.catch(error => {
				// let alert = Alert.create({
				// 		title: error,
				// 		buttons: ['Ok']
				// 	});
				// 	this.nav.present(alert);
				this.error = error;
				this.handleError('Please try again..', 'The email has already been taken.');
			});
		// if(user.email == '') {
			
		// } else {

		// }
	}

	handleError(title, message) {
		let alert = Alert.create({
			title: title,
			message: message,
			buttons: ['Ok']
		});
		this.nav.present(alert);
	}
}