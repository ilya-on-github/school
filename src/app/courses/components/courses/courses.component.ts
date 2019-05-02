import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {

  courses: { id: number, name: string }[] = [
    {
      id: 1,
      name: 'slalom',
    },
    {
      id: 2,
      name: 'slalom',
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
