import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './coponents/header/header.component';
import { FooterComponent } from './coponents/footer/footer.component';
import { AppRoutingModule } from './app-routing.modules';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';
import { InfoComponent } from './pages/info/info.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { MissingComponent } from './pages/missing/missing.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    MainComponent,
    InfoComponent,
    BrowseComponent,
    MissingComponent,
    AboutComponent,
    FaqComponent,
    ContactComponent,
  ],
  imports: [AppRoutingModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
