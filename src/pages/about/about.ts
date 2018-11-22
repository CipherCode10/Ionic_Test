import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from '@angular/fire/database-deprecated';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  peopleList: FirebaseListObservable<any>; 



  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

    this.peopleList = db.list('/people')

  }

  createPerson(name, lname, age, job)
  {
    this.peopleList.push({

      name : name,
      lname:lname,
      age:age,
      job:job

    }).then(newPerson => {

      this.navCtrl.push(HomePage);

    },error=>{console.log(error);});
  }

}
