import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../models/user";
import {RegisterPage} from "../register/register";
import {AngularFireAuth} from "angularfire2/auth"
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
user ={} as User;
  constructor(private fauth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  login(user:User) {
    try {
     const result= this.fauth.auth.signInWithEmailAndPassword(user.email, user.password);
     console.log(result);
     this.navCtrl.setRoot(HomePage);
    }
    catch(e){
      console.error(e);
    }
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }


}
