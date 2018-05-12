import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'playlists'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
