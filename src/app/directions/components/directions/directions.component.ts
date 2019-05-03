import { Component, OnInit } from '@angular/core';
import { DirectionService } from '../../../core/services/direction.service';
import { Direction } from '../../../core/models/direction.model';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss'],
})
export class DirectionsComponent implements OnInit {

  directions: Direction[] = [];

  constructor(private courseService: DirectionService) {
  }

  ngOnInit() {
    this.courseService.getCourses()
      .toPromise()
      .then(directions => {
        this.directions = directions;
      });
  }

}
