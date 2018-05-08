import { Component } from '@angular/core';
import { NavController , AlertController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth.service';

@Component({
    selector: 'volunteer-registeration',
    templateUrl: 'volunteer-registeration.html'
})

export class VolunteerRegisterationPage{
    createSuccess = false;
    registerCredentials = { name: '', email: '', age: '',address: '', phoneNumber: '' , type: 'volunteer'};
    
      constructor(
        private nav: NavController,
        private auth: AuthServiceProvider,
        private alertCtrl: AlertController
    
      ) {}
    
      public register() {
          this.auth.register(this.registerCredentials).subscribe(success => {
            if (success) {
              this.createSuccess = true;
              this.showPopup("Success", "Account created.");
            } else {
              this.showPopup("Error", "Problem creating account.");
            }
          },
            error => {
              this.showPopup("Error", error);
            });
        
      }
    
      showPopup(title, text) {
        let alert = this.alertCtrl.create({
          title: title,
          subTitle: text,
          buttons: [
            {
              text: 'OK',
              handler: data => {
                if (this.createSuccess) {
                  this.nav.popToRoot();
                }
              }
            }
          ]
        });
        alert.present();
      }

}