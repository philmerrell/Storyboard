import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.page.html',
  styleUrls: ['./opportunities.page.scss'],
})
export class OpportunitiesPage implements OnInit {

  opportunities = [
    {
      title: 'La Bienvenida a Boise State',
      type: 'Event',
      image: '',
      date: '2019-08-24',
      source: 'Student Life',
      // tslint:disable-next-line:max-line-length
      description: 'This welcome is for Spanish-speaking students and families and will provide an opportunity to meet with Spanish-speaking representatives from Financial Aid, Registrar’s Office, Advising and Academic Support Center, Student Involvement, and the Career Center. '
    },
    {
      title: 'PT 310: Workplace Wellness and Health Promotion',
      type: 'Course',
      image: '',
      source: 'Registrar',
      date: '2019-08-24',
      description: 'Focuses on the skills needed to create, implement, and evalute workplace health promotion.'
    },
    {
      title: 'Community Ambassador - Off Campus Student Services',
      type: 'Employment',
      image: '',
      source: 'Handshake',
      date: '2019-08-24',
      description: 'Off Campus Services provides support for students that live off-campus'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
