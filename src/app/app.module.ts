import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { TopBarComponent } from './core/layout/top-bar/top-bar.component';
import { SideBarComponent } from './core/layout/side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PlaylistsModule } from './core/playlists/playlists.module';
import { TracksModule } from './core/tracks/tracks.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PlaylistsModule,
    TracksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
