import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from '../../fade-and-move-in.service';

@Component({
  selector: 'resume-download-refactor',
  templateUrl: './resume-download-refactor.component.html',
  styleUrls: ['./resume-download-refactor.component.scss']
})
export class ResumeDownloadRefactorComponent implements OnInit {

  constructor(private fadeAndMoveIn: FadeAndMoveInService) { }

  ngOnInit(): void {
    var resumeSection = document.getElementById("resumeSection");
    var resumeTextContainer = document.getElementById("resumeTextContainer");
    var elements = resumeSection.getElementsByClassName("fade-and-move-in");
    var hands = resumeSection.getElementsByClassName("hands");

    window.addEventListener('scroll', () => {
      if (!this.isElementInView(resumeTextContainer, true)) {
          for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("show")
          }
      }
      else {
        this.fadeAndMoveIn.start(elements);
      }

      if (window.pageYOffset >= resumeSection.offsetTop) {
        for (var i = 0; i < hands.length; i++) {
          hands[i].classList.add("move")
        }
      }
      else if (window.pageYOffset >= resumeSection.offsetTop - window.innerHeight && window.pageYOffset < resumeSection.offsetTop) {
        for (var i = 0; i < hands.length; i++) {
          hands[i].classList.remove("move")
        }
      }
    });
  }

  isElementInView(element, partial) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    // Checks if the element is fully in the view
    if (!partial) {
        return ((pageTop < elementTop) && (pageBottom > elementBottom));
    }
    // Checks if the element is partially in the view
    else {
        return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
    }
  }

  downloadResume() {
    alert("Resume not available yet.");
  }
}