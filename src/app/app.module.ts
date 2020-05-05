import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './coponents/header/header.component';
import { FooterComponent } from './coponents/footer/footer.component';
import { AppRoutingModule } from './app-routing.modules';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [AppRoutingModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
