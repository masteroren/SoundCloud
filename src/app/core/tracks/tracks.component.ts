import { Component } from '@angular/core';
import { SoundCloudService } from '../../shared/services/sound-cloud.service';

@Component({
  selector: 'sc-traks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent {

  constructor(private scService: SoundCloudService) { }

  onSearch(value) {

    this.scService.getTracks(value);

  }

}
