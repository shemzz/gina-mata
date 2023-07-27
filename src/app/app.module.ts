import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ApplyButtonComponent } from './components/apply-button/apply-button.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ProgramStreamsComponent } from './components/program-streams/program-streams.component';
import { SocialsComponent } from './components/socials/socials.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartnersComponent } from './components/partners/partners.component';
import { FaqItemComponent } from './components/faq-item/faq-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    HeroSectionComponent,
    ApplyButtonComponent,
    LocationsComponent,
    ProgramStreamsComponent,
    SocialsComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    PartnersComponent,
    FaqItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
