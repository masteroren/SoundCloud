import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { Route, RouterModule } from '@angular/router';
import { TracksComponent } from './tracks.component';
import { SharedModule } from '../../shared/shared.module';
import { SoundCloudService } from '../../shared/services/sound-cloud.service';

export const tracksRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tracks',
        component: TracksComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tracksRoutes),
    SharedModule
  ],
  declarations: [
    TracksComponent
  ],
  exports: [
    TracksComponent
  ],
  providers:[
    SoundCloudService
  ]
})
export class TracksModule { }
