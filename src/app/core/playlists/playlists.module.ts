import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PlaylistsComponent } from './playlists.component';
import { SharedModule } from '../../shared/shared.module';
import { SoundCloudService } from '../../shared/services/sound-cloud.service';

export const playlistsRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'playlists',
        component: PlaylistsComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(playlistsRoutes),
    SharedModule
  ],
  declarations: [
    PlaylistsComponent
  ],
  exports: [
    PlaylistsComponent
  ],
  providers:[
    SoundCloudService
  ]
})
export class PlaylistsModule { }
