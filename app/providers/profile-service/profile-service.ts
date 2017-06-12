import { Injectable } from '@angular/core';
import { Storage, LocalStorage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProfileService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProfileService {
  local: Storage = new Storage(LocalStorage);
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
        // don't have the data yet
    return new Promise(resolve => {

      this.local.get('profile')
        .then(data => {
          var memberId;
          memberId = data;
          this.http.get('http://dev.zenvoy.net/api/v2/users/'+ memberId +'/profile')
            .map(res => res.json())
            .subscribe(data => {
              // we've got back the raw data, now generate the core schedule data
              // and save the data for later reference
              this.data = data;
              resolve(this.data);
            });
        });
    });

  }
}

