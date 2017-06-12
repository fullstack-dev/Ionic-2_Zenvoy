import { Component, Input } from '@angular/core';
import { NavController, Modal, Alert } from 'ionic-angular';

import { User } from '../../models/user';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../providers/auth-service/auth-service';
import { ForgotPassModal } from '../../modals/forgot-pass/forgot-pass';
import { SignUpModal } from '../../modals/sign-up/sign-up';

@Component({
	templateUrl: 'build/pages/login/login.html',
	providers: [ AuthService ]
})
export class LoginPage {

	submitted: boolean = false;
	isLoggedIn: boolean = false;
	user = new User('','');
	error: any;

	constructor(
		private nav: NavController, 
		private authService: AuthService) {

	}

	login(user: User) {
		
	    this.submitted = true;
	    this.authService.login(user)
	    	.then(res => {
	    		this.nav.push(TabsPage);
	    	})
	    	.catch(error => { 
	    		this.error = error;
	    		this.handleError('Please try again..', 'Invalid Email or Password');
	    	});
	}

	showForgotPassModal() {
		let modal = Modal.create(ForgotPassModal);
		this.nav.present(modal);
	}

	showSignUpModal() {
		let modal = Modal.create(SignUpModal);
		this.nav.present(modal);
	}

	handleError(title, message) {
		let alert = Alert.create({
			title: title,
			message: message,
			buttons: ['OK']
		});
		this.nav.present(alert);
	}
	
	get diagnostic() { return JSON.stringify(this.user); }

}