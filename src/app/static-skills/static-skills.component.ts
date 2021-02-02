import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'static-skills',
  templateUrl: './static-skills.component.html',
  styleUrls: ['./static-skills.component.css']
})
export class StaticSkillsComponent implements OnInit {

  constructor() { }

  skillsText: string = "Skills";
  skillsSection: any;
  textTransitionSection: any;
  showSkillsCircle: boolean = true;
  alreadyAnimated: any;  

  ngOnInit(): void {
    this.skillsSection = document.getElementById("skillsSection");
    this.textTransitionSection = document.getElementById("textTransitionSection");
    var lastScrollTop = 0;

    this.alreadyAnimated = false;

    window.addEventListener('scroll', () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollingUp = false;      

      if (scrollTop < lastScrollTop) {
        scrollingUp = true;
      }

      // console.log("skillsSection offsetTop = ", this.skillsSection.offsetTop);
      // console.log("window.pageYOffset = ", window.pageYOffset);
      // console.log("scrollingUp = ", scrollingUp);

      if (window.pageYOffset <= this.skillsSection.offsetTop - (window.innerHeight * 2)) {
          this.showSkillsCircle = false;
      }
      else {
        this.showSkillsCircle = true;
      
        if (!this.alreadyAnimated) {
          if (window.pageYOffset >= this.skillsSection.offsetTop - (window.innerHeight * 0.3) && window.pageYOffset < this.textTransitionSection.offsetTop - (window.innerHeight * 0.7)) {
            this.animateDots(true);
            this.alreadyAnimated = true;

            // Add the hover event listener to the buttons
            var dots = document.getElementsByClassName("button");            
            for (var i = 0; i < dots.length; i++) {
              dots[i].addEventListener("mouseover", event => {        
                var activeDot = event.target as HTMLElement;
                var parent = activeDot.parentElement;
                this.skillsText = parent.dataset.text;                
              });
          
              dots[i].addEventListener("mouseout", event => {
                this.skillsText = "Skills";
              });
            }
          }
        }
        else if (window.pageYOffset >= this.textTransitionSection.offsetTop || window.pageYOffset <= this.skillsSection.offsetTop - window.innerHeight) {
          this.showSkillsCircle = false;
          this.alreadyAnimated = false;
        }
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }

  animateDots(animate: boolean) {
    var element = <unknown>document.getElementById("theMotionPath");
    var svgPath = <SVGPathElement>element;
    var svgPathLen = svgPath.getTotalLength();

    //Changing this logic because getElementsByName is not working on Firefox
    // var dots = document.getElementsByName("dot");
    var dotElements = <unknown>document.querySelectorAll("g.button[name='dot']");
    var dots = dotElements as Array<HTMLElement>;

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