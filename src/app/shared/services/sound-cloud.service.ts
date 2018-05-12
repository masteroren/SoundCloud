import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class SoundCloudService {

  constructor(private http: HttpClient) { }

  getPlaylists() {
    return this.http.get(`${environment.api}playlists?client_id=${environment.childId}`);
  }
  
  getTracks() {
    return this.http.get(`${environment.api}tracks?client_id=${environment.childId}`);
  }

}
