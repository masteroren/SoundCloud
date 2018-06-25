import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SoundCloudService } from '../../services/sound-cloud.service';

@Component({
  selector: 'sc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public results: SelectItem[] = [];
  public loading: boolean = false;
  private nextHref: string;
  private url: string;

  @Input() public items: any[] = [];
  @Output() onSearch = new EventEmitter();

  constructor(private scService: SoundCloudService) {
    scService.searchCompleted.subscribe((data: { collection: any[], nextHref: string, url: string }) => {
      this.nextHref = data.nextHref;
      this.url = data.url;
      this.results = data.collection.map(x => {
        return {
          label: x.title,
          value: x.permalink,
          link: x.permalink_url
        };
      })
      this.loading = false;
    })
  }

  search(value) {
    this.loading = true;
    this.onSearch.emit(value);
  }

  next() {
    this.scService.getNextPartition(this.url, this.nextHref);
  }


}
