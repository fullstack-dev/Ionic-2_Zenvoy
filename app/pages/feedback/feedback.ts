import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';

import { SupportModal } from '../../modals/support/support';

@Component({
  templateUrl: 'build/pages/feedback/feedback.html',
})
export class FeedbackPage {

  constructor(private nav: NavController) {

  }

  showSupportModal() {
    let modal = Modal.create(SupportModal);
    this.nav.present(modal);
  }
}
