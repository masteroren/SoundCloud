import { Component } from '@angular/core';
import { SoundCloudService } from '../../shared/services/sound-cloud.service';

@Component({
  selector: 'sc-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent {

  constructor(private scService: SoundCloudService) { }

  onSearch(value) {

    this.scService.getPlaylists(value);
  }

}
