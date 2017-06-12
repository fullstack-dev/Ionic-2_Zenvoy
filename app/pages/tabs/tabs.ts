import {Component} from '@angular/core'
import {UpdatesPage} from '../updates/updates';
import {IntrosPage} from '../intros/intros';
import {NetworkPage} from '../network/network';
import {MessagingPage} from '../messaging/messaging';
import {MorePage} from '../more/more';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;
  private tab5Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = UpdatesPage;
    this.tab2Root = IntrosPage;
    this.tab3Root = NetworkPage;
    this.tab4Root = MessagingPage;
    this.tab5Root = MorePage;
  }
}
