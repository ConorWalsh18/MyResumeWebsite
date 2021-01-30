import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from '../fade-and-move-in.service';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private fadeAndMoveIn: FadeAndMoveInService) { }

  ngOnInit(): void {
    var aboutMeSection = document.getElementById("aboutMeSection");
    var elements = aboutMeSection.getElementsByClassName("fade-and-move-in");

    window.addEventListener('scroll', () => {      
      if (window.pageYOffset > aboutMeSection.offsetTop + window.innerHeight - 20 || window.pageYOffset < aboutMeSection.offsetTop / 2) {
          for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("show")
          }
      }
      else {
        this.fadeAndMoveIn.start(elements);
      }
    });
  }
}


/*********************************************************************************************
// This is for reverse vertical movement
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

// This is for reverse horizontal movement
if (Number(this.target[index].dataset.ratex) > 0) {
  //For the reverse direction we need to subtract the difference of the end position of the image with
  //the growing pageYOffset * rate from the end position of the image.
  posX = 500 - (window.pageYOffset * Number(this.target[index].dataset.ratex) - 500);
}
else {
  posX = -500 - (window.pageYOffset * Number(this.target[index].dataset.ratex) + 500);
}
**********************************************************************************************/