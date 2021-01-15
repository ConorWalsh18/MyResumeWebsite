import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      var elements = document.getElementsByClassName("text-transition");

      for (var i = 0; i < elements.length; i++) {
        if (elements[i].id == "partial" && this.isElementInView(elements[i], false)) {
          elements[i].classList.add("show")
        }
        if (elements[i].id != "partial" && this.isElementInView(elements[i], true)) {
          elements[i].classList.add("show")
        }
        // Figure out a better way to remove the class
        // else if (this.isElementInView(elements[i], false)) {
        //   elements[i].classList.remove("show")
        // }
      }
    });
  }

  // Make this a global function and use this for all future in view checks
  isElementInView(element, fullyInView) {
    // If we want to check and see if the element is partially in the view then pass false in for fullyInView
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();
    
    // Checks if the element is fully in the view
    if (fullyInView === true) {
        return ((pageTop < elementTop) && (pageBottom > elementBottom));
    }
    // Checks if the element is partially in the view
    else {
        return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
    }
  }
}
