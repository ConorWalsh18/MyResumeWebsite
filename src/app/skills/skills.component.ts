import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  skillsText: string = "Skills & Tools";

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      console.log("inner height = ", window.innerHeight);

      if (window.pageYOffset <= (window.innerHeight * 2)) {
      // if (window.pageYOffset >= window.innerHeight + 400 && window.pageYOffset <= ((window.innerHeight + 200) * 2)) {
        this.moveDots(true);
                
        console.log("in skills");        
        console.log("window.pageYOffset = ", window.pageYOffset);
      }
      else {
      // else if (window.pageYOffset >= (window.innerHeight * 2) + 500) {
        this.moveDots(false);
      }
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
      var scrollPercentage = animate ? (document.documentElement.scrollTop - window.innerHeight) / (window.innerHeight) : 1;
      
      // console.log(scrollPercentage);
      // console.log("scrollTop = ", document.documentElement.scrollTop);
      // console.log("window.innerHeight = ", window.innerHeight);

      var pt = svgPath.getPointAtLength((scrollPercentage * Number(dots[i].dataset.rate)) * svgPathLen);
      dots[i].setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");             
    }
  }
}
