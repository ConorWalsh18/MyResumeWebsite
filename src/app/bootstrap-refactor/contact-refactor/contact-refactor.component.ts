import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from '../../fade-and-move-in.service';

@Component({
  selector: 'contact-refactor',
  templateUrl: './contact-refactor.component.html',
  styleUrls: ['./contact-refactor.component.css']
})
export class ContactRefactorComponent implements OnInit {

  // constructor(private fadeAndMoveIn: FadeAndMoveInService) { }
  constructor() { }

  stopSwinging: boolean = false;
  isScrolling: any;

  ngOnInit(): void {
    var contactSection = document.getElementById("contactSection");
    var elements = contactSection.getElementsByClassName("fade-and-move-in");
    var pictureFrames = document.getElementsByName("pictureFrame");

    for (var i = 0; i < pictureFrames.length; i++) {
      pictureFrames[i].addEventListener('animationiteration', event => {
        var pictureFrame = event.target as HTMLElement;

        if (this.stopSwinging) {          
          pictureFrame.setAttribute("style", "animation-play-state: paused");
        }
        else {
          pictureFrame.setAttribute("style", "animation-play-state: running");
        }
      });
    }

    window.addEventListener('scroll', () => {      
      // if (window.pageYOffset > contactSection.offsetTop + window.innerHeight - 20 || window.pageYOffset < contactSection.offsetTop - window.innerHeight) {
      //     for (var i = 0; i < elements.length; i++) {
      //       elements[i].classList.remove("show")
      //     }
      // }
      // else {
      //   this.fadeAndMoveIn.start(elements);
      // }

      //Clear our timeout throughout the scroll
      window.clearTimeout(this.isScrolling);

      //Set a timeout to run after scrolling ends
      this.isScrolling = setTimeout(() => {
        this.stopSwinging = true;
      }, 66);

      for (var i = 0; i < pictureFrames.length; i++) {
        pictureFrames[i].style.animationPlayState = "running";       
      }

      this.stopSwinging = false;
    });
  }
}
