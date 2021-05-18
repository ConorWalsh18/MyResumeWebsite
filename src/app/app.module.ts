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
import { ResumeDownloadComponent } from './resume-download/resume-download.component';
import { TextTransitionComponent } from './text-transition/text-transition.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ImageTransitionComponent } from './image-transition/image-transition.component';
import { StaticSkillsComponent } from './static-skills/static-skills.component';
import { ResumeDownloadRefactorComponent } from './bootstrap-refactor/resume-download-refactor/resume-download-refactor.component';
import { AboutMeRefactorComponent } from './bootstrap-refactor/about-me-refactor/about-me-refactor.component';
import { ContactRefactorComponent } from './bootstrap-refactor/contact-refactor/contact-refactor.component';
import { HomePageRefactorComponent } from './bootstrap-refactor/home-page-refactor/home-page-refactor.component';
import { SkillsRefactorComponent } from './bootstrap-refactor/skills-refactor/skills-refactor.component';
import { NavigationBarRefactorComponent } from './bootstrap-refactor/navigation-bar-refactor/navigation-bar-refactor.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { MainRefactorComponent } from './bootstrap-refactor/main-refactor/main-refactor.component';


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
    ArrowTransitionComponent,
    ResumeDownloadComponent,
    TextTransitionComponent,
    NavigationBarComponent,
    ImageTransitionComponent,
    StaticSkillsComponent,
    ResumeDownloadRefactorComponent,
    AboutMeRefactorComponent,
    ContactRefactorComponent,
    HomePageRefactorComponent,
    SkillsRefactorComponent,
    NavigationBarRefactorComponent,
    PersonalProjectsComponent,
    MainRefactorComponent    
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
