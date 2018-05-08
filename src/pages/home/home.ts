import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VictimRegisterationPage } from '../victim/victim-registeration';
import { VolunteerRegisterationPage } from '../volunteer/volunteer-registeration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {  }

  registerVictim(){
    console.log(`button has been clicked!`)
    this.navCtrl.push(VictimRegisterationPage);
  }

  registerVolunteer(){
    console.log(`button has been clicked!`)
    this.navCtrl.push(VolunteerRegisterationPage);
  }

}
