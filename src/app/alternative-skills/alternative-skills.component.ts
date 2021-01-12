import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alternative-skills',
  templateUrl: './alternative-skills.component.html',
  styleUrls: ['./alternative-skills.component.css']
})
export class AlternativeSkillsComponent implements OnInit {

  constructor() { }

  skillsText: string = "Skills & Tools";

  ngOnInit(): void {
    var lastScrollTop = 0;

    window.addEventListener('scroll', () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollingUp = false;

      if (scrollTop < lastScrollTop) {
        scrollingUp = true;
      }

      if ((window.pageYOffset >= window.innerHeight + 600 || scrollingUp) && window.pageYOffset <= ((window.innerHeight + 300) * 2)) {
        this.moveDots(true);                        
      }
      else if (window.pageYOffset >= ((window.innerHeight + 300)* 2)) {
        this.moveDots(false);
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
     });

     if (window.pageYOffset >= (window.innerHeight * 2)) {
      this.moveDots(false);
    };
        
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

  moveDots(animate: boolean) {
    var element = <unknown>document.getElementById("theMotionPath");
    var svgPath = <SVGPathElement>element;
    var svgPathLen = svgPath.getTotalLength();  
    var dots = document.getElementsByName("dot");                  

    for (var i = 0; i < dots.length; i++) {    
      var scrollPercentage = animate ? (document.documentElement.scrollTop - window.innerHeight - 600) / (window.innerHeight) : 1;      
      var pt = svgPath.getPointAtLength((scrollPercentage * Number(dots[i].dataset.rate)) * svgPathLen);
      dots[i].setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");             
    }
  }
}
