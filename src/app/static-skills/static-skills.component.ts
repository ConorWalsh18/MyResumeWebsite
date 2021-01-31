import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'static-skills',
  templateUrl: './static-skills.component.html',
  styleUrls: ['./static-skills.component.css']
})
export class StaticSkillsComponent implements OnInit {

  constructor() { }

  // skillsText: string = "Skills & Tools";
  skillsText: string = "Skills";
  skillsSection: any;
  textTransitionSection: any;
  circleContainer: any;
  circleContainerSize: any;

  ngOnInit(): void {
    this.skillsSection = document.getElementById("skillsSection");
    this.textTransitionSection = document.getElementById("textTransitionSection");
    var lastScrollTop = 0;

    var parallaxTransition = document.getElementById("parallaxImageTransition");    
    this.circleContainer = document.getElementById("container");
    this.circleContainerSize = $(this.circleContainer).height();

    // console.log("circle container size = ", this.circleContainerSize);

    var alreadyAnimated = false;
    this.animateDots(false);

    window.addEventListener('scroll', () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollingUp = false;      

      if (scrollTop < lastScrollTop) {
        scrollingUp = true;
      }

      if (!alreadyAnimated) {
        if (!scrollingUp
            && window.pageYOffset >= this.skillsSection.offsetTop - (window.innerHeight * 0.2)
            && window.pageYOffset < this.textTransitionSection.offsetTop) {
          this.animateDots(true);
          alreadyAnimated = true;
        }
        else if (scrollingUp && window.pageYOffset <= this.skillsSection.offsetTop) {
          this.animateDots(true);
          alreadyAnimated = true;
        }
      }
      else if (window.pageYOffset >= this.textTransitionSection.offsetTop
               || window.pageYOffset <= this.skillsSection.offsetTop - window.innerHeight
               && !scrollingUp) {
        this.animateDots(false);
        alreadyAnimated = false;
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    // Add the hover event listener to the buttons
    var dots = document.getElementsByClassName("button");
    for (var i = 0; i < dots.length; i++) {
      dots[i].addEventListener("mouseover", event => {        
        var activeDot = event.target as HTMLElement;
        var parent = activeDot.parentElement;
        this.skillsText = parent.dataset.text;
      });
  
      dots[i].addEventListener("mouseout", event => {
        // this.skillsText = "Skills & Tools";
        this.skillsText = "Skills";
      });
    }  
  }

  animateDots(animate: boolean) {
    var element = <unknown>document.getElementById("theMotionPath");
    var svgPath = <SVGPathElement>element;
    var svgPathLen = svgPath.getTotalLength();  
    var dots = document.getElementsByName("dot");
    
    var scrollPercentage = 0;        
    var perSecond = 0.018;
    
    if (!animate) {
      for (var i = 0; i < dots.length; i++) {
        var pt = svgPath.getPointAtLength((0 * Number(dots[i].dataset.rate)) * svgPathLen);
        dots[i].setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
      }
    }
    else {
      function update(){
        scrollPercentage += perSecond;
          
        if (scrollPercentage > 1) {
          scrollPercentage = 1;
          clearInterval(interval);
        }
  
        for (var i = 0; i < dots.length; i++) {
          var pt = svgPath.getPointAtLength((scrollPercentage * Number(dots[i].dataset.rate)) * svgPathLen);
          dots[i].setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
        }
      }
      
      var interval = setInterval(update, 18);
    }
  }
}