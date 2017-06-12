import { Component } from '@angular/core';
import { Modal, NavController, ViewController, Alert } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { AuthService } from '../../providers/auth-service/auth-service';

@Component({ 
	templateUrl: 'build/modals/forgot-pass/forgot-pass.html'
})
export class ForgotPassModal {

	email: string;
	// apiUrl: string = 'http://local.zenvoy.net:8888/api';
	// apiUrl: string = 'http://dev.zenvoy.net/api';
	contentHeader: Headers = new Headers({"Content-Type": "application/json"});

	constructor(
		private http: Http,
		private viewCtrl: ViewController,
		private nav: NavController,
		private authService: AuthService
	) { }

	cancel() {
		this.viewCtrl.dismiss();
	}

	submit(email) {

		if(email) {
		    this.authService.resetPass(email)
		    	.then(res => {
		    		let alert = Alert.create({
						title: 'Lost Password',
						message: 'Instructions for loggin in have been emailed to you.',
						buttons: [{
							text: 'Ok',
							handler: () => {
								this.cancel();
							}
						}]
					});
					this.nav.present(alert);
		    	})
		    	.catch(error => {
		    		let alert = Alert.create({
						title: error,
						buttons: ['Ok']
					});
					this.nav.present(alert);
		    	});
		} else {
			let alert = Alert.create({
				title: 'Please enter a valid email.',
				buttons: ['Ok']
			});
			this.nav.present(alert);
		}
	}
}