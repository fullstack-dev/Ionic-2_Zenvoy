import { Component} from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { StatusBar } from 'ionic-native';

import { LoginPage } from './pages/login/login';
import { TabsPage } from './pages/tabs/tabs';
import { AuthService } from './providers/auth-service/auth-service';
 
@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [AuthService]
})
export class MyApp {

  private rootPage:any;

  constructor(
    private platform:Platform,
    private authService: AuthService) {
    
    this.detectRootPage();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // OneSinal push service init
      
      // Enable to debug issues
      // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
      let appId = "c096f797-dc8f-4d56-bb8c-7c6a47441ce3";
      let googleProjectNumber = "117457979901";
      let notificationOpenedCallback = (jsonData) => {
        
        console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
                
        // // Redirect to another page
        // let nav = this.app.getComponent('nav');
        // nav.setRoot(AnotherPage);
        
      }
      
      window['plugins'].OneSignal.init(appId, {googleProjectNumber: googleProjectNumber}, notificationOpenedCallback);

      // Show an alert box if a notification comes in when the user is using the app
      window['plugins'].OneSignal.enableInAppAlertNotification(true);

      StatusBar.styleDefault();
    });
  }

  // detect what page to show
  detectRootPage() {
   
    this.authService.check()
      .then(res => {
        if(res) {
          this.rootPage = TabsPage;
        } 
        else {
           this.rootPage = LoginPage;
        }
      })
      .catch(error => {
         this.rootPage = LoginPage;
      });

  }

  // dummy auth, toggle true or false to enable login screen
  checkAuth(isLoggedIn: boolean) {
    return isLoggedIn; // dummy data
  }
}

ionicBootstrap(MyApp)
