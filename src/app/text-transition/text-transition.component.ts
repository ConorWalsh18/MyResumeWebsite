import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-transition',
  templateUrl: './text-transition.component.html',
  styleUrls: ['./text-transition.component.css']
})
export class TextTransitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var textElements = document.getElementsByName("text");
    var lastScrollTop = 0;

    window.addEventListener('scroll', () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollingUp = false;

      if (scrollTop < lastScrollTop) {
        scrollingUp = true;
      }      

      for (var i = 0; i < textElements.length; i++) {
        if (this.isElementInView(textElements[i], false)) {
          textElements[i].classList.add("show-text");
        }
        else if (!this.isElementInView(textElements[i], true)) {
          textElements[i].classList.remove("show-text");
        }
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;    
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
}
