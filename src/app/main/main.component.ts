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
  contactSection: any;

  ngOnInit(): void {
    this.target = document.getElementsByName("parallax");
    this.aboutMeSection = document.getElementById("aboutMeSection");
    this.skillsSection = document.getElementById("skillsSection");
    this.workExperienceSection = document.getElementById("workExperienceSection");
    this.contactSection = document.getElementById("contactSection");

    var pictureFrame = document.getElementById("pictureFrame");
    var pictureFrameTwo = document.getElementById("pictureFrame2");
    pictureFrame.addEventListener("animationiteration", () => {
      if (this.stopSwinging) {
        pictureFrame.style.animationPlayState = "paused";
        pictureFrameTwo.style.animationPlayState = "paused";
      }
      else {
        pictureFrame.style.animationPlayState = "running";
        pictureFrameTwo.style.animationPlayState = "running";
      }
    }, false);

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

      //TODO: Replace the hardcoded pageYOffset checks with generuc inner height, offsetTop, etc. values
      //TODO: Rename some variables, clean up the comments/commented out code, and refactor/break a lot of this
      //      logic out into their own methods      
      //TODO: Look into adding a reverse rate property and use that to reverse the direction instead of the wacky
      //      equations we're creating now      
      // var this.target = document.getElementsByName("parallax");
      var index = 0
      var length = this.target.length;      

      for (index; index < length; index++) {      
          var pos = window.pageYOffset * Number(this.target[index].dataset.rate);
          var posX = 0;
          var posY = 0;
          var reverseRate = 0;

          // console.log("window.pageYOffset = ", window.pageYOffset);
          // console.log("window.innerHeight = ", window.innerHeight);
          
          if (this.target[index].dataset.direction === 'vertical') {
            if (window.pageYOffset > 1000 && this.target[index].dataset.section == "sectionTwo") {
              if (Number(this.target[index].dataset.rate) > 0) {
                reverseRate = window.pageYOffset * Number(this.target[index].dataset.rate) - 50;
                pos = 450 - reverseRate;
              }
              else {                
                reverseRate = window.pageYOffset * Number(this.target[index].dataset.rate) + 50;
                pos = -450 - reverseRate;
              }
            }
            
            this.target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
          }          
          else if (window.pageYOffset > this.aboutMeSection.offsetTop && this.target[index].dataset.section == "sectionTwo") {
            // This keeps the aboutMe section images static
            posX = this.aboutMeSection.offsetTop * Number(this.target[index].dataset.ratex);
            this.target[index].style.transform = 'translate3d('+posX+'px, 0px, 0px)';
            
            // TODO: Determine if we want to reverse the direction of the parallax for the about me section
            // if (Number(this.target[index].dataset.ratex) > 0) {
            //   //For the reverse direction we need to subtract the difference of the end position of the image with
            //   //the growing pageYOffset * rate from the end position of the image.
            //   posX = 500 - (window.pageYOffset * Number(this.target[index].dataset.ratex) - 500);
            // }
            // else {
            //   posX = -500 - (window.pageYOffset * Number(this.target[index].dataset.ratex) + 500);
            // }
            
            // this.target[index].style.transform = 'translate3d('+posX+'px, 0px, 0px)';
          }
          else if (window.pageYOffset > 1000 && this.target[index].dataset.section == "sectionThree") {
            this.target[index].style.animationPlayState = "running";
          }
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
            else if (window.pageYOffset >= this.contactSection.offsetTop - window.innerHeight) {
              this.target[index].style.position = "absolute";              
              var skillCircleTop = (this.contactSection.offsetTop - this.skillsSection.offsetTop - window.innerHeight + 100) / 10;
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
