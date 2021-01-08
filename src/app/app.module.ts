import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlockRevealComponent } from './block-reveal/block-reveal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LandingPageComponent,
    BlockRevealComponent    
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
