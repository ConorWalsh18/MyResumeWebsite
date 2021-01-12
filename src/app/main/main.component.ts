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
  showBlockReveal: boolean = false;
  mainWindow: any;
  mainDocument: any;

  ngOnInit(): void {
    this.mainWindow = window;
    this.mainDocument = document;
    
    //TODO: Break a lot of this logic out into their own methods

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

    //Do the animation logic when the user is scrolling
    window.addEventListener('scroll', () => {

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
            // Works with 238vh
            if (window.pageYOffset >= 4650) {
              target[index].style.position = "absolute";
              target[index].style.top = "175.2vh";
            }
            else {
              target[index].style.position = "fixed";
              target[index].style.top = "14vh";
            }

            // // Works with 250vh
            // if (window.pageYOffset >= 4830) {
            //   target[index].style.position = "absolute";
            //   target[index].style.top = "189.9vh";
            // }
            // else {
            //   target[index].style.position = "fixed";
            //   target[index].style.top = "14vh";
            // }

            // // Works with 275vh
            // if (window.pageYOffset >= 5110) {
            //   target[index].style.position = "absolute";
            //   target[index].style.top = "211vh";
            // }
            // else {
            //   target[index].style.position = "fixed";
            //   target[index].style.top = "14vh";
            // }
            
            // Works with 215vh
            // if (window.pageYOffset >= 4300) {
            //   target[index].style.position = "absolute";
            //   target[index].style.top = "148.7vh";
            // }
            // else {
            //   target[index].style.position = "fixed";
            //   target[index].style.top = "14vh";
            // }
          }         
          else {
              posX = window.pageYOffset * Number(target[index].dataset.ratex);
              posY = window.pageYOffset * Number(target[index].dataset.ratey);              

              // console.log("posX = ", posX);
              // console.log("posY = ", posY);

              // This is for vertical and horizontal movement
              target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';              
          }
      }
  });
  }  
}
