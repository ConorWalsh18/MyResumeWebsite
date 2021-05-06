import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FadeAndMoveInService {

  constructor() { }

  scrollingUp: boolean = false;

  start(elements) {
    for (var i = 0; i < elements.length; i++) {
      if (this.isElementInView(elements[i])) {
        elements[i].classList.add("show")
      }
    }

    var lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.scrollingUp = false;

      if (scrollTop < lastScrollTop) {
        this.scrollingUp = true;
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }

  isElementInView(element) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();
    var partial = element.dataset.partial;

    // Checks if the element is fully in the view
    if (!partial) {
      return ((pageTop < elementTop) && (pageBottom > elementBottom));
    }
    // Checks if the element is partially in the view
    else {
      var elementHeight = $(element).height();
      
      if (this.scrollingUp) {
        elementTop = $(element).offset().top + (elementHeight / 2);
      }
      else {
        elementTop = $(element).offset().top - (elementHeight / 1.5);
      }

      elementBottom = elementTop + $(element).height();
      
      // if (element.dataset.test) {
      //   console.log("elementHeight = ", elementHeight)
      //   console.log("pageTop = ", pageTop);
      //   console.log("elementTop = ", elementTop);
      //   console.log("pageBottom = ", pageBottom);
      //   console.log("elementBottom = ", elementBottom);
      //   console.log("pageTop < elementTop = ", pageTop < elementTop);
      //   console.log("pageBottom > elementBottom = ", pageBottom > elementBottom);
      // }
            
      return ((pageTop < elementTop) && (pageBottom > elementBottom));      
    }
  }
}
