import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'static-skills',
  templateUrl: './static-skills.component.html',
  styleUrls: ['./static-skills.component.css']
})
export class StaticSkillsComponent implements OnInit {

  constructor() { }

  skillsText: string = "Skills & Tools";
  skillsSection: any;
  contactSection: any;
  circleContainer: any;
  circleContainerSize: any;

  ngOnInit(): void {
    this.skillsSection = document.getElementById("skillsSection");
    this.contactSection = document.getElementById("contactSection");
    var lastScrollTop = 0;

    var parallaxTransition = document.getElementById("parallaxImageTransition");    
    this.circleContainer = document.getElementById("container");
    this.circleContainerSize = $(this.circleContainer).height();

    // console.log("circle container size = ", this.circleContainerSize);

    window.addEventListener('scroll', () => {
      // console.log("document.documentElement.scrollTop = ", document.documentElement.scrollTop);

      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollingUp = false;

      if (scrollTop < lastScrollTop) {
        scrollingUp = true;
      }

      // Use this for the fade-in animation if we want to use it
      // if (window.pageYOffset >= parallaxTransition.offsetTop + this.circleContainerSize) {
      //   this.circleContainer.classList.add("show");
      // }
      // else {
      //   this.circleContainer.classList.remove("show");
      // }

      if ((window.pageYOffset >= this.skillsSection.offsetTop - (this.circleContainerSize * 0.25) || scrollingUp) && window.pageYOffset < this.contactSection.offsetTop) {
        this.moveDots(true);

        // var posY = window.pageYOffset * Number(this.circleContainer.dataset.ratey) * -1;
        // this.circleContainer.style.transform = 'rotate(-90deg) translate(0, -45%) translateX('+posY+'px)';
      }
      else if (window.pageYOffset >= this.contactSection.offsetTop) {
        this.moveDots(false);
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
     });
    
    if (window.pageYOffset >= this.contactSection.offsetTop) {
      this.moveDots(false);
    }
    else if (window.pageYOffset < this.skillsSection.offsetTop + 100) {
      this.moveDots(false, true);
    }
        
    var dots = document.getElementsByClassName("button");
    for (var i = 0; i < dots.length; i++) {
      dots[i].addEventListener("mouseover", event => {        
        var activeDot = event.target as HTMLElement;
        var parent = activeDot.parentElement;
        this.skillsText = parent.dataset.text;
      });
  
      dots[i].addEventListener("mouseout", event => {
        this.skillsText = "Skills & Tools";
      });
    }
  }

  moveDots(animate: boolean, above: boolean = false) {
    var element = <unknown>document.getElementById("theMotionPath");
    var svgPath = <SVGPathElement>element;
    var svgPathLen = svgPath.getTotalLength();  
    var dots = document.getElementsByName("dot");        

    for (var i = 0; i < dots.length; i++) {
      var scrollPercentage = animate ? (document.documentElement.scrollTop - (window.innerHeight * 4.25) - this.circleContainerSize) / (window.innerHeight) : 1;

      if (above) {
        scrollPercentage = 0;
      }

      if (scrollPercentage >= 1 ) {
        scrollPercentage = 1;
      }

      var pt = svgPath.getPointAtLength((scrollPercentage * Number(dots[i].dataset.rate)) * svgPathLen);
      dots[i].setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
    }
  }
}