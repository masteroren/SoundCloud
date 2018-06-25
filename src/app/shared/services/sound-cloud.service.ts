import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

var SC = require('soundcloud');

@Injectable()
export class SoundCloudService {

  public searchCompleted = new Subject();

  constructor() {
    SC.initialize({
      client_id: 'e59d8b005900e38649c1882b87cd828d'
    });
  }

  getPlaylists(query: string) {

    SC.get(`/playlists`, {
      representation: 'compact',
      q: query,
      limit: 10,
      linked_partitioning: 1
    }).then(result => {
      this.searchCompleted.next({
        collection: result['collection'],
        nextHref: result['next_href'],
        url: '/playlists'
      });
    });

  }

  getTracks(query: string) {

    SC.get(`/tracks`, {
      q: query,
      limit: 10,
      linked_partitioning: 1
    }).then(result => {
      this.searchCompleted.next({
        collection: result['collection'],
        nextHref: result['next_href'],
        url: '/tracks'
      });
    })

  }

  getNextPartition(url: string, nextHref: string) {
    
    let paramsArr = nextHref.split('?')[1].split('&');

    let params = {};
    paramsArr.forEach(param => {
      const paramArr = param.split('=');
      params[paramArr[0]] = paramArr[1];
    })

    SC.get(url, params).then(result => {
      this.searchCompleted.next({
        collection: result['collection'],
        nextHref: result['next_href'],
        url: url
      });
    })
  }

}
