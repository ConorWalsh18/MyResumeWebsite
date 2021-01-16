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