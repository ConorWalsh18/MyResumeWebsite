import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from '../fade-and-move-in.service';

@Component({
  selector: 'personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent implements OnInit {

  constructor(private fadeAndMoveIn: FadeAndMoveInService) { }

  ngOnInit(): void {
    var projectSection = document.getElementById("projectSection");
    var elements = projectSection.getElementsByClassName("fade-and-move-in");
    this.fadeAndMoveIn.start(elements);    

    window.addEventListener('scroll', () => {
      if (this.isElementInView(projectSection)) {
        this.fadeAndMoveIn.start(elements);
      }
      else {
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove("show")
        }
      }
    });

    var cards = document.querySelectorAll(".project-card");
    cards.forEach(function(card) {
      card.addEventListener("click", function() {        
        card.classList.toggle("is-flipped");
      });
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
