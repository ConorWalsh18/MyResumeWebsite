import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from 'src/app/fade-and-move-in.service';

@Component({
  selector: 'main-refactor',
  templateUrl: './main-refactor.component.html',
  styleUrls: ['./main-refactor.component.css']
})
export class MainRefactorComponent implements OnInit {
  
  constructor(private fadeAndMoveIn: FadeAndMoveInService) { }  

  aboutMeSection: any;
  workExperienceSection: any;
  skillsSection: any;
  textTransitionSection: any;
  contactSection: any;

  ngOnInit(): void {    
    // this.aboutMeSection = document.getElementById("aboutMeSection");
    // this.skillsSection = document.getElementById("skillsSection");
    // this.workExperienceSection = document.getElementById("workExperienceSection");
    // this.contactSection = document.getElementById("contactSection");
    // this.textTransitionSection = document.getElementById("textTransitionSection");

    var elements = document.getElementsByClassName("fade-and-move-in");

    window.addEventListener('scroll', () => {
      this.fadeAndMoveIn.start(elements);
    });
  }
}
