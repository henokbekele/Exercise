import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  data = [{ id: 1, name: "henok", email: "hhhh@gam.com" }, { id: 2, name: "kidist", email: "kkk@gam.com" }];
  constructor() {
  }

  getdata() {
    return this.data;
  }

  getdataname(id) {
    for (let obj of this.data) {
      if (obj.id == id) {
        return obj.name;
      }
    }
    return null;
  }
 getdataemail(id) {
    for (let obj of this.data) {
      if (obj.id == id) {
        return obj.email;
      }
    }
    return null;
  }


}
