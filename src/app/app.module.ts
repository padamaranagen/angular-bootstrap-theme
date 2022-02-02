import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NpHeaderComponent } from './np-header/np-header.component';
import { NpPageNotFoundComponent } from './np-page-not-found/np-page-not-found.component';
import { NpFooterComponent } from './np-footer/np-footer.component';
import { NpHomeComponent } from './np-home/np-home.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NpHeaderComponent,
    NpPageNotFoundComponent,
    NpFooterComponent,
    NpHomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
