import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker } from '../../../interfaces/speakers.interface';
import { SpeakersService } from './speakers.service';

@Component({
  selector: 'app-speakers-list',
  template: `
    <h3>Houses</h3>
    <ul>
      <li *ngFor="let speaker of speakers$ | async">
        <img [src]="speaker.image" class="house-img"  alt="image" />
        <span>{{ speaker.name }} - {{ speaker.talk }}</span>
      </li>
    </ul>
  `,
  styles: [
    `
      ul {
        margin: 16px;
      }
      li {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style-type: none;
        margin-bottom: 8px;
      }
      span {
        margin-left: 8px;
      }
      .house-img {
          width: 500px;
          height: 300px;
      }
    `
  ]
})
export class SpeakersListComponent implements OnInit {
  speakers$: Observable<Speaker[]>;

  constructor(private speakersService: SpeakersService) {
    this.speakers$ = this.speakersService.getSpeakers();
  }

  ngOnInit() {}
}
