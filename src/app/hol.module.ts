import {BrowserModule} from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {HolRoutingModule} from './hol-routing.module';
import {HolComponent} from './hol.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

const holProviders = [];

@NgModule({
  declarations: [
    HolComponent
  ],
  imports: [
    BrowserModule,
    HolRoutingModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [HolComponent]
})
export class HolModule {
}

export class HolSharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: HolModule,
      providers: holProviders
    };
  }
}
