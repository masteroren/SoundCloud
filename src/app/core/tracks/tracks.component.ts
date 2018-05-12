import { Component } from '@angular/core';
import { SoundCloudService } from '../../shared/services/sound-cloud.service';

@Component({
  selector: 'sc-traks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent {

  public tracks: any[];

  constructor(private scService: SoundCloudService) { }

  onSearch(value) {
    this.scService.getTracks().subscribe((tracks: any[]) => {
      this.tracks = tracks.filter(item => {
        if (item.title.indexOf(value) !== -1) {
          return item;
        }
      });
    })
  }

}
