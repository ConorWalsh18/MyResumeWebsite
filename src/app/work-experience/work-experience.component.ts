import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from '../fade-and-move-in.service';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor(private fadeAndMoveIn: FadeAndMoveInService) { }

  ngOnInit(): void {
    var workExperienceSection = document.getElementById("workExperienceSection");
    var elements = workExperienceSection.getElementsByClassName("fade-and-move-in");

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > workExperienceSection.offsetTop + window.innerHeight || window.pageYOffset < workExperienceSection.offsetTop - window.innerHeight) {                      
          for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("show")
          }
      }
      else {
        this.fadeAndMoveIn.start(elements);
      }
    });
  }
}