import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  stopSwinging: boolean = false;
  isScrolling: any;
  mainWindow: any;
  mainDocument: any;

  ngOnInit(): void {
    this.mainWindow = window;
    this.mainDocument = document;        

    var pictureFrame = document.getElementById("pictureFrame");
    var pictureFrameTwo = document.getElementById("pictureFrame2");
    var contactSection = document.getElementById("contactSection");
    var skillsSection = document.getElementById("skillsSection");

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

    //TODO: Refactor/break a lot of this logic out into their own methods
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

      //TODO: Rename some variables, clean up the comments/commented out code, and refactor some of the code.
      //TODO: Look into adding a reverse rate property and use that to reverse the direction instead of the wacky
      //      equations we're creating now.
      var target = document.getElementsByName("parallax");
      var index = 0
      var length = target.length;      

      for (index; index < length; index++) {      
          var pos = window.pageYOffset * Number(target[index].dataset.rate);
          var posX = 0;
          var posY = 0;
          var reverseRate = 0;

          console.log("window.pageYOffset = ", window.pageYOffset);
          // console.log("window.innerHeight = ", window.innerHeight);
          
          if (target[index].dataset.direction === 'vertical') {
            if (window.pageYOffset > 1000 && target[index].dataset.section == "sectionTwo") {                            
              if (Number(target[index].dataset.rate) > 0) {
                reverseRate = window.pageYOffset * Number(target[index].dataset.rate) - 50;
                pos = 450 - reverseRate;
              }
              else {                
                reverseRate = window.pageYOffset * Number(target[index].dataset.rate) + 50;
                pos = -450 - reverseRate;
              }
            }
            
            target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
          }          
          else if (window.pageYOffset > 1000 && target[index].dataset.section == "sectionTwo") {
            if (Number(target[index].dataset.ratex) > 0) {
              //For the reverse direction we need to subtract the difference of the end position of the image with
              //the growing pageYOffset * rate from the end position of the image.
              posX = 500 - (window.pageYOffset * Number(target[index].dataset.ratex) - 500);
            }
            else {
              posX = -500 - (window.pageYOffset * Number(target[index].dataset.ratex) + 500);
            }
            
            target[index].style.transform = 'translate3d('+posX+'px, 0px, 0px)';            
          }
          else if (window.pageYOffset > 1000 && target[index].dataset.section == "sectionThree") {
            target[index].style.animationPlayState = "running";
          }
          else if (target[index].dataset.section == "skills") {
            // Works with 275vh            
            if (window.pageYOffset >= contactSection.offsetTop - skillsSection.offsetTop + window.innerHeight) {
              target[index].style.position = "absolute";

              //The 20 subtracted at the end is accounting for the starting top value of -2vh
              var skillCircleTop = (contactSection.offsetTop - skillsSection.offsetTop - window.innerHeight - 20) / 10;
              target[index].style.top = skillCircleTop.toString() + 'vh';
            }
            else {
              target[index].style.position = "fixed";
              target[index].style.top = "-2vh";
            }
          }
          else if (target[index].dataset.section == "skillsImages") {
            var imageOrder = target[index].dataset.order;

            if (window.pageYOffset <= contactSection.offsetTop - skillsSection.offsetTop + window.innerHeight) { 
              if (imageOrder == "1") {
                if (window.pageYOffset < skillsSection.offsetTop + 450) {
                  posX = window.pageYOffset * Number(target[index].dataset.ratex);
                  posY = window.pageYOffset * Number(target[index].dataset.ratey);
                  target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
                }
                else if (window.pageYOffset > skillsSection.offsetTop + 450) {
                  posX = 2450 * Number(target[index].dataset.ratex);
                  posY = window.pageYOffset * Number(target[index].dataset.ratey);
                  target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
                }
              }
              
              if (imageOrder == "2") {
                if ((window.pageYOffset > skillsSection.offsetTop + 500 || scrollingUp) && window.pageYOffset < skillsSection.offsetTop + 1000) {
                  posX = window.pageYOffset * Number(target[index].dataset.ratex);
                  posY = window.pageYOffset * Number(target[index].dataset.ratey);
                  target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
                }
                else if (window.pageYOffset > skillsSection.offsetTop + 1000) {
                  posX = 3000 * Number(target[index].dataset.ratex);
                  posY = window.pageYOffset * Number(target[index].dataset.ratey);
                  target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
                }
              }
            }
          }
          else {
            // This is for vertical and horizontal movement
            posX = window.pageYOffset * Number(target[index].dataset.ratex);
            posY = window.pageYOffset * Number(target[index].dataset.ratey);
            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
          }

          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    });
  }

  showBlockReveal() {
    var workExperienceSection = document.getElementById("workExperienceSection");

    return (window.pageYOffset > workExperienceSection.offsetTop - window.innerHeight
            && window.pageYOffset < workExperienceSection.offsetTop + window.innerHeight);
  }
}
