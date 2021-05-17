import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from 'src/app/fade-and-move-in.service';

@Component({
  selector: 'skills-refactor',
  templateUrl: './skills-refactor.component.html',
  styleUrls: ['./skills-refactor.component.css']
})
export class SkillsRefactorComponent implements OnInit {

  constructor(private fadeAndMoveIn: FadeAndMoveInService) { }

  skillsTopText: string = "Hover on an icon";
  skillsBottomText: string = "for more info";
  skillsSection: any;
  showSkillsCircle: boolean = true;
  alreadyAnimated: any;  

  ngOnInit(): void {
    this.skillsSection = document.getElementById("skillsSection");
    var elements = this.skillsSection.getElementsByClassName("fade-and-move-in");
    this.alreadyAnimated = false;
    // this.fadeAndMoveIn.start(elements);

    window.addEventListener('scroll', () => {
      // if (this.isElementInView(this.skillsSection)) {
      //   this.fadeAndMoveIn.start(elements);
      // }
      // else {
      //   for (var i = 0; i < elements.length; i++) {
      //     elements[i].classList.remove("show")
      //   }
      // }

      this.fadeAndMoveIn.start(elements);

      var container = document.getElementById("container");
      if (this.isElementInView(container) && !this.alreadyAnimated) {
        this.animateDots(true);

        // Add the hover event listener to the buttons
        var dots = document.getElementsByClassName("button");            
        for (var i = 0; i < dots.length; i++) {
          dots[i].addEventListener("mouseover", event => {
            var activeDot = event.target as HTMLElement;
            var parent = activeDot.parentElement;
            this.skillsTopText = parent.dataset.text;
            document.getElementById("bottom-text").classList.add("experience-text");
            this.skillsBottomText = "Experience: " + parent.dataset.bottomText;
          });
      
          dots[i].addEventListener("mouseout", event => {
            this.skillsTopText = "Hover on an icon";
            document.getElementById("bottom-text").classList.remove("experience-text");
            this.skillsBottomText = "for more info";
          });
        }
      }      
    });
  }

  animateDots(animate: boolean) {    
    var element = <unknown>document.getElementById("theMotionPath");
    var svgPath = <SVGPathElement>element;
    var svgPathLen = svgPath.getTotalLength();

    //Changing this logic because getElementsByName is not working on Firefox
    //var dots = document.getElementsByName("dot");
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

    this.alreadyAnimated = true;
  }

  isElementInView(element) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();
    var alwaysLoad = element.dataset.always;

    if (alwaysLoad) {      
      return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
    }    
    
    return ((pageTop < elementTop) && (pageBottom > elementBottom));    
  }
}