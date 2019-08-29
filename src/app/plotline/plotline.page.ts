import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-plotline',
  templateUrl: './plotline.page.html',
  styleUrls: ['./plotline.page.scss'],
})
export class PlotlinePage implements OnInit {
  title;
  terms = [];

  constructor(private photoService: PhotoService) {  }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  setTitle({ target, visible }: { target: Element; visible: boolean }, term: string) {
    console.log(target, visible);
    if (!visible) {
      this.title = term;
    }
  }

  takePicture() {
    this.photoService.takePicture();
  }

}
