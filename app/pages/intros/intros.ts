import { Component } from '@angular/core';
import { Modal, NavController } from 'ionic-angular';

import { FeedbackPage } from '../feedback/feedback';
import { AlreadyKnowModal } from '../../modals/already-know/already-know';
import { IntrosService } from '../../providers/intros-service/intros-service';

@Component({
  templateUrl: 'build/pages/intros/intros.html',
  providers: [ IntrosService ]
})
export class IntrosPage {
  intros: any;

  constructor(
    private nav: NavController,
    public introsService: IntrosService) {
      this.initializeIntros();
  }

  initializeIntros() {
    this.introsService.load()
      .then(data => {
        this.intros = data;
      })
  }

  showFeedbackModal() {
	  this.nav.push(FeedbackPage);
  }

  showAlreadyKnowModal() {
  	let modal = Modal.create(AlreadyKnowModal);
	  this.nav.present(modal);
  }
}
