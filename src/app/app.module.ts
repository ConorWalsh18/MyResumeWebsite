import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlockRevealComponent } from './block-reveal/block-reveal.component';
import { AlternativeLandingPageComponent } from './alternative-landing-page/alternative-landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { AlternativeSkillsComponent } from './alternative-skills/alternative-skills.component';
import { ContactComponent } from './contact/contact.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import * as $ from 'jquery';
import { ArrowTransitionComponent } from './arrow-transition/arrow-transition.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LandingPageComponent,
    BlockRevealComponent,
    AlternativeLandingPageComponent,
    AboutMeComponent,
    SkillsComponent,
    AlternativeSkillsComponent,
    ContactComponent,
    WorkExperienceComponent,
    ArrowTransitionComponent    
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
