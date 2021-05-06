import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from 'src/app/fade-and-move-in.service';

@Component({
  selector: 'about-me-refactor',
  templateUrl: './about-me-refactor.component.html',
  styleUrls: ['./about-me-refactor.component.css']
})
export class AboutMeRefactorComponent implements OnInit {

  constructor(private fadeAndMoveIn: FadeAndMoveInService) { }

  ngOnInit(): void {
    var aboutMeSection = document.getElementById("aboutMeSection");
    var elements = aboutMeSection.getElementsByClassName("fade-and-move-in");

    window.addEventListener('scroll', () => {      
      //TODO: Fix when the "show" class is removed
      if (window.pageYOffset > aboutMeSection.offsetTop + window.innerHeight - 20 || window.pageYOffset < aboutMeSection.offsetTop / 2) {
          for (var i = 0; i < elements.length; i++) {
            // elements[i].classList.remove("show")
          }
      }
      else {
        this.fadeAndMoveIn.start(elements);
      }
    });
  }
}