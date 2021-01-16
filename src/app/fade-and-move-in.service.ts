import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FadeAndMoveInService {

  constructor() { }

  start(elements) {
    for (var i = 0; i < elements.length; i++) {
      if (this.isElementInView(elements[i])) {
        elements[i].classList.add("show")
      }
    }
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
        return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
    }
  }
}
