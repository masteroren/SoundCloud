import { Component } from '@angular/core';
import { SoundCloudService } from '../../shared/services/sound-cloud.service';

@Component({
  selector: 'sc-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent {

  public playlists: any[];

  constructor(private scService: SoundCloudService) { }

  onSearch(value) {
    this.scService.getPlaylists().subscribe((playlists: any[]) => {
      this.playlists = playlists.filter(item => {
        if (item.title.indexOf(value) !== -1) {
          return item;
        }
      });
    })
  }

}
