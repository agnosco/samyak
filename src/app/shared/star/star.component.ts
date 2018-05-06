import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

  @Input() rating;
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.ratingClicked.emit(`${this.rating} was clicked`);
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

}
