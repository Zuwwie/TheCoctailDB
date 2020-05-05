import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './coponents/header/header.component';
import { FooterComponent } from './coponents/footer/footer.component';
import { AppRoutingModule } from './app-routing.modules';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';
import { InfoComponent } from './pages/info/info.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, PageNotFoundComponent, MainComponent, InfoComponent],
  imports: [AppRoutingModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
