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
    var skillsSection = document.getElementById("skillsSection");
    var lastScrollTop = 0;

    window.addEventListener('scroll', () => {
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // var scrollingUp = false;

      // if (scrollTop < lastScrollTop) {
      //   scrollingUp = true;
      // }      

      // if ((window.pageYOffset >= window.innerHeight + 1100 || scrollingUp) && window.pageYOffset <= ((window.innerHeight + 550) * 2)) {
      //   this.moveDots(true);                        
      // }
      // else if (window.pageYOffset >= ((window.innerHeight + 550)* 2)) {
      //   this.moveDots(false);
      // }
      
      // lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
     });

    var delay = 1.35;    
    var element = <unknown>document.getElementById("theMotionPath");
    var dots = document.getElementsByName("dot");
    var svgPath = <SVGPathElement>element;
    var svgPathLen = svgPath.getTotalLength();

    for (var i = 0; i < dots.length; i++) {
      dots[i].addEventListener("mouseover", event => {        
        var activeDot = event.target as HTMLElement;
        var parent = activeDot.parentElement;
        this.skillsText = parent.dataset.text;
      });
  
      dots[i].addEventListener("mouseout", event => {
        this.skillsText = "Skills & Tools";
      });

      delay -= 0.16875;

      if (dots[i].id != "firstDot") {
        var pt = svgPath.getPointAtLength((1 * Number(dots[i].dataset.rate)) * svgPathLen);
        dots[i].setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
        dots[i].setAttribute("style", "transition-delay:" + delay + "s");
      }

      dots[i].classList.add("show");
    }
  }  
}
