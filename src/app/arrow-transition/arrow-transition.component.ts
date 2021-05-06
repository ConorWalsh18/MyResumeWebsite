import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from '../fade-and-move-in.service';

@Component({
  selector: 'arrow-transition',
  templateUrl: './arrow-transition.component.html',
  styleUrls: ['./arrow-transition.component.css']
})
export class ArrowTransitionComponent implements OnInit {

  constructor(private fadeAndMoveIn: FadeAndMoveInService) { }

  finalArrow: any;
  showArrowTransition: boolean = true;

  ngOnInit(): void {
    var arrowSection = document.getElementById("arrowSection");
    var aboutMeSection = document.getElementById("aboutMeSection");
    var textElements = arrowSection.getElementsByClassName("fade-and-move-in");

    window.addEventListener('scroll', () => {      
      if (window.pageYOffset > arrowSection.offsetTop + window.innerHeight - 20 || window.pageYOffset < arrowSection.offsetTop / 2) {
        for (var i = 0; i < textElements.length; i++) {
          // textElements[i].classList.remove("show")
        }
      }
      else {
        this.showArrowTransition = true;
        this.finalArrow.classList.add("arrow-transition");
        this.fadeAndMoveIn.start(textElements);
      }
    });

    this.finalArrow = document.getElementById("finalArrow");

    this.finalArrow.addEventListener('animationiteration', () => {
      if (window.pageYOffset > aboutMeSection.offsetTop - 200) {
        this.showArrowTransition = false;
        this.finalArrow.classList.remove("arrow-transition");
      }
    });
  }
}