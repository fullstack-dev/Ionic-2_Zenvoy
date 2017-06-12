import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MessagingItemPage } from '../messaging-item/messaging-item';
import { MessagingService } from '../../providers/messaging-service/messaging-service';
@Component({
	templateUrl: 'build/pages/messaging/messaging.html',
	providers: [ MessagingService ]
})
export class MessagingPage {
	messages: any;

	constructor(
		private nav: NavController,
		private messagingService: MessagingService) {
		
		this.initializeMessaging();
	}

	initializeMessaging() {
		this.messagingService.load()
			.then(data => {
				this.messages = data
			})
	}

	showMessage() {
		this.nav.push(MessagingItemPage);
	}
}