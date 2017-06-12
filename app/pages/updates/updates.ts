import { Component } from '@angular/core';
import { Modal, NavController } from 'ionic-angular';

import { FeedbackPage } from '../feedback/feedback';
import { UpdatesService } from '../../providers/updates-service/updates-service';

@Component({
	templateUrl: 'build/pages/updates/updates.html',
	providers: [ UpdatesService ]
})
export class UpdatesPage {

	updates: any;

	constructor(
		private nav: NavController,
		public updatesService: UpdatesService) {
		
		this.initializeUpdates();
	}

	initializeUpdates() {
		this.updatesService.load()
		.then(data => {
			this.updates = data;
		})
	}

	provideFeedback() {
		this.nav.push(FeedbackPage);
	}

	viewProfile() {
		
	}
}
