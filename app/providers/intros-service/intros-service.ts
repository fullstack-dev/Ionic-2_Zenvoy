import { Injectable } from '@angular/core';
import { Storage, LocalStorage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the IntrosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class IntrosService {
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

      this.local.get('user')
        .then(data => {
          var memberId;
          data = JSON.parse(data);
          memberId = data.member_id; // Eto may result
          this.http.get('http://dev.zenvoy.net/api/v2/users/'+ memberId +'/intros')
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

