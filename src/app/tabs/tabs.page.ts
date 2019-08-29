import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OnboardingPage } from '../onboarding/onboarding.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: OnboardingPage
    });
    return await modal.present();
  }

}
