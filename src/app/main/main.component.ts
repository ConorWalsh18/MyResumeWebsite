import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  target: any;
  stopSwinging: boolean = false;
  isScrolling: any;
  aboutMeSection: any;
  workExperienceSection: any;
  skillsSection: any;
  textTransitionSection: any;
  contactSection: any;

  ngOnInit(): void {
    this.target = document.getElementsByName("parallax");
    this.aboutMeSection = document.getElementById("aboutMeSection");
    this.skillsSection = document.getElementById("skillsSection");
    this.workExperienceSection = document.getElementById("workExperienceSection");
    this.contactSection = document.getElementById("contactSection");
    this.textTransitionSection = document.getElementById("textTransitionSection");
    var lastScrollTop = 0;    

    //Do the animation logic when the user is scrolling
    window.addEventListener('scroll', () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollingUp = false;

      if (scrollTop < lastScrollTop) {
        scrollingUp = true;
      }

      //Clear our timeout throughout the scroll
      window.clearTimeout(this.isScrolling);

      //Set a timeout to run after scrolling ends
      this.isScrolling = setTimeout(() => {
        this.stopSwinging = true;
      }, 66);

      var index = 0
      var length = this.target.length;

      for (index; index < length; index++) {      
          var pos = window.pageYOffset * Number(this.target[index].dataset.rate);
          var posX = 0;
          var posY = 0;

          // console.log("window.innerHeight = ", window.innerHeight);
          // console.log("window.pageYOffset = ", window.pageYOffset);
          
          if (this.target[index].dataset.direction === 'vertical') {
            if (this.target[index].dataset.section == "home") {
              this.target[index].style.transform = 'translate3d(-50%,'+pos+'px, 0px)';
            }
            else {
              this.target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
            }            
          }
          else if (window.pageYOffset > this.aboutMeSection.offsetTop && this.target[index].dataset.section == "sectionTwo") {
            // This keeps the aboutMe section images static
            posX = this.aboutMeSection.offsetTop * Number(this.target[index].dataset.ratex);
            this.target[index].style.transform = 'translate3d('+posX+'px, 0px, 0px)';            
          }
          // else if (this.target[index].dataset.section == "skillsImages") {
          //   posY = window.pageYOffset * Number(this.target[index].dataset.ratey);
          //   this.target[index].style.transform = 'translate3d(0px, '+posY+'px, 0px) rotate(40deg)';
          // }
          else if (this.target[index].dataset.section == "resume" && this.target[index].id == "rightHand") {
            posX = window.pageYOffset * Number(this.target[index].dataset.ratex);
            this.target[index].style.transform = 'translate3d('+posX+'px, 0px, 0px) rotateY(180deg)';
          }
          else {
            // This is for vertical and horizontal movement
            posX = window.pageYOffset * Number(this.target[index].dataset.ratex);
            posY = window.pageYOffset * Number(this.target[index].dataset.ratey);
            this.target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
          }

          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    });
  }
}
