import { Component, OnInit } from '@angular/core';
// import { FadeAndMoveInService } from '../fade-and-move-in.service';

@Component({
  selector: 'arrow-transition',
  templateUrl: './arrow-transition.component.html',
  styleUrls: ['./arrow-transition.component.css']
})
export class ArrowTransitionComponent implements OnInit {

  // constructor(private fadeAndMoveIn: FadeAndMoveInService) { }
  constructor() { }

  finalArrow: any;
  showArrowTransition: boolean = true;

  ngOnInit(): void {
    var arrowSection = document.getElementById("arrowSection");
    var aboutMeSection = document.getElementById("aboutMeSection");
    var elements = arrowSection.getElementsByClassName("fade-and-move-in");

    window.addEventListener('scroll', () => {
      if (this.isElementInView(arrowSection)) {
        this.showArrowTransition = true;
        this.finalArrow.classList.add("arrow-transition");
        // this.fadeAndMoveIn.start(elements);
      }
      // else {
      //   for (var i = 0; i < elements.length; i++) {
      //     elements[i].classList.remove("show")
      //   }
      // }
    });

    this.finalArrow = document.getElementById("finalArrow");

    this.finalArrow.addEventListener('animationiteration', () => {
      if (window.pageYOffset > aboutMeSection.offsetTop - 200) {
        this.showArrowTransition = false;
        this.finalArrow.classList.remove("arrow-transition");
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