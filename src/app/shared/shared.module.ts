import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    InputTextModule,
    ListboxModule,
    ButtonModule,
    ProgressSpinnerModule
  ],
  declarations: [SearchComponent],
  exports: [
    SearchComponent
  ]
})
export class SharedModule { }
