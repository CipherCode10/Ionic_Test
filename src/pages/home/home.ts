import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase ,FirebaseListObservable } from '@angular/fire/database-deprecated';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  persons :FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

    this.persons=db.list('/people')

  }



}
