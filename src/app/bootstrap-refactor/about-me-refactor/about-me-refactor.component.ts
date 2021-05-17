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
      if (this.isElementInView(aboutMeSection)) {
        this.fadeAndMoveIn.start(elements);
      }
      else {
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove("show")
        }
      }      
    });
  }

  isElementInView(element) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();
    var partial = element.dataset.partial;
    var alwaysLoad = element.dataset.always;    
    
    // Checks if the element is partially in the view
    if (partial) {
      var elementHeight = $(element).height();
      elementTop = $(element).offset().top - (elementHeight / 1.5);
      elementBottom = elementTop + $(element).height();      
    }    

    if (alwaysLoad) {      
      return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
    }    
    else {            
      return ((pageTop < elementTop) && (pageBottom > elementBottom));
    }
  }
}