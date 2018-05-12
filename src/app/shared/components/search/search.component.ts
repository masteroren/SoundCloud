import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SoundCloudService } from '../../services/sound-cloud.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'sc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public results: SelectItem[] = [];
  public Loading: boolean;
  public showNext: boolean = false;
  private page: number = 1;

  @Output() onSearch = new EventEmitter();

  private _items: any[] = [];
  @Input()
  set items(res: any) {
    if (res) {
      this.Loading = false;
      this.showNext = res.length > 5;
      this._items = res;
      this.page = 1;
      this.next();
    }
  }

  get items() {
    return this._items;
  }

  search(value) {
    this.Loading = true;
    this.onSearch.emit(value);
  }

  next() {
    let start = (this.page - 1) * 5;
    if (start >= this._items.length) {
      this.page = 1;
      start = (this.page - 1) * 5;
    }

    this.results = this._items
      .map(item => {
        return {
          label: item.title,
          value: item.id
        }
      })
      .slice(start, start + 5);

    this.page += 1;
  }

}
