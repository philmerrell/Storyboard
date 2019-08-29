import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  @ViewChild('slides', { static: false })slides: IonSlides;
  slideOpts = {
  };
  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modal.dismiss();
  }

  next() {
    this.slides.slideNext();
  }

}
