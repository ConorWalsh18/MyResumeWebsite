import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

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

/*********************************************************************************************
// Add this back into main if you want to use the skill circle growing on scroll logic

else if (this.target[index].dataset.section == "skills") {
  // The circle container starts in an absolute position, then switches to fixed, then switches to absoulte right
  // before the bottom so it doesn't carry over to the contact page. Also need to switch back to absolute on scroll
  // up so the circle container doesn't go behind the image transition section.

  // Switch the circle container to fixed so it stays in a fixed position on the screen
  if (window.pageYOffset >= this.skillsSection.offsetTop && window.pageYOffset <= this.skillsSection.offsetTop + 100) {
    var circleTop = this.target[index].getBoundingClientRect();
    this.target[index].style.position = "fixed";
    this.target[index].style.top = "10vh";
  }
  // Switch the circle container to absolute so it doesn't carry over to the contact page
  else if (window.pageYOffset >= this.textTransitionSection.offsetTop - window.innerHeight) {
    this.target[index].style.position = "absolute";              
    var skillCircleTop = (this.textTransitionSection.offsetTop - this.skillsSection.offsetTop - window.innerHeight + 100) / 10;
    skillCircleTop = ((skillCircleTop / 4) + 100) - 8;
    this.target[index].style.top = skillCircleTop.toString() + 'vh';
  }
  else if (window.pageYOffset < this.skillsSection.offsetTop) {
    this.target[index].style.position = "absolute";
    this.target[index].style.top = "7.5vh";
  }
  else {
    this.target[index].style.position = "fixed";
    this.target[index].style.top = "10vh";              
  }
}
**********************************************************************************************/